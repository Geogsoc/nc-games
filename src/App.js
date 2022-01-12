import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import CommentCard from "./Components/CommentCard";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
// import ReviewCard from "./Components/ReviewCard";
import Review from "./Components/Review";

function App() {
  // const [isLoading, setIsLoading] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/reviews/" element={<Home />} />
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
