import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { FaPlus, FaEllipsisVertical } from "react-icons/fa6";
import AssignmentGroup from "./assignmentGroup.js";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignmentsGroups = assignments.filter(
    (assignmentGroup) => assignmentGroup.course === courseId
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
        {courseAssignmentsGroups.map((group, index) => (
          <AssignmentGroup key={index} assignmentGroup={group} />
        ))}
      </div>
    </div>
  );
}
export default Assignments;
