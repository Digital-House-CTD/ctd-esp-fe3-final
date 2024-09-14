import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./Styles/index.css";
import { BrowserRouter } from "react-router-dom";
import Context from "./utils/global.context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Context>
      <App />
    </Context>
  </BrowserRouter>
);
