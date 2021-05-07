import React, { Component } from "react";
import PropTypes from "prop-types";

class Headline extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { header, dsc } = this.props;
    if (!header) {
      return null;
    }
    return (
      <div data-test="HeadlineComponent">
        <h1 data-test="Header">{header}</h1>
        <p data-test="Description">{dsc}</p>
      </div>
    );
  }
}

Headline.propTypes = {
  header: PropTypes.string,
  dsc: PropTypes.string,
  tempArr: PropTypes.arrayOf(
    PropTypes.shape({
      fname: PropTypes.string,
      lname: PropTypes.string,
      email: PropTypes.string,
      age: PropTypes.number,
      onlineStatus: PropTypes.bool,
    })
  ),
};

export default Headline;
