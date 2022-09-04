import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Prov } from "../Context";

const RequireAuth = ({ children }) => {
  const { user } = useContext(Prov);
  const location = useLocation();

  if (!user) return <Navigate to="/login" state={{ from: location }} />;

  return children;
};
export default RequireAuth;
