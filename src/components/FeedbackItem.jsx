import Card from "./shared/Card";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";

function FeedbackItem({ review, handleClose }) {
  return (
    <Card>
      <div className="num-display">{review.rating}</div>
      <button
        onClick={() => {
          handleClose(review.id);
        }}
        className="close"
      >
        <FaTimes></FaTimes>
      </button>
      <div className="text-display">{review.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  review: PropTypes.object.isRequired,
};

export default FeedbackItem;
