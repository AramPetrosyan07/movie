import Cart from "../Cart/Cart";
import "./CartList.css";

const CartList = ({ movies }) => {
  return (
    <div className="cartList">
      {movies.map((movie) => (
        <Cart key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default CartList;
