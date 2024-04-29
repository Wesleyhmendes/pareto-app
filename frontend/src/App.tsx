import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Messages from './pages/Messages';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/chats" element={ <Home /> } />
      <Route path="/chat/:id" element={ <Messages /> } />
    </Routes>
  );
}

export default App;
