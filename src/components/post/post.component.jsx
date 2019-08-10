import React from "react";
import queryString from "query-string";

import { formatDate } from "../../utils/helpers";
import { fetchItem, fetchComments } from "../../utils/api";
import MetaInfo from "../meta-info/meta-info.component";
import Comments from "../comments/comments.component";

class Post extends React.Component {
  state = {
    post: null,
    loadingPost: true,
    comments: null,
    loadingComments: true,
    error: null
  };

  componentDidMount() {
    const { id } = queryString.parse(this.props.location.search);
    fetchItem(id)
      .then(post => {
        this.setState({
          post,
          loadingPost: false
        });
        return fetchComments(this.state.post.kids);
      })
      .then(comments => {
        this.setState({
          comments,
          loadingComments: false
        });
        return this.state;
      })
      .catch(({ message }) =>
        this.setState({
          error: message,
          loadingPost: false,
          loadingComments: false
        })
      );
  }

  render() {
    const { post, loadingPost, comments, loadingComments, error } = this.state;

    if (error) {
      return <h4>{error}</h4>;
    }

    return (
      <React.Fragment>
        {loadingPost === true && loadingComments === true ? (
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
            {loadingComments === false && <Comments comments={comments} />}
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default Post;
