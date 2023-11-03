import { useParams, useNavigate } from "react-router-dom";
import {
  FaGripVertical,
  FaEllipsisVertical,
  FaPlus,
  FaRegPenToSquare,
  FaCircleCheck,
  FaRegTrashCan,
} from "react-icons/fa6";
import { setAssignment, deleteAssignment } from "./assignmentReducer";
import { useDispatch } from "react-redux";

function AssignmentGroup({ assignmentGroup }) {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const navigagte = useNavigate();
  return (
    <>
      <div className="mt-4">
        <ul className="wd-list">
          <li className="wd-list-header">
            <div className="row flex-nowrap">
              <div className="col-auto wd-align-items-center">
                <FaGripVertical className="mb-1 me-3" />
              </div>
              <div className="col">
                <span className="text-black">
                  <h5>{assignmentGroup.type}</h5>
                </span>
              </div>
              <div className="col-auto wd-align-items-center">
                <span className="wd-pill px-2">
                  {assignmentGroup.percentage * 100}% of Total
                </span>
                <FaPlus className="mx-2" />
                <FaEllipsisVertical className="mx-2" />
              </div>
            </div>
          </li>
          {assignmentGroup.assignments &&
            assignmentGroup.assignments.map((assignment, index) => (
              <li className="wd-list-item" key={index}>
                <div className="row flex-nowrap">
                  <div className="col-auto wd-align-items-center">
                    <FaGripVertical className="mb-1 me-3" />
                    <FaRegPenToSquare
                      className="mb-1"
                      style={{ color: "green" }}
                    />
                  </div>
                  <div
                    className="col wd-cursor-pointer"
                    onClick={() => {
                      dispatch(
                        setAssignment({ courseId: courseId, ...assignment })
                      );
                      navigagte(
                        `/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`
                      );
                    }}
                  >
                    <h5>{assignment.title}</h5>
                  </div>
                  <div className="col-auto wd-align-items-center">
                    <FaCircleCheck
                      className="mb-1"
                      style={{ color: "green" }}
                    />
                    <FaEllipsisVertical className="mx-2 mb-1" />
                    <span
                      className="wd-clickable-icon"
                      onClick={() =>
                        dispatch(
                          deleteAssignment({
                            course: courseId,
                            _id: assignment._id,
                          })
                        )
                      }
                    >
                      <FaRegTrashCan className="mx-2 mb-1" />
                    </span>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}

export default AssignmentGroup;
