import ReactDOM from "react-dom/client";

import { lazy, Suspense } from "react";

import "./index.css";

const App = () => {
  const Counter = lazy(() => import("shared_ui_remote/Counter"));

  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: weather-app-host</div>
      <div>Framework: react-19</div>
      <Suspense fallback={<div>Loading...</div>}>
        <Counter />
      </Suspense>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);
