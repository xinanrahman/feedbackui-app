import PropTypes from "prop-types";

import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedback, handleClose }) {
  if (!feedback || feedback.length === 0) {
    return "No Feedback Submitted";
  }

  return (
    <div className="feedback-list">
      {feedback.map((review) => (
        <FeedbackItem
          key={review.id}
          review={review}
          handleClose={handleClose}
        ></FeedbackItem>
      ))}
    </div>
  );
}

FeedbackList.propTypes = {
  feedback: PropTypes.array,
};

export default FeedbackList;
