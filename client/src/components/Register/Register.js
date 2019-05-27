import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  RegisterWrapper,
  Title,
  SubTitle,
  Form,
  FormGroup,
  Input,
  SmallText,
  BtnRegister,
} from './styles';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { name, email, password, confirmPassword } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.log('Passwords do not match');
    } else {
      console.log(formData);
    }
  };

  return (
    <Fragment>
      <RegisterWrapper>
        <Title>Register</Title>
        <SubTitle>
          <i className='fas fa-user' /> Create Your Account
        </SubTitle>
        <Form onSubmit={onSubmit}>
          <FormGroup>
            <Input
              type='text'
              placeholder='Name'
              name='name'
              value={name}
              onChange={onChange}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type='email'
              placeholder='Email'
              name='email'
              value={email}
              onChange={onChange}
            />
            <SmallText>
              This site uses Gravatar, so if you want a profile image use a Gravatar
              email
            </SmallText>
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
          <FormGroup>
            <Input
              type='password'
              placeholder='Confirm Password'
              name='confirmPassword'
              value={confirmPassword}
              onChange={onChange}
              minLength='10'
            />
          </FormGroup>
          <BtnRegister type='submit' value='Register' />
        </Form>
        <p>
          Already have an account? <Link to='/login'>Login</Link>
        </p>
      </RegisterWrapper>
    </Fragment>
  );
};

export default Register;
