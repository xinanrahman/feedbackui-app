import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedback }) {
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
