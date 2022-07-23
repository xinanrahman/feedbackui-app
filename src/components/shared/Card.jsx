import PropTypes from "prop-types";

function Card(data) {
  if (data.reverse === true) {
    return <div className="card reverse">{data.children}</div>;
  }

  return <div className="card">{data.children}</div>;
}

Card.defaultProps = {
  reverse: false,
};

Card.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Card;
