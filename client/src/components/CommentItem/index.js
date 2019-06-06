import { connect } from 'react-redux';
import CommentItem from './CommentItem';

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, null)(CommentItem);
