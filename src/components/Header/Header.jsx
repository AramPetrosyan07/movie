import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { Prov } from "../../Context";

const Header = () => {
  const { signout, user, favoriteList, setDetailData } = useContext(Prov);

  const navigate = useNavigate();
  const [profile, setProfile] = useState(false);

  function loginOrPRofil() {
    if (user) {
      return (
        <div className="profil">
          <div>
            <h3>{user.name}</h3>
          </div>
          <div>
            <h3>{user.surname}</h3>
          </div>
          <div>
            <h3>{user.login}</h3>
          </div>
          <div>
            <h3>your favirote movie</h3>
            <div className="favList">
              {favoriteList.map((movie) => (
                <div
                  onClick={() => {
                    navigate(`/detail/${movie.id}`, { replace: true });
                    setDetailData(movie);
                  }}
                  key={movie.id}
                  className="mov"
                  style={{
                    backgroundImage: `url("${movie.image}")`,
                  }}
                >
                  movie
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="loginDiv">
          <Link to="/login">Login</Link>
          <Link to="/registration">registration</Link>
        </div>
      );
    }
  }

  return (
    <div className="header flex-Header">
      <Link to="/">
        <img src="https://icons.tivision.ru/picture/ea003d,ffffff/reposition_iviLogoPlateRounded.svg" />
      </Link>
      <div className="flex-Header">
        <div>search</div>
        <div className="togleDiv">
          <i
            className="fa-solid fa-user"
            onMouseEnter={() => setProfile(true)}
            onMouseLeave={() => setProfile(false)}
          >
            {/* {() => {
              // signout(() => navigate("/", { replace: true }));
            }} */}
          </i>
          <div
            onMouseEnter={() => setProfile(true)}
            onMouseLeave={() => setProfile(false)}
            className={profile ? `popUp` : `close`}
          >
            {loginOrPRofil()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
