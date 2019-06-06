import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader';
import { GithubWrapper, Title, Repo, Stars, Watchers, Forks } from './styles';

const ProfileGithub = ({ username, getGithubRepos, repos }) => {
  useEffect(() => {
    getGithubRepos(username);
  }, [getGithubRepos, username]);

  return (
    <GithubWrapper>
      <Title>Github Repos</Title>
      {repos === null ? (
        <Loader />
      ) : (
        repos.map((repo) => (
          <Repo key={repo.id}>
            <div>
              <h4>
                <a href={repo.html_url} target='_blank' rel='noopener noreferrer'>
                  {repo.name}
                </a>
              </h4>
              <p>{repo.description}</p>
            </div>
            <div>
              <ul>
                <Stars>Stars: {repo.stargazers_count}</Stars>
                <Watchers>Watchers: {repo.watchers_count}</Watchers>
                <Forks>Forks: {repo.forks_count}</Forks>
              </ul>
            </div>
          </Repo>
        ))
      )}
    </GithubWrapper>
  );
};

ProfileGithub.propTypes = {
  username: PropTypes.string.isRequired,
  getGithubRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
};

export default ProfileGithub;
