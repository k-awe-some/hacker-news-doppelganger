import React from "react";
import PropTypes from "prop-types";

const MetaInfo = ({ title, url, by, time, descendants }) => (
  <div>
    <h4>
      <a href={url}>{title}</a>
    </h4>
    <p>
      by {by} on {time} with {descendants} comments
    </p>
  </div>
);

MetaInfo.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  by: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  descendants: PropTypes.number
};

export default MetaInfo;
