import { connect } from 'react-redux';
import { addPost } from '../../actions/post';
import PostForm from './PostForm';

export default connect(null, { addPost })(PostForm);
