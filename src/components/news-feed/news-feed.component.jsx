import React from "react";

import { fetchMainPosts } from "../../utils/api";

class NewsFeed extends React.Component {
  state = {
    posts: [],
    error: null,
    loading: true
  };

  componentDidMount() {
    this.handleFetch();
  }

  handleFetch() {
    this.setState({
      posts: [],
      error: null,
      loading: true
    });

    fetchMainPosts(this.props.type)
      .then(posts =>
        this.setState({
          posts,
          error: null,
          loading: false
        })
      )
      .catch(({ message }) =>
        this.setState({
          error: message,
          loading: false
        })
      );
  }

  render() {
    const { posts } = this.state;
    return (
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h4>{post.title}</h4>
            <p>
              by {post.by} on {post.time} with {post.descendants} comments
            </p>
          </li>
        ))}
      </ul>
    );
  }
}

export default NewsFeed;
