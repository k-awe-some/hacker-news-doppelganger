import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MetaInfo = ({ title, url, by, time, descendants }) => (
  <div>
    <h4>
      <a href={url}>{title}</a>
    </h4>
    <p>
      by{" "}
      <Link
        to={{
          pathname: "/user",
          search: `?id=${by}`
        }}
      >
        {by}
      </Link>{" "}
      on {time} with {descendants} comments
    </p>
  </div>
);

MetaInfo.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  by: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  descendants: PropTypes.number
};

export default MetaInfo;
