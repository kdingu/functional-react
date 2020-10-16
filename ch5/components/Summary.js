import { PropTypes } from "prop-types";
import React from "react";

class Summary extends React.Component {
  //   es7 syntact ... not working with curerct babel config
  //   static propTypes = {
  //     ingredients: PropTypes.number,
  //     steps: PropTypes.number,
  //     title: (props, propName) =>
  //       typeof props[propName] !== "string"
  //         ? new Error("Title must be string")
  //         : props[propName].length > 20
  //         ? new Error("title is over 20 characters")
  //         : null,
  //   };

  //   static defaultProps = {
  //     ingredients: 0,
  //     steps: 0,
  //     title: "[recipe title not provided]",
  //   };

  render() {
    const { ingredients, steps, title } = this.props;
    return (
      <div className="summary">
        <h1>{title}</h1>
        <p>
          <span>{ingredients} Ingredients | </span>
          <span>{steps} Steps</span>
        </p>
      </div>
    );
  }
}
Summary.propTypes = {
  ingredients: PropTypes.number,
  steps: PropTypes.number,
  title: (props, propName) =>
    typeof props[propName] !== "string"
      ? new Error("Title must be string")
      : props[propName].length > 20
      ? new Error("title is over 20 characters")
      : null,
};
Summary.defaultProps = {
  ingredients: 0,
  steps: 0,
  title: "[recipe title not provided]",
};

module.exports = Summary;
