<<<<<<< HEAD
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
=======
// import { Route, Routes, BrowserRouter } from "react-router-dom";
// import { TransitionGroup, CSSTransition } from "react-transition-group";
// import { useEffect, useState } from "react";
// import Nav from "./project/templates/Navbar";
// import Footer from "./project/templates/Footer";
// import Home from "./project/templates/Home";
// import Type from "./project/templates/Type";
// import About from "./project/templates/AboutMe";
// import Projects from "./project/templates/Projects";
// import Contact from "./project/templates/Contact";
// import MoveToTop from "./project/templates/MoveToTop";
// import CircleLoader from "react-spinners/CircleLoader";
// import "./App.css";
// import Skills from "./project/templates/Skills";

// function App() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//     }, 1900);
//   }, []);

//   return (
//     <div>
//       {loading ? (
//         <div className="loader">
//           <CircleLoader
//             color={"#011c38"}
//             loading={true}
//             size={100}
//             aria-label="Loading Spinner"
//             data-testid="loader"
//           />
//         </div>
//       ) : (
//         <BrowserRouter>
//           <Nav />
       
//           <TransitionGroup>
//             <CSSTransition classNames="fade" timeout={500}>
//             <Routes>
//               <Route path='/' element={   <Home/>}
//       <Route path='/Type' element={<Type/>}  />
//       <Route path='/AboutMe'  element={<About/>}/>
//       <Route  path='/Skills' element={< Skills />}/>
//        <Route  path='/Contact' element={<Contact/>} />
//       <Route path='/Projects' element={<Projects/>} />
//       </Routes>
//             </CSSTransition>
//           </TransitionGroup>
  
//           <Footer />
//           <MoveToTop />
//         </BrowserRouter>
//       )}
//     </div>
//   );
// }

// export default App;



import { Route, Routes, BrowserRouter } from "react-router-dom";
>>>>>>> dcc7fc763ba4e38614c82656b508520c855a6d9f
import { useEffect, useState } from "react";
import Nav from "./project/templates/Navbar";
import Footer from "./project/templates/Footer";
import Home from "./project/templates/Home";
import Type from "./project/templates/Type";
import About from "./project/templates/AboutMe";
import Projects from "./project/templates/Projects";
import Contact from "./project/templates/Contact";
import MoveToTop from "./project/templates/MoveToTop";
import CircleLoader from "react-spinners/CircleLoader";
import "./App.css";
import Skills from "./project/templates/Skills";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1900);
  }, []);

  return (
    <Router basename="/portfolio">
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
        <div>
          <Nav />
<<<<<<< HEAD
         
          <TransitionGroup>
            <CSSTransition classNames="fade" timeout={500}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Type" element={<Type />} />
                <Route path="/AboutMe" element={<About />} />
                <Route path="/Skills" element={<Skills />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Projects" element={<Projects />} />
              </Routes>
            </CSSTransition>
          </TransitionGroup>
=======
          <Home/>
          <Routes>
            <Route path="/portfolio/" element={<Home />} />
            <Route path="/Type" element={<Type />} />
            <Route path="/AboutMe" element={<About />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Projects" element={<Projects />} />
          </Routes>
>>>>>>> dcc7fc763ba4e38614c82656b508520c855a6d9f
          <Footer />
          <MoveToTop />
        </div>
      )}
    </Router>
  );
}

export default App;
