import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';

import Register from './Register';

export default connect(null, { setAlert })(Register);
