import React from "react";
import PropTypes from "prop-types";

import { fetchMainPosts } from "../../utils/api";
import PostsList from "../posts-list/posts-list.component";

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
    const { posts, error } = this.state;
    console.log(posts);
    if (error) {
      return <h3>{error}</h3>;
    }

    return <PostsList posts={posts} />;
  }
}

NewsFeed.propTypes = {
  type: PropTypes.string.isRequired
};

export default NewsFeed;
