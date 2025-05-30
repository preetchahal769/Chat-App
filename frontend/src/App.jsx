import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Signin from "./pages/signin/Signin";
import Signup from "./pages/signup/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthContext";

function App() {
  const { authUser } = useAuth();
  return (
    <div className=" h-screen flex   ">
      <Routes>
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to="/signin" />}
        />
        <Route
          path="/signin"
          element={authUser ? <Navigate to="/" /> : <Signin />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <Signup />}
        />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
