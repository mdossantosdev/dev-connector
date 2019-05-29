import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import Login from './Login';

export default connect(null, { login })(Login);