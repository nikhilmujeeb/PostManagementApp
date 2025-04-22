import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import PostDetail from '../pages/PostDetail';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts/:id" element={<PostDetail />} />
    </Routes>
  );
}

export default AppRoutes;
