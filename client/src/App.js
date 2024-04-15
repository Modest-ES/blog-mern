import './App.css';
import Header from './components/Header';
import Post from './components/Post';
import { Routes, Route } from 'react-router';

function App() {
  return (
    <Routes>
      <Route
        index
        element={
          <div>
            <Header />
            <main>
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
            </main>
          </div>
        }
      />
      <Route path="/signin" element={<div>Sign In</div>} />
      <Route path="/signup" element={<div>Sign Up</div>} />
    </Routes>
  );
}

export default App;
