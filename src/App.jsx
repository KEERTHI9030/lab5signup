import { Routes, Route } from "react-router-dom";
import Authcontainer from "./components/Authcontainer";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Authcontainer />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;