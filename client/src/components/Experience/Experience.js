import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { Title, Th, Td, BtnDelete } from './styles';

const Experience = ({ experience }) => {
  console.log(experience);
  const experiences = experience.map((exp) => (
    <tr key={exp._id}>
      <Td>{exp.company}</Td>
      <Td>{exp.title}</Td>
      <Td>
        <Moment format='YYYY/MM'>{exp.from}</Moment> -{' '}
        {exp.to === null ? 'Now' : <Moment format='YYYY/MM'>{exp.to}</Moment>}
      </Td>
      <Td>
        <BtnDelete>Delete</BtnDelete>
      </Td>
    </tr>
  ));
  return (
    <Fragment>
      <Title>Experience Credentials</Title>
      <table>
        <thead>
          <tr>
            <Th>Company</Th>
            <Th>Title</Th>
            <Th>Years</Th>
            <Th />
          </tr>
        </thead>
        <tbody>{experiences}</tbody>
      </table>
    </Fragment>
  );
};

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
};

export default Experience;
