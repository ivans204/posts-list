import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { getCommentsByPostId, getPostById, getUserById } from '../../api';
import ErrorMessage from '../../components/ErrorMessage';
import PostItem from '../../components/PostItem';

const PostPage = ({ propMessage }) => {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [post, setPost] = useState([]);
  const [user, setUser] = useState('');

  const componentName = 'Post';

  useEffect(() => console.log(`${propMessage} ${componentName}`), []);

  useEffect(() => {
    setIsLoading(true);
    getPostById(id)
      .then(async (post) => {
        setPost(post.data);

        await fetchUser(post.data.userId);
      })
      .catch((err) => {
        handleRequestError(err, `Post with id ${id} does not exist`);
      })
      .finally(() => setIsLoading(false));

    getCommentsByPostId(id)
      .then((comments) => {
        setComments(comments.data);
      })
      .catch((err) => {
        handleRequestError(err, `User with id ${id} does not exist`);
      })
      .finally(() => setIsLoading(false));
  }, [id]);

  const handleRequestError = (err, message) => {
    err.response.status === 404
      ? setError(message)
      : setError('Something went wrong');
  };

  const fetchUser = async (userId) => {
    await getUserById(userId)
      .then((user) => {
        setUser(user.data);
      })
      .catch((err) => {
        handleRequestError(err, `User with id ${userId} does not exist`);
      });
  };

  if (error) return <ErrorMessage message={error} propMessage={propMessage} />;
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="container">
      <PostItem
        author={user}
        comments={comments}
        post={post}
        propMessage={propMessage}
      />
      <Link to="/posts">
        <button className="btn btn-primary">All posts</button>
      </Link>
    </div>
  );
};

PostPage.propTypes = {
  propMessage: PropTypes.string,
};

export default PostPage;
