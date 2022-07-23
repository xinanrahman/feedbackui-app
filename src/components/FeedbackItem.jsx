import Card from "./shared/Card";

function FeedbackItem({ review }) {
  return (
    <Card>
      <div className="num-display">{review.rating}</div>
      <div className="text-display">{review.text}</div>
    </Card>
  );
}

export default FeedbackItem;
