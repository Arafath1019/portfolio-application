import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import { useState } from "react";
import Loader from "./components/Loader";

function App() {
  const [showLoading, setShowLoading] = useState(false);
  return (
    <BrowserRouter>
    {showLoading ? <Loader /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
