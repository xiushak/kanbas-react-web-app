import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";

import { FaPlus, FaEllipsisVertical } from "react-icons/fa6";
import AssignmentGroup from "./assignmentGroup.js";
import { setAssignment } from "./assignmentReducer";

function Assignments() {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const assignments = useSelector(
    (state) => state.assignmentReducer.assignments
  );
  // const assignment = useSelector((state) => state.assignmentReducer.assignment);
  const courseAssignmentsGroups = assignments.filter(
    (assignmentGroup) => assignmentGroup.course === courseId
  );
  return (
    <div className="px-2">
      <div className="form-group text-nowrap">
        <span className="float-end">
          <button className="btn btn-secondary">
            <FaPlus className="mb-1" /> Group
          </button>
          <Button
            variant="primary"
            onClick={() => {
              dispatch(
                setAssignment({
                  course: courseId,
                  title: "New Assignment",
                  description: "",
                  points: 100,
                })
              );
              navigate(`NewAssignment`);
            }}
          >
            <FaPlus className="mb-1" /> Assignment
          </Button>
          <button className="btn btn-secondary">
            <FaEllipsisVertical className="mb-1" />
          </button>
        </span>
        <input
          display="inline"
          id="search-assignment"
          className="form-control w-25"
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
