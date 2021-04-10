import { useEffect, useState } from 'react';

import { getPosts } from '../../api';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((posts) => {
      setPosts(posts.data);
    });
  }, []);

  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <p>title: {post.title}</p>
            <p>body: {post.body}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
