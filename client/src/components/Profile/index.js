import { connect } from 'react-redux';
import { getProfileById } from '../../actions/profile';
import Profile from './Profile';

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});
export default connect(mapStateToProps, { getProfileById })(Profile);
