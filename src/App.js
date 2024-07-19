import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useEffect, useState } from 'react';
import Nav from './project/templates/Navbar';
import Footer from './project/templates/Footer';
import Home from './project/templates/Home';
import Type from './project/templates/Type';
import About from './project/templates/AboutMe';
import Projects from './project/templates/Projects';
import Contact from './project/templates/Contact';
import Skills from './project/templates/Skills';
import MoveToTop from './project/templates/MoveToTop';
import CircleLoader from 'react-spinners/CircleLoader';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1900);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loader">
          <CircleLoader
            color={"#011c38"}
            loading={true}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <BrowserRouter basename="/portfolio">
          <Nav />
          <TransitionGroup>
            <CSSTransition
              timeout={500}
              classNames="fade"
              key={window.location.pathname}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Type" element={<Type />} />
                <Route path="/AboutMe" element={<About />} />
                <Route path="/Skills" element={<Skills />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Projects" element={<Projects />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </CSSTransition>
          </TransitionGroup>
          <Footer />
          <MoveToTop />
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;

