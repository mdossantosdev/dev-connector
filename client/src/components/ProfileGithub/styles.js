import styled from 'styled-components';

export const GithubWrapper = styled.div`
  grid-area: github;

  & > div:last-child {
    flex: 3;
    flex-basis: 20%;
  }
`;

export const Title = styled.h2`
  color: var(--primary-color);
  margin: 1rem;
`;

export const Repo = styled.div`
  display: flex;
  background: #fff;
  color: #333;
  border: #ccc solid 0.1rem;
  padding: 1rem;
  margin: 1rem;

  & > div:first-child {
    flex: 7;
    flex-basis: 70%;
  }
`;

export const Stars = styled.li`
  font-size: 0.8rem;
  padding: 0.3rem;
  text-align: center;
  margin: 0.3rem;
  background: var(--primary-color);
  color: #fff;
`;

export const Watchers = styled.li`
  font-size: 0.8rem;
  padding: 0.3rem;
  text-align: center;
  margin: 0.3rem;
  background: var(--dark-color);
  color: #fff;
`;

export const Forks = styled.li`
  font-size: 0.8rem;
  padding: 0.3rem;
  text-align: center;
  margin: 0.3rem;
  background: var(--light-color);
  color: #333;
`;
