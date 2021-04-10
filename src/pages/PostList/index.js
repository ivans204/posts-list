import { useEffect, useState } from 'react';

import { getComments, getPosts, getUsers } from '../../api';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [users, setUsers] = useState([]);

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
      {posts &&
        // eslint-disable-next-line
        posts.map((post) => {
          return (
            <div key={post.id}>
              <p>title: {post.title}</p>
              <p>body: {post.body}</p>
              <p>Comments:</p>
              <ul>
                {comments.map((comment) => {
                  if (comment.postId === post.id) {
                    return <li key={comment.id}>{comment.body}</li>;
                  }
                })}
              </ul>
              <p>
                Author:{' '}
                {users.map((user) => {
                  if (user.id === post.userId) {
                    return <span key={post.id}>{user.username}</span>;
                  }
                })}
              </p>
              <hr />
            </div>
          );
        })}
    </div>
  );
};

export default PostList;
