import React from "react";
import queryString from "query-string";

import { formatDate } from "../../utils/helpers";
import { fetchItem } from "../../utils/api";
import MetaInfo from "../meta-info/meta-info.component";

class Post extends React.Component {
  state = {
    post: null,
    loadingPost: true
  };

  componentDidMount() {
    const { id } = queryString.parse(this.props.location.search);
    fetchItem(id).then(post => {
      this.setState({
        post,
        loadingPost: false
      });
      return this.state;
    });
  }

  render() {
    const { post, loadingPost } = this.state;
    return (
      <React.Fragment>
        {loadingPost === true ? (
          <h2>LOADING</h2>
        ) : (
          <React.Fragment>
            <MetaInfo
              id={post.id}
              title={post.title}
              url={post.url}
              by={post.by}
              time={formatDate(post.time)}
              descendants={post.descendants}
            />
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default Post;
