import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Prov } from "../../Context";
import "./Registration.css";

const Registration = () => {
  const { usersData } = useContext(Prov);

  const [user, setUser] = useState({
    id: `${Date.now()}`,
    name: "",
    surname: "",
    login: "",
    pass: "",
    favoriteMovie: [],
  });
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    let bool = true;
    usersData.forEach((data) => {
      if (data.login !== user.login) {
        bool = true;
      } else {
        return (bool = false);
      }

      if (data.pass !== user.pass) {
        bool = true;
      } else {
        return (bool = false);
      }
    });
    if (bool) {
      await axios.post("http://localhost:3000/users", user);
      navigate("/");
    } else {
      console.log("login or pass are repeated");
    }
  };
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="AddUser">
      <h2>ADD USER</h2>
      <button onClick={() => navigate(-1)}>GO BACK</button>

      <form onSubmit={(e) => onSubmit(e)}>
        <div>
          Name:
          <input
            type="text"
            value={user.name}
            onChange={(e) => onInputChange(e)}
            name="name"
          />
        </div>
        <div>
          surname:
          <input
            type="text"
            value={user.surname}
            onChange={(e) => onInputChange(e)}
            name="surname"
          />
        </div>
        <div>
          login:
          <input
            type="text"
            value={user.login}
            onChange={(e) => onInputChange(e)}
            name="login"
          />
        </div>
        <div>
          pass:
          <input
            type="text"
            value={user.pass}
            onChange={(e) => onInputChange(e)}
            name="pass"
          />
        </div>

        <button>create</button>
      </form>
    </div>
  );
};

export default Registration;
