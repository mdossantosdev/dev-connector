import { connect } from 'react-redux';
import { deleteEducation } from '../../actions/profile';
import Education from './Education';

export default connect(null, { deleteEducation })(Education);
