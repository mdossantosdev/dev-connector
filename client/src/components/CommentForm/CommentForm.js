import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormHeader, Form, Button } from './styles';

const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    addComment(postId, { text });
    setText('');
  };

  return (
    <div>
      <FormHeader>
        <h3>Leave a Comment</h3>
      </FormHeader>
      <Form onSubmit={onSubmit}>
        <textarea
          name='text'
          cols='30'
          rows='5'
          placeholder='Create a comment'
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <Button type='submit' value='Submit' />
      </Form>
    </div>
  );
};

CommentForm.propTypes = {
  postId: PropTypes.string.isRequired,
  addComment: PropTypes.func.isRequired,
};

export default CommentForm;
