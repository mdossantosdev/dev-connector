import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addEducation } from '../../actions/profile';
import AddEducation from './AddEducation';

export default connect(null, { addEducation })(withRouter(AddEducation));
