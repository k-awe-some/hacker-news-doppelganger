import React from "react";

import { formatDate } from "../../utils/helpers";
import { fetchUser } from "../../utils/api";
import queryString from "query-string";

class User extends React.Component {
  state = {
    user: null,
    loadingUser: true,
    error: null
  };

  componentDidMount() {
    const { id } = queryString.parse(this.props.location.search);
    fetchUser(id).then(user => {
      this.setState({
        user,
        loadingUser: false
      });
      return this.state;
    });
  }

  render() {
    const { user, loadingUser, error } = this.state;

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
            <p>{user.submitted}</p>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default User;
