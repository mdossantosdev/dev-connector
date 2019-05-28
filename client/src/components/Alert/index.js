import { connect } from 'react-redux';
import Alert from './Alert';

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
