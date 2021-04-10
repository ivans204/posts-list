import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { getComments, getPosts, getUsers } from '../../api';
import ErrorMessage from '../../components/ErrorMessage';
import PostItem from '../../components/PostItem';

const PostList = ({ propMessage }) => {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState('');
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  const componentName = 'PostList';

  useEffect(() => console.log(`${propMessage} ${componentName}`), []);

  useEffect(() => {
    getPosts()
      .then((posts) => {
        setPosts(posts.data);
      })
      .catch((err) => {
        handleRequestError(err, 'Cannot fetch posts');
      });

    getComments()
      .then((comments) => {
        setComments(comments.data);
      })
      .catch((err) => {
        handleRequestError(err, 'Cannot fetch posts');
      });

    getUsers()
      .then((users) => {
        setUsers(users.data);
      })
      .catch((err) => {
        handleRequestError(err, 'Cannot fetch posts');
      });
  }, []);

  const handleRequestError = (err, message) => {
    err.response.status === 404
      ? setError(message)
      : setError('Something went wrong');
  };

  if (error) return <ErrorMessage message={error} propMessage={propMessage} />;

  return (
    <div>
      {users.length &&
        posts.map((post) => {
          const postComments = comments.filter(
            (comment) => comment.postId === post.id
          );
          const author = users.find((user) => user.id === post.userId);

          return (
            <PostItem
              author={author}
              comments={postComments}
              key={post.id}
              post={post}
              propMessage={propMessage}
            />
          );
        })}
    </div>
  );
};

PostList.propTypes = {
  propMessage: PropTypes.string,
};

export default PostList;
