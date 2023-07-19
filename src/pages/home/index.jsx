import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [cookies] = useCookies(["name"]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!cookies.jwt) {
      navigate("/register");
    }
  }, [cookies]);
  const logOut = () => {
    Cookies.remove("jwt");
    navigate("/login");
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>Welcome to HomePage</div>
      <h4 onClick={logOut}>Logout</h4>
    </div>
  );
};

export default Home;
