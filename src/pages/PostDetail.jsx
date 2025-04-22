import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => setPost(data));
  }, [id]);

  if (!post) return <p className="loading-text">Loading...</p>;

  return (
    <div className="post-detail">
      <h2 className="post-title">{post.title}</h2>
      <p className="post-body">{post.body}</p>
    </div>
  );
}

export default PostDetail;
