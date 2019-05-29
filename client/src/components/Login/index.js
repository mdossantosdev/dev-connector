import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import Login from './Login';

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
