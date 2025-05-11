import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

// You’ll add more pages like About, Projects etc. later

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-20">
        {" "}
        {/* Padding to avoid overlap with fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
