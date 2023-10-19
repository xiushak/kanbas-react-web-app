import { Button } from "react-bootstrap";
import {
  FaBan,
  FaCircleCheck,
  FaArrowRightToBracket,
  FaChartSimple,
  FaBullhorn,
  FaRegBell,
} from "react-icons/fa6";
import { BiTargetLock, BiRightArrowCircle } from "react-icons/bi";

function CourseStatus() {
  return (
    <>
      <h4>Course Status</h4>
      <div className="btn-group mb-2 w-100" role="group">
        <Button variant="secondary">
          <FaBan className="mb-1" /> Unpublish
        </Button>
        <Button variant="publish">
          <FaCircleCheck className="mb-1" /> Published
        </Button>
      </div>
      <div className="d-grid mb-4">
        <Button variant="secondary" className="text-start">
          <FaArrowRightToBracket className="mb-1" /> Import Existing Content
        </Button>
        <Button variant="secondary" className="text-start">
          <BiRightArrowCircle className="mb-1" /> Import From Commons
        </Button>
        <Button variant="secondary" className="text-start">
          <BiTargetLock className="mb-1" /> Choose Home Page
        </Button>
        <Button variant="secondary" className="text-start">
          <FaChartSimple className="mb-1" /> View Course Stream
        </Button>
        <Button variant="secondary" className="text-start">
          <FaBullhorn className="mb-1" /> New Announcement
        </Button>
        <Button variant="secondary" className="text-start">
          <FaChartSimple className="mb-1" /> New Analytics
        </Button>
        <Button variant="secondary" className="text-start">
          <FaRegBell className="mb-1" /> View Course Notifications
        </Button>
      </div>

      <h4>To Do</h4>
      <hr />
      <div className="mb-4">
        <ul>
          <li>
            <h5 className="wd-red">GRADE A1</h5>
            <p>100 points - Sep 18 at 11:59pm</p>
          </li>
          <li>
            <h5 className="wd-red">GRADE A2</h5>
            <p>100 points - Oct 3 at 11:59pm</p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default CourseStatus;
