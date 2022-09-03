import "./Cart.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Prov } from "../../Context";

const Cart = ({ movie }) => {
  const { setDetailData } = useContext(Prov);

  return (
    <Link to={`/detail/${movie.id}`} onClick={() => setDetailData(movie)}>
      <div
        className="cart"
        style={{
          backgroundImage: `url("${movie.image}")`,
        }}
      >
        <h3>{movie.name}</h3>
        <h3>{movie.id}</h3>
        <h3>{movie.reiting}</h3>
      </div>
    </Link>
  );
};

export default Cart;
