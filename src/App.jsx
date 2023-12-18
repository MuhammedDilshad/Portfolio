import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PropagateLoader from "react-spinners/PropagateLoader";
import "./App.css";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import Resume from "./pages/Resume/Resume";
import Home from "./pages/Home/Home";

function App() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate a 4-second loading time
  //   const loadingTimeout = setTimeout(() => {
  //     setLoading(false);
  //   }, 4000);

  //   // Clear the timeout when the component unmounts
  //   return () => clearTimeout(loadingTimeout);
  // }, []);
  return (
    <div>
      {/* {loading ? (
        <PropagateLoader size={20} className="loader" />
      ) : ( */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Resume" element={<Resume />} />
        </Routes>
      </Router>

      {/* // )} */}
    </div>
  );
}

export default App;
