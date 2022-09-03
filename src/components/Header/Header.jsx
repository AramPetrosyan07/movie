import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header flex-Header">
      <Link to="/">
        <img src="https://icons.tivision.ru/picture/ea003d,ffffff/reposition_iviLogoPlateRounded.svg" />
      </Link>
      <div className="flex-Header">
        <div>search</div>
        <div>profile</div>
      </div>
    </div>
  );
};

export default Header;
