import React from "react";
import queryString from "query-string";

import { formatDate } from "../../utils/helpers";
import { fetchUser, fetchPosts } from "../../utils/api";
import PostsList from "../posts-list/posts-list.component";

class User extends React.Component {
  state = {
    user: null,
    loadingUser: true,
    posts: null,
    loadingPosts: true,
    error: null
  };

  componentDidMount() {
    const { id } = queryString.parse(this.props.location.search);
    fetchUser(id)
      .then(user => {
        this.setState({
          user,
          loadingUser: false
        });
        return fetchPosts(user.submitted.slice(0, 30));
      })
      .then(posts => {
        this.setState({
          posts,
          loadingPosts: false
        });
        return this.state;
      })
      .catch(({ message }) =>
        this.setState({
          error: message,
          loadingUser: false,
          loadingPost: false
        })
      );
  }

  render() {
    const { user, loadingUser, posts, loadingPosts, error } = this.state;
    if (error) {
      return <h4>{error}</h4>;
    }

    return (
      <React.Fragment>
        {loadingUser === true ? (
          <React.Fragment>
            <h2>LOADING</h2>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <h2>{user.id}</h2>
            <p>
              joined {formatDate(user.created)} has {user.karma} karma
            </p>
            <h4>Posts</h4>
            {loadingPosts === false && <PostsList posts={posts} />}
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default User;
