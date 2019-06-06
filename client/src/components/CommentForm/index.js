import { connect } from 'react-redux';
import { addComment } from '../../actions/post';
import CommentForm from './CommentForm';

export default connect(null, { addComment })(CommentForm);
