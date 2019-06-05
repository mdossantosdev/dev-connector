import { connect } from 'react-redux';
import { getPosts } from '../../actions/post';
import Posts from './Posts';

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Posts);
