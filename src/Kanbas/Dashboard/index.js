
import db from "../Database";
import DashboardCard from "./dashboardCard";

function Dashboard() {
  const courses = db.courses;
  return (
    <div className="px-4 py-2 w-100 wd-dashboard">
      <h1>Dashboard</h1>
      <hr />
      <div className="container-fluid">
        <h2>Published Courses ({courses.length})</h2>
        <hr />
        <div className="flex-row d-flex flex-wrap wd-card-container">
          {courses.map((course) => (
            <DashboardCard course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
