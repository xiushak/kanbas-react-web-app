import { Navigate, Route, Routes } from "react-router-dom";

import CourseHeader from "./courseHeader";
import CourseNavigation from "./CourseNavigation";
import Home from "./Home";
import Modules from "./Modules";
import Assignments from "./Assignments";

function Courses() {
  return (
    <div className="px-4 py-2 w-100">
      <CourseHeader />
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "320px",
            top: "100px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route
              path="Assignments/:assignmentId"
              element={<h1>Assignment Editor</h1>}
            />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;
