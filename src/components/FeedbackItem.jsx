function FeedbackItem({ review }) {
  return (
    <div className="card">
      <div className="num-display">{review.rating}</div>
      <div className="text-display">{review.text}</div>
    </div>
  );
}

export default FeedbackItem;
