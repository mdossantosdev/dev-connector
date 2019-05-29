import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  LoginWrapper,
  Title,
  SubTitle,
  Form,
  FormGroup,
  Input,
  BtnLogin,
} from './styles';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <LoginWrapper>
        <Title>Login</Title>
        <SubTitle>
          <i className='fas fa-user' /> Sign Into Your Account
        </SubTitle>
        <Form onSubmit={onSubmit}>
          <FormGroup>
            <Input
              type='email'
              placeholder='Email'
              name='email'
              value={email}
              onChange={onChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Input
              type='password'
              placeholder='Password'
              name='password'
              value={password}
              onChange={onChange}
            />
          </FormGroup>
          <BtnLogin type='submit' value='Login' />
        </Form>
        <p>
          Don't have an account? <Link to='/register'>Register</Link>
        </p>
      </LoginWrapper>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

export default Login;
