import "./Login.css";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Prov } from "../../Context";

const Login = () => {
  const { signin, usersData } = useContext(Prov);
  const navigate = useNavigate();
  const location = useLocation();

  const [log, setLog] = useState("");
  const [pass, setPass] = useState("");

  const hanfleSublit = (event) => {
    event.preventDefault();

    const fromPage = location.state?.from?.pathname || "";
    let bool = false;
    usersData.forEach((us) => {
      if (log === " " || pass === "") {
      } else {
        if (us.login === log && us.pass === pass) {
          signin(us, () => navigate(fromPage, { replace: true }));
          return (bool = true);
        } else {
          bool = false;
        }
      }
    });
    if (!bool) {
      console.log("nman tvyal goyotuun chuni");
    }
    setLog("");
    setPass("");
  };

  return (
    <div className="login">
      <form onSubmit={hanfleSublit}>
        <input
          type="text"
          // name="username"
          value={log}
          onChange={(e) => setLog(e.target.value)}
          placeholder="login"
        />

        <input
          type="text"
          // name="userpass"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="password"
        />
        <button type="submit">login</button>
      </form>
      <Link to="/registration">Registration</Link>
    </div>
  );
};

export default Login;
