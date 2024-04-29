import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Messages from './pages/Messages';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/chat/:id" element={ <Messages /> } />
    </Routes>
  );
}

export default App;
