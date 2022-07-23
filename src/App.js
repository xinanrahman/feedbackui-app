import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import { useState } from "react";
import FeedbackStats from "./components/FeedbackStats";

function App() {
  const [feedbackData, setFeedbackData] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    setFeedbackData(feedbackData.filter((review) => review.id !== id));
  };

  return (
    <>
      <Header text="Feedback UI"></Header>
      <div className="container">
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
