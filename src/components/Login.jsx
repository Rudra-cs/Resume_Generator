/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { login } from "../auth/authService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
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
      navigate("/admin");
    } catch (error) {
      toast.error("Invalid Credentials!!");
      console.error("Login failed:", error.message);
    }
  };

  useEffect(() => {
    const checkToken = async () => {
      const tk = localStorage.getItem("token");

      if (tk && !token) {
        toast.success("Welcome, Admin!!");
        // Adding a condition here to check if the token is not set to prevent infinite loop
        setToken(tk);
        navigate("/admin");
      }
    };

    checkToken();
  });

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md p-8 bg-[#F4F6FF] shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
