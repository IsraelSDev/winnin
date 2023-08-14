import { Outlet } from "react-router-dom";

import Header from "./core/components/Header/Header";
import Navbar from "./core/components/Navbar/Navbar";

function App() {
  console.log(process.env.REACT_APP_API_URL);

  return (
    <div className="App">
      <Header />
      <Navbar />
      <div className="container-lg">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
