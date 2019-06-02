import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Title,
  SubTitle,
  FormGroup,
  FormInput,
  FormTextArea,
  BtnWrapper,
  BtnSubmit,
  BtnGoBack,
} from './styles';

const AddEducation = ({ addEducation, history }) => {
  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    fieldofstudy: '',
    from: '',
    to: '',
    current: false,
    description: '',
  });

  const { school, degree, fieldofstudy, from, to, current, description } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addEducation(formData, history);
  };

  return (
    <Fragment>
      <Title>Add Your Education</Title>
      <SubTitle>
        <i className='fas fa-code-branch' /> Add any school or bootcamp that you have
        attended
      </SubTitle>
      <small>* = required field</small>
      <form onSubmit={onSubmit}>
        <FormGroup>
          <FormInput
            type='text'
            placeholder='* School or Bootcamp'
            name='school'
            value={school}
            onChange={onChange}
          />
        </FormGroup>
        <FormGroup>
          <FormInput
            type='text'
            placeholder='* Degree or Certificate'
            name='degree'
            value={degree}
            onChange={onChange}
          />
        </FormGroup>
        <FormGroup>
          <FormInput
            type='text'
            placeholder='Field of Study'
            name='fieldofstudy'
            value={fieldofstudy}
            onChange={onChange}
          />
        </FormGroup>
        <FormGroup>
          <h4>From Date</h4>
          <FormInput type='date' name='from' value={from} onChange={onChange} />
        </FormGroup>
        <FormGroup>
          <p>
            <input
              type='checkbox'
              name='current'
              checked={current}
              value={current}
              onChange={() => setFormData({ ...formData, current: !current })}
            />{' '}
            Current School or Bootcamp
          </p>
        </FormGroup>
        <FormGroup>
          <h4>To Date</h4>
          <FormInput
            type='date'
            name='to'
            value={to}
            onChange={onChange}
            disabled={current}
          />
        </FormGroup>
        <FormGroup>
          <FormTextArea
            name='description'
            cols='30'
            rows='5'
            placeholder='Program Description'
            value={description}
            onChange={onChange}
          />
        </FormGroup>
        <BtnWrapper>
          <BtnSubmit type='submit' value='Submit' />
          <BtnGoBack to='/dashboard'>Go Back</BtnGoBack>
        </BtnWrapper>
      </form>
    </Fragment>
  );
};

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
};

export default AddEducation;
