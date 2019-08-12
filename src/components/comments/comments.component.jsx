import React from "react";
import PropTypes from "prop-types";

import "./comments.styles.scss";
import MetaInfo from "../meta-info/meta-info.component";
import { formatDate } from "../../utils/helpers";

const Comments = ({ comments }) => (
  <ul>
    {comments.map(comment => (
      <li key={comment.id} className="comment">
        <MetaInfo
          id={comment.id}
          by={comment.by}
          time={formatDate(comment.time)}
        />

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
