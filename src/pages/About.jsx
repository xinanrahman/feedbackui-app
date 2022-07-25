import { Link } from "react-router-dom";
import Card from "../components/shared/Card";

function About(props) {
  return (
    <Card>
      <div className="about">
        <h1>About</h1>
        <p>
          This is a user interface created using React.js to leave feedback for
          a product or service
        </p>
        <p>Version: 1.0.0</p>
      </div>
    </Card>
  );
}

export default About;
