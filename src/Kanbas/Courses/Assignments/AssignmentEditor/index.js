import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FaEllipsisVertical, FaCircleCheck } from "react-icons/fa6";
import db from "../../../Database";

function AssignmentEditor() {
  const { courseId, assignmentId } = useParams();
  const assignmentGroups = db.assignments.filter(
    (assignmetGroup) => assignmetGroup.course === courseId
  );
  const assignment = assignmentGroups
    .map(
      (assignmentType) =>
        assignmentType.assignments &&
        assignmentType.assignments.find(
          (assignment) => assignment._id === assignmentId
        )
    )
    .find((assignment) => assignment !== undefined);

  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  console.log(assignment);
  return (
    <div>
      <div className="form-group text-nowrap text-end">
        <span style={{ color: "green" }}>
          <FaCircleCheck className="mb-1" /> Published
        </span>
        <Button variant="secondary" className="mx-2">
          <FaEllipsisVertical className="mb-1" />
        </Button>
      </div>
      <hr />
      <div className="container-fluid">
        <div className="row mb-4 wd-edit-section">
          <h4>Assignment Name</h4>
          <input
            defaultValue={assignment.title}
            className="form-control mb-2"
          />
          <textarea
            className="form-control"
            height="30px"
            type="text"
            id="assignment-description"
            rows="3"
            defaultValue={assignment.description}
          ></textarea>
        </div>
        <div className="row mb-4 flex-nowrap">
          <div className="col-auto wd-edit-section-form-label">Points</div>
          <div className="col">
            <input
              className="form-control"
              type="text"
              id="assignment-points"
              defaultValue={assignment.points}
            />
          </div>
        </div>
      </div>
      <hr />
      <div className="float-end">
        <Link
          to={`/Kanbas/Courses/${courseId}/Assignments`}
          className="btn btn-secondary"
        >
          Cancel
        </Link>
        <Button variatn="primary" onClick={handleSave}>
          Save
        </Button>
      </div>
    </div>
  );
}

export default AssignmentEditor;
