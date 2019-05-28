import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import Register from './Register';

export default connect(null, { setAlert, register })(Register);
