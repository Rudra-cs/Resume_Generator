import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./components/HomePage";
import NoMatch from "./components/NoMatch";
import Admin from "./components/Admin";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import { useRecoilValue } from "recoil";
import { tokenState } from "./store/tokenStore";

const App = () => {
  const token = useRecoilValue(tokenState);
  console.log(localStorage.getItem("token") + "local");

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin"
          element={token ? <Admin /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
};

export default App;
