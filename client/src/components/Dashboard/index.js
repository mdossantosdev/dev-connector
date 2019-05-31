import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import Dashboard from './Dashboard';

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
