import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import PostDetail from '../pages/PostDetail';
import EditPost from '../pages/EditPost';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts/:id" element={<PostDetail />} />
      <Route path="/posts/:id/edit" element={<EditPost />} />
    </Routes>
  );
}

export default AppRoutes;
