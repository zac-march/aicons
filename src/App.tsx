import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Nav from "./sections/Header/Header";
import Landing from "./sections/Landing/Landing";
import Generate from "./sections/Generate/Generate";
import Icons from "./sections/Icons/Icons";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/generate" element={<Generate />} />
            <Route path="/icons" element={<Icons />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
