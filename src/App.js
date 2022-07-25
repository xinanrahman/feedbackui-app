import { v4 as generateId } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import { useState } from "react";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import About from "./pages/About";
import AboutIcon from "./components/Icons/AboutIcon";

function App() {
  const [feedbackData, setFeedbackData] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    setFeedbackData(feedbackData.filter((review) => review.id !== id));
  };

  const addFeedback = (newReview) => {
    newReview.id = generateId();
    setFeedbackData([newReview, ...feedbackData]);
  };

  return (
    <Router>
      <Header text="Feedback UI"></Header>
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                {" "}
                <FeedbackForm handleAdd={addFeedback}></FeedbackForm>
                <FeedbackStats feedback={feedbackData}></FeedbackStats>
                <FeedbackList
                  feedback={feedbackData}
                  handleClose={deleteFeedback}
                ></FeedbackList>
                <AboutIcon></AboutIcon>
              </>
            }
          ></Route>
          <Route path="/about" element={<About></About>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
