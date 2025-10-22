import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import './styles/global.css';

// Lazy loaded pages
const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Project"));
const Skills = lazy(() => import("./pages/Skills"));
const Resume = lazy(() => import("./pages/Resume"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
