import { Routes, Route, Navigate } from "react-router-dom";
import KanbasTopNav from "./KanbasTopNav";
import KanbasNavigation from "./KanbasNavigation";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import "./style.css";

function Kanbas() {
  return (
    <>
      <KanbasTopNav />
      <div className="d-flex flex-shrink-0">
        <KanbasNavigation />
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/:courseId/*" element={<Courses />} />
        </Routes>
      </div>
    </>
  );
}
export default Kanbas;
