import Liste from "./components/Liste";
import Culture from "./components/Culture";
import Dashboard from "./components/Dashboard";
import Items from "./components/Items";
import Login from "./components/Login";
import Page from "./components/Page";
import Simulation from "./components/Simulation";
import Validation from "./components/Validation";

import "./App.css";
import "./Dash.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} exact />
        <Route path="/culture" element={<Culture />} exact />
        <Route path="/dashboard" element={<Dashboard />} exact />
        <Route path="/items" element={<Items />} exact />
        <Route path="/liste" element={<Liste />} exact />
        <Route path="/page" element={<Page />} exact />
        <Route path="/simulation" element={<Simulation />} exact />
        <Route path="/validation" element={<Validation />} exact />
      </Routes>
    </Router>
  );
}
export default App;
