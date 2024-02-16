import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Career } from "./pages/Career";
import { Projects } from "./pages/Projects";

export function App() {
  return (
    <div className="flex flex-col max-w-3xl mx-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/career" element={<Career />} />
        <Route path="/project" element={<Projects />} />
      </Routes>
    </div>
  );
}
