/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

const AuthButton = ({ name, isAuthenticated }) => {
  const navigate = useNavigate();

  const getRoute = (name) => {
    const routeMap = {
      Admin: "/login",
      Logout: "/logout",
      default: "/",
    };

    return routeMap[name] || routeMap.default;
  };

  function handleLogin() {
    if (name === "Logout") {
      localStorage.removeItem("token");
      isAuthenticated();
      navigate("/");
    } else {
      navigate(getRoute(name));
    }
  }

  return (
    <div className="flex justify-center">
      <button
        className="p-2 w-20 text-sm font-semibold cursor-pointer mr-4 border rounded-md focus:outline-none hover:bg-blue-600 focus:border-blue-500 bg-blue-500 text-white"
        onClick={handleLogin}
      >
        {name}
      </button>
    </div>
  );
};

export default AuthButton;
