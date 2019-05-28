import styled from 'styled-components';
import { palette } from '../../styles/palette';

export const StyledAlert = styled.div`
  padding: 0.8rem;
  margin: 1rem 0;
  opacity: 0.9;
  background: ${(props) => palette[`${props.colors}`].background};
  color: ${(props) => palette[`${props.colors}`].color};
`;
