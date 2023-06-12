import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Solid from "./components/Solid";
import Gradients from "./components/Gradients";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Solid />} />
        <Route path="/gradients" element={<Gradients />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
