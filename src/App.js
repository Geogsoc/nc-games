import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Comment_card from "./Components/Comment_card";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import ReviewCard from "./Components/ReviewCard";
import Review from "./Components/Review";

function App() {
  // const [isLoading, setIsLoading] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reviews/:category" element={<Home />} />
          <Route path="/review/:review_id" element={<Review />} />
        </Routes>
      </div>
      ;
    </BrowserRouter>
  );
}

export default App;
