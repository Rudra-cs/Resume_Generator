import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Suspense, lazy } from "react";
import HomePage from "./components/HomePage";
import NoMatch from "./components/NoMatch";
import NavBar from "./components/Header/NavBar";
import { Toaster } from "react-hot-toast";
import { useRecoilValue } from "recoil";
import { tokenState } from "./store/tokenStore";

const Admin = lazy(() => import("./components/Admin"));
const Login = lazy(() => import("./components/Login"));

const App = () => {
  const token = useRecoilValue(tokenState);

  return (
    <Router>
      <NavBar />
      <Toaster />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/admin"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              {token ? <Admin /> : <Navigate to="/login" />}
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Login />
            </Suspense>
          }
        />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
};

export default App;
