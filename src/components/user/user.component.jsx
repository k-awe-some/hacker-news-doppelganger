import React from "react";

import { fetchUser } from "../../utils/api";

class User extends React.Component {
  state = {
    id: null,
    created: null,
    karma: null,
    about: null,
    submitted: []
  };

  componentDidMount() {
    this.handleFetch();
  }

  handleFetch() {
    fetchUser(this.props.username).then(user =>
      this.setState({
        id: user.id,
        created: user.created,
        karma: user.karma,
        about: user.about,
        submitted: user.submitted
      })
    );
  }

  render() {
    const { id, created, karma, about, submitted } = this.state;
    return (
      <div>
        <h2>{id}</h2>
        <p>
          joined {created} has {karma} karma
        </p>
        <p>{about}</p>
      </div>
    );
  }
}

export default User;
