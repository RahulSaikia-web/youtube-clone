import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Video from './pages/Video';

function App() {
  return (
    <div>
      <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/video' element={<Video/>}/>
    </Routes>
    </div>
  );
}

export default App;
