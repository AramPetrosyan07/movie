import { useContext, useState } from "react";
import CartList from "../../components/CartList/CartList";
import Filter from "../../components/Filter/Filter";
import Search from "../../components/Search/Search";
import Table from "../../components/Table";
import { Prov } from "../../Context";
import "./Home.css";

const Home = () => {
  const { movies } = useContext(Prov);
  const [searchedMovies, setSearchedMovies] = useState("");

  const handleSearch = (value) => {
    const newCategory = movies.filter((el) =>
      el.name.toLowerCase().includes(value.toLowerCase())
    );
    setSearchedMovies(newCategory);
  };

  const filterMovies = (filteredArr) => {
    console.log(filteredArr);
  };

  return (
    <div className="home">
      Home
      <br />
      <Table />
      <br />
      <br />
      <Search handleSearch={handleSearch} />
      <Filter filterMovies={filterMovies} />
      <CartList movies={searchedMovies.length > 0 ? searchedMovies : movies} />
    </div>
  );
};

export default Home;
