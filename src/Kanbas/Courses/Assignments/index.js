import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { FaPlus, FaEllipsisVertical } from "react-icons/fa6";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <div className="px-2">
      <div class="form-group text-nowrap">
        <span className="float-end">
          <button className="btn btn-secondary">
            <FaPlus className="mb-1" /> Group
          </button>
          <button className="btn btn-primary">
            <FaPlus className="mb-1" /> Module
          </button>
          <button className="btn btn-secondary">
            <FaEllipsisVertical className="mb-1" />
          </button>
        </span>
        <input
          display="inline"
          id="search-assignment"
          class="form-control w-25"
          placeholder="Search For Assignments"
        />
      </div>
      <hr />
      <div className="list-group">
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item"
          >
            {assignment.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Assignments;
