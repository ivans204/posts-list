import { useEffect, useState } from 'react';

import { getPosts, getComments } from '../../api';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getPosts().then((posts) => {
      setPosts(posts.data);
    });

    getComments().then((comments) => {
      setComments(comments.data);
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
              <hr />
            </div>
          );
        })}
    </div>
  );
};

export default PostList;
