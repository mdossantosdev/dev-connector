import { connect } from 'react-redux';
import { getPost } from '../../actions/post';
import Post from './Post';

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPost })(Post);
