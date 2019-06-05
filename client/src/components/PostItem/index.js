import { connect } from 'react-redux';
import PostItem from './PostItem';

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(PostItem);
