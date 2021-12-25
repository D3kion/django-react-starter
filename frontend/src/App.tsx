import { Routes, Route } from 'react-router-dom';

import Home from './pages/home.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} /> */}
    </Routes>
  );
};

export default App;
