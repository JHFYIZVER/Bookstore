import Header from "../../components/Header/Header";
import GoogleBtn from "../../components/GoogleBtn/GoogleBtn";
import Footer from "../../components/Footer/Footer";
import "./Registration.scss";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useContext, useState } from "react";
import { UserContext } from "../../components/App/App";

const Registration = () => {
  const [userData, setUserData] = useState({});
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const [nameDirty, setNameDirty] = useState(false);
  const [surnameDirty, setSurnameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [passwordRepeatDirty, setPasswordRepeatDirty] = useState(false);

  const [nameError, setNameError] = useState("Имя не может быть пустым");
  const [surnameError, setSurnameError] = useState(
    "Фамилия не может быть пустой"
  );
  const [emailError, setEmailError] = useState("Email не может быть пустым");
  const [passwordError, setPasswordError] = useState(
    "Пароль не может быть пустым"
  );
  const [passwordRepeatError, setPasswordRepeatError] = useState(
    "Пароль не может быть пустым"
  );

  const { setUser } = useContext(UserContext);

  const addUser = (event) => {
    axios
      .post("http://localhost:3000/users", userData)
      .then((res) => {
        setUser((prevState) => ({ ...prevState, ...userData }));
      })
      .catch((error) => {
        console.error(error);
      });
    event.preventDefault();
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "name":
        setNameDirty(true);
        break;
      case "surname":
        setSurnameDirty(true);
        break;
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
      case "password-repeat":
        setPasswordRepeatDirty(true);
        break;
    }
  };


  return (
    <>
      <Header />
      <main className="registrtion flex flex-col justify-center items-center">
        <form className="flex flex-col items-center">
          <h1 className="text-center uppercase">регистрация</h1>
          <div className="flex flex-col items-center ">
            <label
              className="flex flex-col justify-center items-center"
              htmlFor="name"
            >
              <span>Имя</span>
              {nameDirty && nameError && (
                <span className="error">{nameError}</span>
              )}
              <input
                onChange={(e) => {
                  setUserData({ ...userData, name: e.target.value });
                }}
                onBlur={(e) => blurHandler(e)}
                id="name"
                type="text"
              />
            </label>
            <label
              className="flex flex-col justify-center items-center"
              htmlFor="surname"
            >
              <span>Фамилия</span>
              {surnameDirty && surnameError && (
                <span className="error">{surnameError}</span>
              )}
              <input
                onBlur={(e) => blurHandler(e)}
                onChange={(e) => {
                  setUserData({ ...userData, surname: e.target.value });
                }}
                id="surname"
                type="text"
              />
            </label>
            <label
              className="flex flex-col justify-center items-center"
              htmlFor="email"
            >
              <span>Email</span>
              {emailDirty && emailError && (
                <span className="error">{emailError}</span>
              )}
              <input
                onChange={(e) => {
                  setUserData({ ...userData, email: e.target.value });
                }}
                onBlur={(e) => blurHandler(e)}
                id="email"
                type="email"
              />
            </label>
            <label
              className="flex flex-col justify-center items-center"
              htmlFor="password"
            >
              <span>Пароль</span>
              {passwordDirty && passwordError && (
                <span className="error">{passwordError}</span>
              )}
              <input
                onChange={(e) => {
                  setUserData({ ...userData, password: e.target.value });
                }}
                onBlur={(e) => blurHandler(e)}
                id="password"
                type="password"
              />
            </label>
            <label
              className="flex flex-col justify-center items-center"
              htmlFor="password-repeat"
            >
              <span>Подтвердите пароль</span>
              {passwordRepeatDirty && passwordRepeatError && (
                <span className="error">{passwordRepeatError}</span>
              )}
              <input
                onBlur={(e) => blurHandler(e)}
                id="password-repeat"
                type="password"
              />
            </label>
            <button onClick={addUser} className="uppercase registration-btn">
              <span> регистрация</span>
            </button>
          </div>
          <hr />
          <GoogleBtn />
          <div className="go-to-login flex justify-between items-center m-5 gap-3">
            <span>Уже зарегистрированы?</span>
            <NavLink className=" text-amber-700" to="/authorization">
              Войти
            </NavLink>
          </div>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Registration;
