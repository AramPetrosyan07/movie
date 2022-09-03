import React, { useState } from "react";

export const Prov = React.createContext();

const Context = (props) => {
  const [detailData, setDetailData] = useState({});
  console.log(detailData);
  return (
    <Prov.Provider value={{ detailData, setDetailData }}>
      {props.children}
    </Prov.Provider>
  );
};

export default Context;
