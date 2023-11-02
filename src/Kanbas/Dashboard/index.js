import { React } from "react";
import { Button } from "react-bootstrap";
import DashboardCard from "./dashboardCard";

function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}) {
  return (
    <div className="px-4 py-2 w-100 wd-dashboard">
      <div className="d-none d-md-block">
        <h1>Dashboard</h1>
        <hr />
      </div>
      <input
        value={course.name}
        className="form-control my-1"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
        placeholder="Course Name"
      />
      <input
        value={course.number}
        className="form-control my-1"
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
        placeholder="Course Number"
      />
      <input
        value={course.startDate}
        className="form-control my-1"
        type="date"
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
        placeholder="Start Date"
      />
      <input
        value={course.endDate}
        className="form-control my-1"
        type="date"
        onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
        placeholder="End Date"
      />
      <div className="text-end my-2">
        <Button variant="primary" onClick={addNewCourse}>
          Add
        </Button>
        <Button variant="secondary" onClick={updateCourse}>
          Update
        </Button>
      </div>
      <div className="container-fluid">
        <h2>Published Courses ({courses.length})</h2>
        <hr />
        <div className="flex-row d-flex flex-wrap wd-card-container">
          {courses.map((course) => (
            <>
              <DashboardCard
                course={course}
                setEditCourse={(event) => {
                  event.preventDefault();
                  setCourse(course);
                }}
                deleteCourse={deleteCourse}
              />
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
