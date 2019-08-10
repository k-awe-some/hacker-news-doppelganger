import React from "react";
import PropTypes from "prop-types";

import { formatDate } from "../../utils/helpers";
import MetaInfo from "../meta-info/meta-info.component";

const PostsList = ({ posts }) => (
  <ul>
    {posts.map(post => (
      <li key={post.id}>
        <MetaInfo
          id={post.id}
          title={post.title}
          url={post.url}
          by={post.by}
          time={formatDate(post.time)}
          descendants={post.descendants}
        />
      </li>
    ))}
  </ul>
);

PostsList.propTypes = {
  posts: PropTypes.array.isRequired
};

export default PostsList;
