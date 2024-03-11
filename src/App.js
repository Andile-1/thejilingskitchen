import "./App.css";

import Navbar from "./components/navbar/navbar";
import { Routes, Route } from "react-router-dom";
import RecipeDetails from "./components/recipeDetails/recipeDetails";
import Home from "./components/home/home";

const root = ReactDom.createRoot(document.getElementById("root"));
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </div>
  );
}

export default App;
