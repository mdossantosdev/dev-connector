import { connect } from 'react-redux';
import { deleteExperience } from '../../actions/profile';
import Experience from './Experience';

export default connect(null, { deleteExperience })(Experience);
