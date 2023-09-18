import { Routes, Route } from "react-router-dom";
import HomePage from "./routes/HomePage";
import SingleCatPage from "./routes/SingleCatPage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/breed/:breedId" element={<SingleCatPage />} />
    </Routes>
  );
}

export default App;
