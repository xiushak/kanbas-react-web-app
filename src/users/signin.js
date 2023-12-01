import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    navigate("/project/account");
  };
  return (
    <div>
      <h1>Sign into account</h1>
      <input
        value={credentials.username}
        className="form-control mb-2"
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
      />
      <input
        value={credentials.password}
        type="password"
        className="form-control mb-2"
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />
      <button 
      className="btn btn-primary w-100 mb-2"
      onClick={signin}> Signin </button>
    </div>
  );
}

export default Signin;