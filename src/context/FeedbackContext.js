import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  // Fetch feedback
  const fetchFeedback = async () => {
    const response = await fetch("/feedback");
    const data = await response.json();
    setFeedback(data);
  };

  const updateFeedback = async (id, updated) => {
    const response = await fetch(`/feedback/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updated),
    });

    const data = await response.json();

    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  };

  // deletes feedback item
  const deleteFeedback = async (id) => {
    await fetch(`/feedback/${id}`, { method: "DELETE" });

    setFeedback(feedback.filter((review) => review.id !== id));
  };

  // adds feedback item
  const addFeedback = async (newReview) => {
    const response = await fetch("/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newReview),
    });

    const data = await response.json();
    setFeedback([data, ...feedback]);
  };

  // set item that will be edited on-click
  const editFeedback = (item) => {
    setFeedbackEdit({ item: item, edit: true });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback: feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
