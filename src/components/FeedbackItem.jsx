import Card from "./shared/Card";
import PropTypes from "prop-types";
import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({ review }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  return (
    <Card>
      <div className="num-display">{review.rating}</div>
      <button
        onClick={() => {
          deleteFeedback(review.id);
        }}
        className="close"
      >
        <FaTimes></FaTimes>
      </button>
      <button className="edit" onClick={() => editFeedback(review)}>
        <FaEdit></FaEdit>
      </button>
      <div className="text-display">{review.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  review: PropTypes.object.isRequired,
};

export default FeedbackItem;
