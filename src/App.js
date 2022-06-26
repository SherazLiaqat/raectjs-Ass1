import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./Screens/Home";
import Draft from "./Screens/Draft";
import Archive from "./Screens/Archive";
import Dashboard from "./Components/Dashboard";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";
import Mainbar from "./Components/Mainbar";
import Form from "./Components/Form";
function App() {
  return (
    <>
      <Router>
        <div className="App">
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
          <Mainbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/form" element={<Form />} />
            <Route path="/draft" element={<Draft />} />
            <Route path="/home" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
