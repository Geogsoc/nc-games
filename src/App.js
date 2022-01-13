import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

import Review from "./Components/Review";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reviews/:category" element={<Home />} />
          <Route path="/:sort_by/:order" element={<Home />} />
          <Route path="/reviews/:category/:sort_by/:order" element={<Home />} />
          <Route path="/review/:review_id" element={<Review />} />
        </Routes>
      </div>
      ;
    </BrowserRouter>
  );
}

export default App;
