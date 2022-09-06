import { useContext, useEffect, useState } from "react";
import CartList from "../../components/CartList/CartList";
import Search from "../../components/Search/Search";
import Table from "../../components/Table";
import { Prov } from "../../Context";
import "./Home.css";

const Home = () => {
  const { movies } = useContext(Prov);
  const [filteredMovie, setFilteredMovie] = useState("");

  const handleSearch = (value) => {
    const newCategory = movies.filter((el) =>
      el.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredMovie(newCategory);
    console.log(value);
  };

  return (
    <div className="home">
      Home
      <br />
      <Table />
      <br />
      <br />
      <Search handleSearch={handleSearch} />
      <CartList movies={filteredMovie.length > 0 ? filteredMovie : movies} />
    </div>
  );
};

export default Home;
