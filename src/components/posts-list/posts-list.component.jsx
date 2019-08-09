import React from "react";

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

export default PostsList;
