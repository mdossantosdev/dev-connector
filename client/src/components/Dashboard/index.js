import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import Dashboard from './Dashboard';

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
