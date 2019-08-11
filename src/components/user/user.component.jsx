import React from "react";
import queryString from "query-string";

import "./user.styles.scss";
import { formatDate } from "../../utils/helpers";
import { fetchUser, fetchPosts } from "../../utils/api";
import PostsList from "../posts-list/posts-list.component";
import Loading from "../loading/loading.component";

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
            <Loading text={`Fetching user actitivies'`} />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className="user">
              <h2 className="user-id">{user.id}</h2>
              <p className="user-description">
                joined {formatDate(user.created)} has {user.karma} karma
              </p>
            </div>

            <div className="post">
              <h3 className="post-heading">Posts by {user.id}</h3>
              {loadingPosts === false && <PostsList posts={posts} />}
            </div>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default User;
