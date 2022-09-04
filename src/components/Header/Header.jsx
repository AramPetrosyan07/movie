import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Prov } from "../../Context";

const Header = () => {
  const { signout } = useContext(Prov);
  const navigate = useNavigate();

  return (
    <div className="header flex-Header">
      <Link to="/">
        <img src="https://icons.tivision.ru/picture/ea003d,ffffff/reposition_iviLogoPlateRounded.svg" />
      </Link>
      <div className="flex-Header">
        <div>search</div>
        <div>profile</div>
        <button onClick={() => signout(() => navigate("/", { replace: true }))}>
          logout
        </button>
      </div>
    </div>
  );
};

export default Header;
