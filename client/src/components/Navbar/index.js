import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import Navbar from './Navbar';

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
