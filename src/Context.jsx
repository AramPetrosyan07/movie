import React, { useState } from "react";

export const Prov = React.createContext();

const Context = (props) => {
  const [detailData, setDetailData] = useState({});
  //stex grma en useri anun@ vorov login enq exel
  const [user, setUser] = useState(null);
  const [favoriteList, setFavoriteList] = useState([]);

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
