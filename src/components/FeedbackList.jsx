import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import FeedbackItem from "./FeedbackItem";

function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) {
    return "No Feedback Submitted";
  }

  return (
    <div className="feedback-list">
      {feedback.map((review) => (
        <FeedbackItem key={review.id} review={review}></FeedbackItem>
      ))}
    </div>
  );
}

export default FeedbackList;
