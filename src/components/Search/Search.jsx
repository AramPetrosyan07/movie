import React from "react";
import "./Search.css";

const Search = ({ handleSearch }) => {
  const handleChange = (e) => {
    handleSearch(e.target.value);
  };
  return (
    <div className="inp">
      <input
        className="input"
        type="text"
        placeholder="Search..."
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
