import * as client from "./client";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

function Account() {
  const { id } = useParams();
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();
  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };
  const save = async () => {
    await client.updateUser(account);
  };
  const findUserById = async (id) => {
    const user = await client.findUserById(id);
    setAccount(user);
  };
  const signout = async () => {
    await client.signout();
    navigate("/project/signin");
  };
  useEffect(() => {
    if (id) {
      findUserById(id);
    } else {
      fetchAccount();
    }
  }, [id]);
  return (
    <div className="w-50">
      <h1>Account</h1>
      {account && (
        <div>
          <input
            value={account.password}
            className="form-control mb-2"
            onChange={(e) =>
              setAccount({ ...account, password: e.target.value })
            }
          />
          <input
            value={account.firstName}
            className="form-control mb-2"
            onChange={(e) =>
              setAccount({ ...account, firstName: e.target.value })
            }
          />
          <input
            value={account.lastName}
            className="form-control mb-2"
            onChange={(e) =>
              setAccount({ ...account, lastName: e.target.value })
            }
          />
          <input
            value={account.dob}
            className="form-control mb-2"
            onChange={(e) => setAccount({ ...account, dob: e.target.value })}
          />
          <input
            value={account.email}
            className="form-control mb-2"
            onChange={(e) => setAccount({ ...account, email: e.target.value })}
          />
          <select
            className="form-select mb-2"
            onChange={(e) => setAccount({ ...account, role: e.target.value })}
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>

          <button className="btn btn-primary w-100 mb-2" onClick={save}>
            Save
          </button>
          <Link to="/project/admin/users" className="btn btn-warning w-100 mb-2">
            Users
          </Link>
          <button className="btn btn-secondary w-100 mb-2" onClick={signout}>Signout</button>
        </div>
      )}
    </div>
  );
}

export default Account;
