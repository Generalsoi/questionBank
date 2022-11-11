import { Homepage } from "./components/homepage";
import { Routes, Route } from "react-router-dom";
import { Questions } from "./components/questions";
import { Pages } from "./components/pages";
import { StudQuestions } from "./components/studQuestions";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/questions" element={<Questions />} />
      <Route path="/pages" element={<Pages />} />
      <Route path="studentquestions" element={<StudQuestions />} />
    </Routes>
  );
}
