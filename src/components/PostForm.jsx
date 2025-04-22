import React, { useState, useEffect } from 'react';

function PostForm({ onSubmit, initialData }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setBody(initialData.body);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: initialData ? initialData.id : Date.now(),
      title,
      body,
    };
    onSubmit(newPost);
    if (!initialData) {
      setTitle('');
      setBody('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="post-form">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="input-field"
        required
      />
      <textarea
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        className="input-field"
        required
      ></textarea>
      <button
        type="submit"
        className="submit-button"
      >
        {initialData ? 'Update Post' : 'Add Post'}
      </button>
    </form>
  );
}

export default PostForm;
