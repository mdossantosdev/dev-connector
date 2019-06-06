import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import {
  Post,
  Avatar,
  Text,
  PostDate,
  BtnThumb,
  BtnComment,
  CommentCount,
  BtnDelete,
} from './styles';

const PostItem = ({
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
  showActions,
  addLike,
  removeLike,
  deletePost,
}) => {
  return (
    <Post>
      <div>
        <Link to={`/profile/${user}`}>
          <Avatar src={avatar} alt='' />
          <h4>{name}</h4>
        </Link>
      </div>
      <div>
        <Text>{text}</Text>
        <PostDate>
          Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
        </PostDate>

        {showActions && (
          <Fragment>
            <BtnThumb onClick={() => addLike(_id)}>
              <i className='fas fa-thumbs-up' />
              <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
            </BtnThumb>
            <BtnThumb onClick={() => removeLike(_id)}>
              <i className='fas fa-thumbs-down' />
            </BtnThumb>
            <BtnComment to={`/posts/${_id}`}>
              Discussion{' '}
              {comments.length > 0 && <CommentCount>{comments.length}</CommentCount>}
            </BtnComment>
            {!auth.loading && user === auth.user._id && (
              <BtnDelete onClick={() => deletePost(_id)}>
                <i className='fas fa-times' />
              </BtnDelete>
            )}
          </Fragment>
        )}
      </div>
    </Post>
  );
};

PostItem.defaultProps = {
  showActions: true,
};

PostItem.propTypes = {
  auth: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};

export default PostItem;
