import React from "react";
import queryString from "query-string";

import { formatDate } from "../../utils/helpers";
import { fetchItem, fetchComments } from "../../utils/api";
import PostTitle from "../post-title/post-title.component";
import MetaInfo from "../meta-info/meta-info.component";
import Comments from "../comments/comments.component";
import Loading from "../loading/loading.component";

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
        return fetchComments(this.state.post.kids || []);
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
        {loadingPost === true ? (
          <Loading text="Fetching post" />
        ) : (
          <React.Fragment>
            <div className="tilte">
              <PostTitle
                url={post.url}
                title={post.title}
                id={post.id}
                fontSize="large"
              />
            </div>

            <MetaInfo
              id={post.id}
              by={post.by}
              time={formatDate(post.time)}
              descendants={post.descendants}
            />
          </React.Fragment>
        )}
        {loadingComments === true ? (
          loadingPost === false && <Loading text="Fetching comments" />
        ) : (
          <Comments comments={comments} />
        )}
      </React.Fragment>
    );
  }
}

export default Post;
