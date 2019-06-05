import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormHeader, Form, Button } from './styles';

const PostForm = ({ addPost }) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    addPost({ text });
    setText('');
  };

  return (
    <div>
      <FormHeader>
        <h3>Say Something...</h3>
      </FormHeader>
      <Form onSubmit={onSubmit}>
        <textarea
          name='text'
          cols='30'
          rows='5'
          placeholder='Create a post'
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <Button type='submit' value='Submit' />
      </Form>
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default PostForm;
