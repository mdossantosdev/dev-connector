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

const AddExperience = ({ addExperience, history }) => {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    from: '',
    to: '',
    current: false,
    description: '',
  });

  const { title, company, location, from, to, current, description } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addExperience(formData, history);
  };

  return (
    <Fragment>
      <Title>Add An Experience</Title>
      <SubTitle>
        <i className='fas fa-code-branch' /> Add any developper positions that you
        have had in the past
      </SubTitle>
      <small>* = required field</small>
      <form onSubmit={onSubmit}>
        <FormGroup>
          <FormInput
            type='text'
            placeholder='* Job Title'
            name='title'
            value={title}
            onChange={onChange}
          />
        </FormGroup>
        <FormGroup>
          <FormInput
            type='text'
            placeholder='* Company'
            name='company'
            value={company}
            onChange={onChange}
          />
        </FormGroup>
        <FormGroup>
          <FormInput
            type='text'
            placeholder='Location'
            name='location'
            value={location}
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
              value={current}
              onChange={() => setFormData({ ...formData, current: !current })}
            />{' '}
            Current Job
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
            placeholder='Job Description'
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

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
};

export default AddExperience;
