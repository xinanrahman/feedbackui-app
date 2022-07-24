import { v4 as generateId } from "uuid";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import { useState } from "react";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  const [feedbackData, setFeedbackData] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    setFeedbackData(feedbackData.filter((review) => review.id !== id));
  };

  const addFeedback = (newReview) => {
    newReview.id = generateId();
    setFeedbackData([newReview, ...feedbackData]);
  };

  return (
    <>
      <Header text="Feedback UI"></Header>
      <div className="container">
        <FeedbackForm handleAdd={addFeedback}></FeedbackForm>
        <FeedbackStats feedback={feedbackData}></FeedbackStats>
        <FeedbackList
          feedback={feedbackData}
          handleClose={deleteFeedback}
        ></FeedbackList>
      </div>
    </>
  );
}

export default App;
