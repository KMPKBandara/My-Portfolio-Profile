import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

// ✅ Add the basename here for GitHub Pages
function App() {
  return (
    <Router basename="/My-Portfolio-Profile">
      <Navbar />
      <div className="pt-20">
        {/* Padding to avoid overlap with fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
