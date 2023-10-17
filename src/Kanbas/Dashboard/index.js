import { Link } from "react-router-dom";
import { FaRegPenToSquare } from "react-icons/fa6";
import db from "../Database";

function Dashboard() {
  const courses = db.courses;
  return (
    <div className="px-4 py-2 w-100 wd-dashboard">
      <h1>Dashboard</h1>
      <hr />
      <div className="container-fluid m-2">
        <h2>Published Courses ({courses.length})</h2>
        <hr />
        <div className="flex-row d-flex flex-wrap wd-card-container">
          {courses.map((course) => (
            <div class="col-auto">
              <Link
                key={course._id}
                to={`/Kanbas/Courses/${course._id}`}
                className="list-group-item"
              >
                {/* card component */}
                <div class="card wd-card">
                  <img
                    src="images/crying-baby.jpg"
                    class="card-img-top"
                    width="100%"
                    height="145px"
                    alt="..."
                  />
                  <div
                    class="card-text"
                    style={{ padding: "12px", height: "40%" }}
                  >
                    <h5 style={{ color: "lightskyblue" }}>
                      {course.name || "hello"}
                    </h5>
                    <p>
                      {course.number} <br />
                      {course.startDate} {course.endDate}
                    </p>
                    <FaRegPenToSquare />
                    <i class="fa-regular fa-pen-to-square"></i>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
