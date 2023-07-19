import { useEffect, useState } from "react";
import CustomInput from "../../../components/form/customInput/CustomInput";
import css from "../auth.module.css";
import { deCapitaliseFirstLetter } from "../../../utilities/validation";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCookies } from "react-cookie";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visiblePassword, setVisiblePassword] = useState(false);

  const navigate = useNavigate();
  const [cookies] = useCookies(["name"]);

  useEffect(() => {
    if (cookies.jwt) {
      navigate("/");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "http://localhost:8000/login",
          {
            email,
            password,
          },
          { withCredentials: true }
        )
        .then((res) => {
          console.log(res);
          if (res.data?.user) {
            navigate("/");
          } else {
            toast.error(res.data.error, { position: "top-right" });
          }
        });
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.error, { position: "top-right" });
    }
  };

  return (
    <div className={css.authContainer}>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <h3>Login</h3>
        <CustomInput
          placeholder="Email"
          type="email"
          value={email}
          handleChange={(e) => {
            setEmail(deCapitaliseFirstLetter(e.target.value));
          }}
        />
        <CustomInput
          placeholder="Password"
          type={visiblePassword ? "text" : "password"}
          value={password}
          handleChange={(e) => {
            setPassword(e.target.value);
          }}
          afterIcon={
            visiblePassword ? (
              <AiFillEyeInvisible
                onClick={() => {
                  setVisiblePassword(!visiblePassword);
                }}
              />
            ) : (
              <AiFillEye
                onClick={() => {
                  setVisiblePassword(!visiblePassword);
                }}
              />
            )
          }
        />
        <button type="submit">Login</button>
        <div className={css.belowText}>
          Don't have an account ? <Link to="/register">Register</Link>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
