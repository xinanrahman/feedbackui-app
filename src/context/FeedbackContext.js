import { createContext, useState } from "react";
import { v4 as generateId } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const updateFeedback = (id, updated) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updated } : item))
    );
  };

  // deletes feedback item
  const deleteFeedback = (id) => {
    setFeedback(feedback.filter((review) => review.id !== id));
  };

  // adds feedback item
  const addFeedback = (newReview) => {
    newReview.id = generateId();
    setFeedback([newReview, ...feedback]);
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
