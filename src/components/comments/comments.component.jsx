import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { formatDate } from "../../utils/helpers";

const Comments = ({ comments }) => (
  <ul>
    {comments.map(comment => (
      <li key={comment.id}>
        <p>
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

        <p>{comment.text}</p>
      </li>
    ))}
  </ul>
);

Comments.propTypes = {
  comments: PropTypes.array.isRequired
};

export default Comments;