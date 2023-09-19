import { Routes, Route } from "react-router-dom";
import HomePage from "./routes/HomePage";
import SingleCatPage from "./routes/SingleCatPage";
import "./App.css";
import CatContextProvider from "./context/CatContext";

function App() {
  return (
    <CatContextProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/breed/:breedId" element={<SingleCatPage />} />
      </Routes>
    </CatContextProvider>
  );
}

export default App;
