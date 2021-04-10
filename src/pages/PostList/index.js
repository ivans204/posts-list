import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { getComments, getPosts, getUsers } from '../../api';
import PostItem from '../../components/PostItem';

const PostList = ({ propMessage }) => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [users, setUsers] = useState([]);

  const componentName = 'PostList';

  useEffect(() => console.log(`${propMessage} ${componentName}`), []);

  useEffect(() => {
    getPosts().then((posts) => {
      setPosts(posts.data);
    });

    getComments().then((comments) => {
      setComments(comments.data);
    });

    getUsers().then((users) => {
      setUsers(users.data);
    });
  }, []);

  return (
    <div>
      {users.length &&
        // eslint-disable-next-line
        posts.map((post) => {
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
