import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addExperience } from '../../actions/profile';
import AddExperience from './AddExperience';

export default connect(null, { addExperience })(withRouter(AddExperience));
