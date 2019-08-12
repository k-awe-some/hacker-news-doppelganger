import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./comments.styles.scss";
import { formatDate } from "../../utils/helpers";

const Comments = ({ comments }) => (
  <ul>
    {comments.map(comment => (
      <li key={comment.id} className="comment">
        <p className="comment-description">
          by{" "}
          <Link
            to={{
              pathname: "/user",
              search: `?id=${comment.by}`
            }}
          >
            {comment.by}
          </Link>{" "}
          on {formatDate(comment.time)}
        </p>

        <p
          className="comment-text"
          dangerouslySetInnerHTML={{ __html: comment.text }}
        />
      </li>
    ))}
  </ul>
);

Comments.propTypes = {
  comments: PropTypes.array.isRequired
};

export default Comments;
