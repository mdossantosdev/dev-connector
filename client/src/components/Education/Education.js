import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { Title, Td, Th, BtnDelete } from './styles';

const Education = ({ education }) => {
  const educations = education.map((edu) => (
    <tr key={edu._id}>
      <Td>{edu.school}</Td>
      <Td>{edu.degree}</Td>
      <Td>
        <Moment format='YYYY/MM'>{edu.from}</Moment> -{' '}
        {edu.to === null ? 'Now' : <Moment format='YYYY/MM'>{edu.to}</Moment>}
      </Td>
      <Td>
        <BtnDelete>Delete</BtnDelete>
      </Td>
    </tr>
  ));

  return (
    <Fragment>
      <Title>Education credentials</Title>
      <table>
        <thead>
          <tr>
            <Th>School</Th>
            <Th>Degree</Th>
            <Th>Years</Th>
            <Th />
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </table>
    </Fragment>
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired,
};

export default Education;
