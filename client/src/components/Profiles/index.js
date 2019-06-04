import { connect } from 'react-redux';
import { getProfiles } from '../../actions/profile';
import Profiles from './Profiles';

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
