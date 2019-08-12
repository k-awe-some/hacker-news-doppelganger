import React from "react";
import PropTypes from "prop-types";

import { formatDate } from "../../utils/helpers";
import PostTitle from "../post-title/post-title.component";
import MetaInfo from "../meta-info/meta-info.component";

const PostsList = ({ posts }) => (
  <ul>
    {posts.map(post => (
      <li key={post.id}>
        <PostTitle url={post.url} title={post.title} id={post.id} />
        <MetaInfo
          id={post.id}
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
