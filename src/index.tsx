import ReactDOM from "react-dom/client";
import RoutesPage from "./core/pages/routes/Routes";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(<RoutesPage />);
