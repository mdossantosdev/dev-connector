import React from 'react';
import { StyledAlert } from './styles';

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => <StyledAlert key={alert.id}>{alert.msg}</StyledAlert>);

export default Alert;
