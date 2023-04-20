import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Home from './pages/Home';
import Introduction from './pages/Introduction';
import Products from './pages/Products';
import Projects from './pages/Projects';
import Recruitments from './pages/Recruitments';
import Services from './pages/Services';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/introduction' element={<Introduction />} />
        <Route path='/services' element={<Services />} />
        <Route path='/products' element={<Products />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/recruitments' element={<Recruitments />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
