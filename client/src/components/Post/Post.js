import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader/Loader';
import PostItem from '../PostItem';
import CommentForm from '../CommentForm';
import CommentItem from '../CommentItem';
import { Button } from './styles';

const Post = ({ getPost, post: { post, loading }, match }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost, match.params.id]);

  return loading || post === null ? (
    <Loader />
  ) : (
    <Fragment>
      <Button to='/posts'>Back To Posts</Button>
      <PostItem post={post} showActions={false} />
      <CommentForm postId={post._id} />
      <div>
        {post.comments.map((comment) => (
          <CommentItem key={comment._id} comment={comment} postId={post._id} />
        ))}
      </div>
    </Fragment>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

export default Post;
