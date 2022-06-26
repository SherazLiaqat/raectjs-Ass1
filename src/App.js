import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./Screens/Home";
import Draft from "./Screens/Draft";
import Archive from "./Screens/Archive";
import Dashboard from "./Components/Dashboard";
import Sidebar from "./Components/Sidebar";
function App() {
  return (
    <>
      <Router>
        <div>
          {/* <ul style={{ marginLeft: "50px", display: "flex" }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/archive">Archive</Link>
            </li>
            <li>
              <Link to="/draft">Draft</Link>
            </li>
          </ul>

          <hr /> */}
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/draft" element={<Draft />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
