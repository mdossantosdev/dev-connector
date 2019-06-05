import { connect } from 'react-redux';
import { addLike } from '../../actions/post';
import PostItem from './PostItem';

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addLike })(PostItem);
