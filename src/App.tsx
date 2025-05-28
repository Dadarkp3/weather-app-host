import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Forecast from "./pages/Forecast";
import Home from "./pages/Home";
import DefaultLayout from "./presentation/layout/DefaultLayout";
import About from "./pages/About";

import "./index.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="forecast" element={<Forecast />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);
