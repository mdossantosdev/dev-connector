import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { Comment, Avatar, Text, CommentDate, BtnDelete } from './styles';

const CommentItem = ({
  postId,
  comment: { _id, text, name, avatar, user, date },
  auth,
  deleteComment,
}) => {
  return (
    <Comment>
      <div>
        <Link to={`/profile/${user}`}>
          <Avatar src={avatar} />
          <h4>{name}</h4>
        </Link>
      </div>
      <div>
        <Text>{text}</Text>
        <CommentDate>
          Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
        </CommentDate>
        {!auth.loading && user === auth.user._id && (
          <BtnDelete onClick={() => deleteComment(postId, _id)}>
            <i className='fas fa-times' />
          </BtnDelete>
        )}
      </div>
    </Comment>
  );
};

CommentItem.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired,
};

export default CommentItem;
