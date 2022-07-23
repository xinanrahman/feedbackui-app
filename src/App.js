import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import { useState } from "react";

function App() {
  const [feedbackData, setFeedbackData] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    setFeedbackData(feedbackData.filter((review) => review.id !== id));
  };

  return (
    <>
      <Header text="Feedback UI"></Header>
      <div className="container">
        <FeedbackList
          feedback={feedbackData}
          handleClose={deleteFeedback}
        ></FeedbackList>
      </div>
    </>
  );
}

export default App;
