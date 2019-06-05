import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader/Loader';
import PostItem from '../PostItem';
import PostForm from '../PostForm';
import { Title, SubTitle } from './styles';

const Posts = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return loading ? (
    <Loader />
  ) : (
    <Fragment>
      <Title>Posts</Title>
      <SubTitle>
        <i className='fas fa-user' /> Welcome to the community
      </SubTitle>
      <PostForm />
      {posts.map((post) => (
        <PostItem key={post._id} post={post} />
      ))}
    </Fragment>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

export default Posts;
