import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PostForm from './PostForm';

function PostCard({ post, onEdit }) {
  const [editing, setEditing] = useState(false);
  const isCustomPost = post.id > 100; 

  const handleEditSubmit = (updatedPost) => {
    onEdit(updatedPost);
    setEditing(false);
  };

  if (editing) {
    return <PostForm initialData={post} onSubmit={handleEditSubmit} />;
  }

  return (
    <div className="post-card">
      <Link to={`/posts/${post.id}`} className="card-link">
        <h3 className="card-title">{post.title}</h3>
        <p className="card-body">{post.body.slice(0, 100)}...</p>
      </Link>
      {isCustomPost && (
        <button
          className="edit-button"
          onClick={() => setEditing(true)}
        >
          Edit
        </button>
      )}
    </div>
  );
}

export default PostCard;
