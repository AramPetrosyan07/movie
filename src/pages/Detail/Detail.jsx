import { useContext } from "react";
import { Prov } from "../../Context";
import "./Detail.css";

const Detail = () => {
  const { detailData } = useContext(Prov);

  return (
    <div className="detail">
      <div
        className="bgImg"
        style={{
          backgroundImage: `url("${detailData.image}")`,
        }}
      ></div>
    </div>
  );
};

export default Detail;
