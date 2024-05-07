import "../Registration/Registration.scss";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import GoogleBtn from "../../components/GoogleBtn/GoogleBtn";
import Footer from "../../components/Footer/Footer";
import { useContext, useState } from "react";
import { UserContext } from "../../components/App/App";

const Authorization = () => {
  const [userEmail, setEmail] = useState("");
  const [userPassword, setPassword] = useState("");
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userEmail === user.email && userPassword === user.password) {
      localStorage.setItem("userLogin", userEmail);
      navigate("/");
    } else if (userEmail === "admin" && userPassword === "admin") {
      localStorage.setItem("userLogin", userEmail);
      navigate("/");
    } else {
      alert("Неверный логин или пароль");
    }
  };

  return (
    <>
      <Header />
      <main className="registrtion flex flex-col justify-center items-center">
        <form
          onSubmit={handleSubmit}
          action=""
          className="flex flex-col items-center"
        >
          <h1 className="text-center uppercase">Авторизация</h1>
          <div className="flex flex-col items-center ">
            <label
              className="flex flex-col justify-center items-center"
              htmlFor="login"
            >
              <span>E-mail</span>
              <input
                onChange={() => setEmail(event.target.value)}
                value={userEmail}
                id="login"
                type="text"
              />
            </label>
            <label
              className="flex flex-col justify-center items-center"
              htmlFor="password"
            >
              <span>Пароль</span>
              <input
                onChange={() => setPassword(event.target.value)}
                value={userPassword}
                id="password"
                type="password"
              />
            </label>
            <button type="submit" className="uppercase registration-btn">
              <span>Вход</span>
            </button>
          </div>
          <hr />
          <GoogleBtn />
          <div className="go-to-login flex justify-between items-center mb-5 mt-5 gap-3">
            <span>Нет аккаунта?</span>
            <NavLink className=" text-amber-700" to="/registration">
              Зарегистрироваться
            </NavLink>
          </div>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Authorization;
