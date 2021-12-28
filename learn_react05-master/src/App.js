import { Routes, Route } from 'react-router-dom';

// Components
import Home from './routes/Home'
import Pricing from './routes/Pricing';
import Explore from './routes/Explore';
import Contact from './routes/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;
