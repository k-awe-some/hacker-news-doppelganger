import React from "react";
import PropTypes from "prop-types";

import MetaInfo from "../meta-info/meta-info.component";

const PostsList = ({ posts }) => (
  <ul>
    {posts.map(post => (
      <li key={post.id}>
        <MetaInfo
          title={post.title}
          url={post.url}
          by={post.by}
          time={post.time}
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
