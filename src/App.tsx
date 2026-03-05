import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import { StateContext } from './context/StateContext';
import ScrollToTop from './components/scrollToTop';

function App() {

  return (
    <>
      <StateContext>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route element={<Home />} path="/"></Route>
            <Route element={<Products />} path='/products' />
            <Route element={<About />} path='/about' />
            <Route element={<Contact />} path='/contact' />
          </Routes>
        </BrowserRouter>
      </StateContext>
    </>
  )
}

export default App
