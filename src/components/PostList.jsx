import React from 'react';
import PostCard from './PostCard';

function PostList({ posts, onEdit }) {
  return (
    <div className="post-list">
      {posts.map(post => (
        <PostCard key={post.id} post={post} onEdit={onEdit} />
      ))}
    </div>
  );
}

export default PostList;
