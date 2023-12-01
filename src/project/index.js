import { Routes, Route, Navigate } from "react-router-dom";
import ProjectNav from "./nav";
import Signin from "../users/signin";
import Account from "../users/account";
import UserTable from "../users/table";
import Signup from "../users/signup";
import Nav from "../Nav";

function Project() {
  return (
    <div>
      <Nav />
      <div className="row">
        <div className="col-2">
          <ProjectNav />
        </div>
        <div className="col-10">
          <h1>Project</h1>
          <Routes>
            <Route path="/" element={<Navigate to="/project/signin" />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/account" element={<Account />} />
            <Route path="/account/:id" element={<Account />} />
            <Route path="/admin/users" element={<UserTable />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Project;
