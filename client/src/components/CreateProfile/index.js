import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createProfile } from '../../actions/profile';
import CreateProfile from './CreateProfile';

export default connect(null, { createProfile })(withRouter(CreateProfile));
