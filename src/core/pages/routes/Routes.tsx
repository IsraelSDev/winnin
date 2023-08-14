import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import App from "../../../App";
import HotPage from "../Hot/HotPage";
import NewsPage from "../News/NewsPage";
import RisingPage from "../Rising/RisingPage";

const RoutesPage = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Navigate to={"/hot"} />} />
          <Route path="hot" element={<HotPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="rising" element={<RisingPage />} />
          <Route path="*" element={<Navigate to={"/hot"} />} />
        </Route>
        <Route path="*" element={<Navigate to={"/hot"} />} />
      </Routes>
    </Router>
  );
};

export default RoutesPage;
