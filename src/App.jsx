import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Feed from './components/Feed';
import CreatePost from './components/CreatePost';
import react  from './assets/img1.jpg';
import PostDetails from './components/PostDetails';
import Profile from './components/Profile';
import './app.css';
import { useState } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/CreatePost' element={<CreatePost />}/>
        <Route path="/post/:id" element={<PostDetails />} />
        <Route path='/profile/:username' element={<Profile/>}/>
      </Routes>
    </Router>
  );
}
export default App;
