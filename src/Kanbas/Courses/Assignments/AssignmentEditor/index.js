import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { FaEllipsisVertical, FaCircleCheck } from "react-icons/fa6";
import {
  updateAssignment,
  setAssignment,
  addAssignment,
} from "../assignmentReducer";

function AssignmentEditor() {
  const { courseId, assignmentId } = useParams();
  const assignment = useSelector((state) => state.assignmentReducer.assignment);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSave = () => {
    if (assignmentId === "NewAssignment") {
      dispatch(addAssignment(assignment));
    } else {
      dispatch(updateAssignment(assignment));
    }
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
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
            value={assignment.title}
            placeholder="Assignment Name"
            className="form-control mb-2"
            onChange={(e) =>
              dispatch(setAssignment({ ...assignment, title: e.target.value }))
            }
          />
          <textarea
            className="form-control"
            height="30px"
            type="text"
            id="assignment-description"
            rows="3"
            value={assignment.description}
            placeholder="Assignment Description"
            onChange={(e) =>
              dispatch(
                setAssignment({ ...assignment, description: e.target.value })
              )
            }
          ></textarea>
        </div>
        <div className="row mb-4 flex-nowrap">
          <div className="col-auto wd-edit-section-form-label">Points</div>
          <div className="col">
            <input
              className="form-control"
              type="text"
              id="assignment-points"
              value={assignment.points}
              placeholder="Points"
              onChange={(e) =>
                dispatch(
                  setAssignment({ ...assignment, points: e.target.value })
                )
              }
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
