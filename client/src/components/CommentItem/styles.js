import styled from 'styled-components';

export const Comment = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 2rem;
  align-items: center;
  background: #fff;
  color: #333;
  border: #ccc solid 1px;
  padding: 1rem;
  margin: 1rem 0;

  @media only screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 100px;
`;

export const Text = styled.p`
  margin: 1rem 0;
`;

export const CommentDate = styled.p`
  color: #aaa;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
`;

export const BtnDelete = styled.button`
  display: inline-block;
  background: var(--danger-color);
  color: #fff;
  padding: 0.4rem 1.3rem;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  margin-right: 0.5rem;
  transition: opacity 0.2s ease-in;
  outline: none;

  &:hover {
    opacity: 0.8;
  }

  @media only screen and (max-width: 700px) {
    padding: 0.3rem 0.4rem;
  }
`;
