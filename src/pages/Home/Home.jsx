import axios from "axios";
import { useEffect, useState } from "react";
import CartList from "../../components/CartList/CartList";
import "./Home.css";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetching();
  }, []);

  const fetching = async () => {
    const result = await axios.get("http://localhost:3000/movies");
    setMovies(result.data);
  };

  // console.log(movies);
  return (
    <div className="home">
      Home
      <br />
      <br />
      <br />
      <CartList movies={movies} />
    </div>
  );
};

export default Home;
