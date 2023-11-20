import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import axios from "axios";

import KanbasTopNav from "./KanbasTopNav";
import KanbasNavigation from "./KanbasNavigation";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import "./style.css";
import store from "./store";

function Kanbas() {
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState({
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
  });
  const API_BASE = process.env.REACT_APP_API_BASE;
  const COURSES_URL = `${API_BASE}/api/courses`;
  const addNewCourse = async () => {
    const response = await axios.post(COURSES_URL, course);
    setCourses([response.data, ...courses]);
  };
  const deleteCourse = async (courseId) => {
    await axios.delete(`${COURSES_URL}/${courseId.$oid}`);
    setCourses(courses.filter((c) => c._id.$oid !== courseId.$oid));
  };
  const updateCourse = async () => {
    await axios.put(`${COURSES_URL}/${course._id.$oid}`, course);
    setCourses(
      courses.map((c) => {
        if (c._id.$oid === course._id.$oid) {
          return course;
        }
        return c;
      })
    );
  };
  useEffect(() => {
    const findAllCourses = async () => {
      const response = await axios.get(COURSES_URL);
      setCourses(response.data);
    };
    findAllCourses();
  }, [COURSES_URL]);

  return (
    <Provider store={store}>
      <KanbasTopNav courses={courses} />
      <div className="d-flex flex-shrink-0">
        <KanbasNavigation />
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route
            path="Dashboard"
            element={
              <Dashboard
                courses={courses}
                course={course}
                setCourse={setCourse}
                addNewCourse={addNewCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse}
              />
            }
          />
          <Route path="Courses/:courseId/*" element={<Courses />} />
        </Routes>
      </div>
    </Provider>
  );
}
export default Kanbas;
