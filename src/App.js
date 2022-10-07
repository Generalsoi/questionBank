import { Homepage } from "./components/homepage";
import { Routes, Route } from "react-router-dom";
import { Questions } from "./components/questions";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/questions" element={<Questions />} />
    </Routes>
  );
}
