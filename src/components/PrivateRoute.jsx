/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
const PrivateRoute = ({ isAuthenticated }) => {
  const navigate = useNavigate();

  //   return <div>{isAuthenticated ? redirect("/login") : redirect("/admin")}</div>;
  return <div>{isAuthenticated ? "dasdsad" : navigate("/login")}</div>;
};

export default PrivateRoute;
