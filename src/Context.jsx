import axios from "axios";
import React, { useEffect, useState } from "react";

export const Prov = React.createContext();

const Context = (props) => {
  const [detailData, setDetailData] = useState({});
  //stex grma en useri anun@ vorov login enq exel
  const [user, setUser] = useState(null);
  const [favoriteList, setFavoriteList] = useState([]);
  const [movies, setMovies] = useState([]);
  const [usersData, setUsersData] = useState({});

  //movies start
  useEffect(() => {
    fetching();
  }, []);

  const fetching = async () => {
    const result = await axios.get("http://localhost:3000/movies");
    setMovies(result.data);
  };
  //movies end

  // users start
  useEffect(() => {
    loadUsers();
  }, [user]);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3000/users");
    setUsersData(result.data);
  };
  //users end

  const signin = (newUser, cb) => {
    setUser(newUser);
    cb();
  };

  const signout = (cb) => {
    console.log(user);
    setUser(null);
    cb();
  };

  return (
    <Prov.Provider
      value={{
        usersData,
        setUsersData,
        movies,
        setMovies,
        detailData,
        setDetailData,
        user,
        signin,
        signout,
        favoriteList,
        setFavoriteList,
      }}
    >
      {props.children}
    </Prov.Provider>
  );
};

export default Context;
