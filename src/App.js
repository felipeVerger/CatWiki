import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import BreedDetail from './pages/BreedDetail/BreedDetail';
import Footer from './components/Footer/Footer';
import MostSearched from './pages/MostSearched/MostSearched';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div style={{position: 'relative', width: '100%'}}>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/:name" element={<BreedDetail />} />
          <Route path="/mostSearched" element={<MostSearched/>}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
