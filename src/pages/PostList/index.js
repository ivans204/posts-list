import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { getComments, getPosts, getUsers } from '../../api';
import ErrorMessage from '../../components/ErrorMessage';
import PostItem from '../../components/PostItem';
import Spinner from '../../components/Spinner';

const PostList = ({ propMessage }) => {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState('');
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const componentName = 'PostList';

  useEffect(() => console.log(`${propMessage} ${componentName}`), []);

  useEffect(() => {
    setIsLoading(true);

    getPosts()
      .then((posts) => {
        setPosts(posts.data);
      })
      .catch((err) => {
        handleRequestError(err, 'Cannot fetch posts');
      })
      .finally(() => {
        setIsLoading(false);
      });

    getComments()
      .then((comments) => {
        setComments(comments.data);
      })
      .catch((err) => {
        handleRequestError(err, 'Cannot fetch posts');
      })
      .finally(() => {
        setIsLoading(false);
      });

    getUsers()
      .then((users) => {
        setUsers(users.data);
      })
      .catch((err) => {
        handleRequestError(err, 'Cannot fetch posts');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleRequestError = (err, message) => {
    err.response.status === 404
      ? setError(message)
      : setError('Something went wrong');
  };

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(searchValue.toLowerCase())
  );

  const filteredData = posts.filter((post) => {
    if (searchValue && filteredUsers) {
      return filteredUsers.find((user) => {
        if (post.userId === user.id) return post;
      });
    } else {
      return post;
    }
  });

  if (error) return <ErrorMessage message={error} propMessage={propMessage} />;
  if (isLoading) return <Spinner propMessage={propMessage} />;

  return (
    <div className="container">
      <input
        placeholder="Search the list by author..."
        onChange={(e) => setSearchValue(e.target.value.trim())}
      />
      {filteredData && filteredData.length === 0 ? (
        <h1>No posts available.</h1>
      ) : (
        users.length &&
        filteredData.map((post) => {
          const postComments = comments.filter(
            (comment) => comment.postId === post.id
          );
          const author = users.find((user) => user.id === post.userId);

          return (
            <PostItem
              author={author}
              comments={postComments}
              href={`/post/${post.id}`}
              key={post.id}
              post={post}
              propMessage={propMessage}
            />
          );
        })
      )}
    </div>
  );
};

PostList.propTypes = {
  propMessage: PropTypes.string,
};

export default PostList;
