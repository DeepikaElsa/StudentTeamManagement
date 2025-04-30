import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AddMemberPage from './pages/AddMemberPage';
import ViewMembersPage from './pages/ViewMembersPage';
import MemberDetailsPage from './pages/MemberDetailsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="add-member" element={<AddMemberPage />} />
        <Route path="members" element={<ViewMembersPage />} />
        <Route path="members/:id" element={<MemberDetailsPage />} />
      </Route>
    </Routes>
  );
}

export default App;