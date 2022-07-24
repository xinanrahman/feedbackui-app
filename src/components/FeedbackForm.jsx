import Card from "./shared/Card";
import { useState } from "react";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

function FeedbackForm({ handleAdd }) {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(1);
  const [btnDisabled, setBtnDisabled] = useState(true);

  const [reviewMessage, setReviewMessage] = useState("");

  const textChange = (e) => {
    if (e.target.value === "") {
      setBtnDisabled(true);
      setReviewMessage(null);
    } else if (e.target.value !== "" && e.target.value.trim().length <= 10) {
      setReviewMessage("Review must be greater than 10 characters!");
      setBtnDisabled(true);
    } else {
      setReviewMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };

  const handleSelected = (r) => {
    setRating(r);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newReview = {
        text: text,
        rating: rating,
      };
      handleAdd(newReview);
      setText("");
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How was your experience?</h2>
        <RatingSelect select={handleSelected}></RatingSelect>
        <div className="input-group">
          <input
            onChange={textChange}
            type="text"
            placeholder="Enter your review"
            value={text}
          ></input>
          <Button type="submit" version="secondary" isDisabled={btnDisabled}>
            Submit
          </Button>
        </div>
        {reviewMessage && <div className="message">{reviewMessage}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
