import { Link } from "react-router-dom";
import AuthButton from "../AuthButton";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { tokenState } from "../../store/tokenStore";

const NavBar = () => {
  const [authentication, setAuthentication] = useState(false);
  const [tk] = useRecoilState(tokenState);

  useEffect(() => {
    if (tk) setAuthentication(true);
    else setAuthentication(false);
  }, [tk]);

  function isAuthenticated() {
    const token = localStorage.getItem("token");

    if (token) setAuthentication(true);
    else setAuthentication(false);
  }

  return (
    <nav className="nav sticky top-0 left-0 w-full bg-white shadow-md flex flex-row">
      <div className=" p-4 font-semibold ml-4 flex items-center mr-10">
        <img src="/doc.svg" className="w-5 h-5" />
        <Link className="no-underline text-semibold" to="/">
          Resume.io
        </Link>
      </div>
      {authentication ? (
        <div className="flex items-center ml-auto">
          <AuthButton isAuthenticated={isAuthenticated} name="Logout" />
        </div>
      ) : (
        <div className="flex items-center ml-auto">
          <AuthButton isAuthenticated={isAuthenticated} name="Admin" />
        </div>
      )}
    </nav>
  );
};

export default NavBar;
