import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./meta-info.styles.scss";

const MetaInfo = ({ id, by, time, descendants }) => (
  <React.Fragment>
    <p className="meta-info">
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
  </React.Fragment>
);

MetaInfo.propTypes = {
  id: PropTypes.number.isRequired,
  by: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  descendants: PropTypes.number
};

export default MetaInfo;
