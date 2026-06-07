import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ProjectForm from "./ProjectForm";
import "./App.css";
import "./ProjectForm.css";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/start-project" element={<ProjectForm />} />
      </Routes>
    </HashRouter>
  );
}