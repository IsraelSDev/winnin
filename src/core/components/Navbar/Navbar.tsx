import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-2">
      <ul className="d-flex w-50 p-5 pt-3 justify-content-around m-auto">
        <Link to={"/hot"}>
          <li className="mx-2">Hot</li>
        </Link>

        <Link to={"/news"}>
          <li className="mx-2">News</li>
        </Link>

        <Link to={"/rising"}>
          <li className="mx-2">Rising </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
