/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { login } from "../auth/authService";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { useRecoilState } from "recoil";
import { tokenState } from "../store/tokenStore";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [token, setToken] = useRecoilState(tokenState);

  const handleLogin = async () => {
    try {
      const resToken = await login(username, password);
      const tk = localStorage.setItem("token", resToken);
      setToken(tk);
      console.log(resToken + " adasdsa");
    } catch (error) {
      toast.error("Invalid Credentials!!");
      console.error("Login failed:", error.message);
    }
  };
  useEffect(() => {
    const checkToken = async () => {
      const tk = localStorage.getItem("token");

      if (tk && !token) {
        // Adding a condition here to check if the token is not set to prevent infinite loop
        setToken(tk);
        navigate("/admin");
      }
    };

    checkToken();
  });

  return (
    <div>
      <Toaster />
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
