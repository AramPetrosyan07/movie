import axios from "axios";
import { useContext } from "react";
import { Prov } from "../../Context";
import "./Detail.css";

const Detail = () => {
  const { detailData, favoriteList, setFavoriteList, user } = useContext(Prov);

  function addToFavoriteList() {
    if (!favoriteList.includes(detailData)) {
      setFavoriteList([detailData, ...favoriteList]);
      addToJSON();
    }
  }
  const newObj = {
    ...user,
    favoriteMovie: [detailData, ...favoriteList],
  };

  console.log(newObj);

  const addToJSON = async () => {
    await axios.put("http://localhost:3000/users/" + user.id, newObj);
  };

  return (
    <div className="detail">
      <div
        className="bgImg"
        style={{
          backgroundImage: `url("${detailData.image}")`,
        }}
      ></div>
      <button onClick={() => addToFavoriteList()}>
        add favirote movie list
      </button>
    </div>
  );
};

export default Detail;
