function FeedbackStats({ feedback }) {
  let calcAverage =
    feedback.reduce((prev, curr) => {
      return prev + curr.rating;
    }, 0) / feedback.length;

  calcAverage = calcAverage.toFixed(1);

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(calcAverage) ? 0 : calcAverage}</h4>
    </div>
  );
}

export default FeedbackStats;
