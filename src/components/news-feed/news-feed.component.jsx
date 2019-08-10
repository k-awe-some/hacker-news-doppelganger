import React from "react";
import PropTypes from "prop-types";

import { fetchMainPosts } from "../../utils/api";
import PostsList from "../posts-list/posts-list.component";
import Loading from "../loading/loading.component";

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
    const { posts, error, loading } = this.state;

    if (error) {
      return <h3>{error}</h3>;
    }

    return (
      <React.Fragment>
        {loading === true ? (
          <Loading text="Fetching top stories" />
        ) : (
          <PostsList posts={posts} />
        )}
      </React.Fragment>
    );
  }
}

NewsFeed.propTypes = {
  type: PropTypes.string.isRequired
};

export default NewsFeed;
