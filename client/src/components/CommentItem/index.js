import { connect } from 'react-redux';
import { deleteComment } from '../../actions/post';
import CommentItem from './CommentItem';

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
