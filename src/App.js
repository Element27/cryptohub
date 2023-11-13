
import { Route, Routes, } from 'react-router-dom';
import './App.css';
import Service from './screens/Service';
import Home from './screens/Home';
import About from './screens/About';
import Article from './screens/Article';

function App() {
  return (
    <Routes>

      <Route path='/' element={<Home />} />
      <Route path='/services' element={<Service />} />
      <Route path='/about' element={<About />} />
      <Route path='/article' element={<Article />} />
    </Routes>


  );
}

export default App;
