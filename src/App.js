import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import SignUp from "./components/SignUp";
import UserDashboard from "./components/UserDashboard";
import CreateStay from "./components/CreateStay";
import AdminDashboard from "./components/AdminDashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/create-stay" element={<CreateStay />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
  <SignUp />;
};

export default App;
