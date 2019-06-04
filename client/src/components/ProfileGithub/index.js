import { connect } from 'react-redux';
import { getGithubRepos } from '../../actions/profile';
import ProfileGithub from './ProfileGithub';

const mapStateToProps = (state) => ({
  repos: state.profile.repos,
});

export default connect(mapStateToProps, { getGithubRepos })(ProfileGithub);
