import React from "react";
import PropTypes from "prop-types";

const PostTitle = ({ url, title, id }) => (
  <h4>
    <a href={url} id={id}>
      {title}
    </a>
  </h4>
);

PostTitle.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default PostTitle;
