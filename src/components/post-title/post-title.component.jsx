import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./post-title.styles.scss";

const PostTitle = ({ url, title, id, fontSize }) => (
  <h4 className={`post-title ${fontSize}`}>
    {url ? (
      <a href={url}>{title}</a>
    ) : (
      <Link to={`/post?id=${id}`}>{title}</Link>
    )}
  </h4>
);

PostTitle.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  fontSize: PropTypes.string
};

export default PostTitle;
