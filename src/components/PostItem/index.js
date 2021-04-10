import { PropTypes } from 'prop-types';

const PostItem = ({ author, comments, post }) => {
  const { body, id, title } = post;
  return (
    <div className="post-wrap p-4 mb-4">
      <h2>{title}</h2>
      <p className="my-4">{body}</p>
      <p>Comments:</p>
      <ul>
        {comments.map((comment) => {
          if (comment.postId === id) {
            return <li key={comment.id}>{comment.body}</li>;
          }
        })}
      </ul>
      <p className="mb-0 pt-3 border-top">
        Author: <span className="font-weight-bold">{author.username}</span>
      </p>
    </div>
  );
};

PostItem.propType = {
  author: PropTypes.object,
  comments: PropTypes.array,
  post: PropTypes.object,
  propMessage: PropTypes.string,
};

export default PostItem;
