import React from 'react';
import PropTypes from 'prop-types';
import { StyledAlert } from './styles';

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <StyledAlert key={alert.id} colors={alert.alertType}>
      {alert.msg}
    </StyledAlert>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

export default Alert;
