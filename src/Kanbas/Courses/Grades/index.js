import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FaFileImport, FaFileExport, FaGear, FaFilter } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

import db from "../../Database";

function Grades() {
  const { courseId } = useParams();
  const assignments = [];
  const assignmentGroups = db.assignments.filter(
    (group) => group.course === courseId && group.assignments
  );
  assignmentGroups.forEach((group) => assignments.push(...group.assignments));
  const enrollments = db.enrollments.filter(
    (enrollment) => enrollment.course === courseId
  );

  return (
    <div className="px-2">
      <div className="text-end mb-4">
        <Button variant="secondary">
          <FaFileImport /> Import
        </Button>
        <button className="btn btn-secondary dropdown-toggle">
          <FaFileExport /> Export
        </button>
        <button className="btn btn-secondary">
          <FaGear />
        </button>
      </div>
      <div className="row flex-nowrap mb-2">
        <div className="col">
          <h4 className="text-nowrap">Student Names</h4>
          <div className="input-group">
            <input
              className="form-control"
              id="search-student"
              placeholder="Search Students"
            />
            <button
              className="btn btn-outline-secondary dropdown-toggle"
              style={{ borderColor: "#ced4da" }}
              type="button"
              data-bs-toggle="dropdown"
            ></button>
          </div>
        </div>
        <div className="col">
          <h4 className="text-nowrap">Assignment Names</h4>
          <div className="input-group">
            <input
              className="form-control"
              id="search-assignment"
              placeholder="Search Assignments"
            />
            <button
              className="btn btn-outline-secondary dropdown-toggle"
              style={{ borderColor: "#ced4da" }}
              type="button"
              data-bs-toggle="dropdown"
            ></button>
          </div>
        </div>
      </div>
      <div className="pb-4">
        <button className="btn btn-secondary">
          <FaFilter /> Apply Filters
        </button>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <tbody className="text-center">
            <tr>
              <td className="text-start">Student Name</td>
              {assignments.map((assignment) => (
                <td>{assignment.title}</td>
              ))}
            </tr>
            {enrollments.map((enrollment) => {
              const user = db.users.find(
                (user) => user._id === enrollment.user
              );
              return (
                <tr>
                  <td className="text-start wd-red">
                    {user.firstName} {user.lastName}
                  </td>
                  {assignments.map((assignment) => {
                    const grade = db.grades.find(
                      (grade) =>
                        grade.student === enrollment.user &&
                        grade.assignment === assignment._id
                    );
                    return <td>{grade?.grade || ""}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Grades;
