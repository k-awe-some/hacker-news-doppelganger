import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./meta-info.styles.scss";

const MetaInfo = ({ id, title, url, by, time, descendants }) => (
  <div className="meta-info">
    <h4 className="meta-info-title">
      <a href={url}>{title}</a>
    </h4>
    <p className="meta-info-description">
      by{" "}
      <Link
        to={{
          pathname: "/user",
          search: `?id=${by}`
        }}
      >
        {by}
      </Link>{" "}
      on {time} with{" "}
      <Link
        to={{
          pathname: "/post",
          search: `?id=${id}`
        }}
      >
        {descendants}
      </Link>{" "}
      {descendants === 1 ? <span>comment</span> : <span>comments</span>}
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
