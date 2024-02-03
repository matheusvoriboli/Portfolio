import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Career } from "./pages/Career";
import { Projects } from "./pages/Projects";
import { Header } from "./components/Header";

export function App() {
  return (
    <div className="flex flex-col h-full mx-auto p-6 text-light">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/career" element={<Career />} />
        <Route path="/project" element={<Projects />} />
      </Routes>
    </div>
  );
}
