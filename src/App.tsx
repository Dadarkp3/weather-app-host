import ReactDOM from "react-dom/client";

import Counter from "shared_ui_remote/Counter";

import "./index.css";

const App = () => {
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: weather-app-host</div>
      <div>Framework: react-19</div>
      <Counter />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);
