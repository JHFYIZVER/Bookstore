import Search from "../Search/Search";
import { NavLink } from "react-router-dom";
import { BookContext } from "../../components/App/App";
import { useState, useContext } from "react";

import "./Header.scss";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const { books } = useContext(BookContext);

  const clazz = isOpen ? "header-menu-btn active" : "header-menu-btn";
  const userLogin = localStorage.getItem("userLogin");

  return (
    <header className="flex justify-center">
      <div className="header-content flex justify-between items-center">
        <div className="flex items-center header-logo">
          <h2>Book’ля</h2>
          <svg
            width="21"
            height="31"
            viewBox="0 0 21 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.1828 1.00909V15.4724H2.01953V1.00909C2.01953 0.450695 2.47017 0 3.02862 0C4.39425 0 5.65888 0.531442 6.594 1.49345C7.17246 2.05856 7.7308 2.72454 7.95962 3.69997H14.2426C14.4714 2.72454 15.0299 2.05179 15.6217 1.47327C16.5435 0.531442 17.8081 0 19.1738 0C19.7322 0 20.1828 0.450695 20.1828 1.00909Z"
              fill="#95673F"
            />
            <path
              d="M20.1832 1.00909V15.4724H11.1016V3.69991H14.2431C14.4718 2.72448 15.0303 2.05173 15.6221 1.47321C16.5439 0.531442 17.8085 0 19.1741 0C19.7326 0 20.1832 0.450695 20.1832 1.00909Z"
              fill="#875334"
            />
            <path
              d="M15.1375 7.73633C13.5297 7.73633 12.043 8.48976 11.1012 9.75445C10.1594 8.48976 8.67268 7.73633 7.06488 7.73633C4.31338 7.73633 2.01953 9.98992 2.01953 12.7817V29.9359C2.01953 30.4942 2.47017 30.945 3.02862 30.945H7.06494C8.47764 30.945 9.82979 30.723 11.1012 30.3059C16.3686 28.6039 20.1829 23.6528 20.1829 17.827V12.7817C20.1828 9.98322 17.8822 7.73633 15.1375 7.73633Z"
              fill="#F5DEB2"
            />
            <path
              d="M20.1832 12.7817V17.827C20.1832 23.6528 16.369 28.6039 11.1016 30.3059V9.75445C12.0434 8.48976 13.5301 7.73633 15.1379 7.73633C17.8826 7.73633 20.1832 9.98322 20.1832 12.7817Z"
              fill="#EFCB99"
            />
            <path
              d="M7.06378 13.7906C7.62109 13.7906 8.07287 13.3389 8.07287 12.7816C8.07287 12.2242 7.62109 11.7725 7.06378 11.7725C6.50647 11.7725 6.05469 12.2242 6.05469 12.7816C6.05469 13.3389 6.50647 13.7906 7.06378 13.7906Z"
              fill="#6E6057"
            />
            <path
              d="M15.1341 13.7906C15.6914 13.7906 16.1432 13.3389 16.1432 12.7816C16.1432 12.2242 15.6914 11.7725 15.1341 11.7725C14.5768 11.7725 14.125 12.2242 14.125 12.7816C14.125 13.3389 14.5768 13.7906 15.1341 13.7906Z"
              fill="#615349"
            />
            <path
              d="M11.0989 17.8264C10.5419 17.8264 10.0898 17.3747 10.0898 16.8173V14.7991C10.0898 14.2417 10.5419 13.79 11.0989 13.79C11.656 13.79 12.108 14.2417 12.108 14.7991V16.8173C12.108 17.3747 11.656 17.8264 11.0989 17.8264Z"
              fill="#FFA733"
            />
            <path
              d="M1.00909 30.9447C0.452025 30.9447 0 30.493 0 29.9356V20.8539C0 18.0718 2.26321 15.8086 5.04535 15.8086C7.82748 15.8086 10.0907 18.0718 10.0907 20.8539V21.863C10.0907 26.8706 6.01697 30.9447 1.00909 30.9447Z"
              fill="#95673F"
            />
            <path
              d="M12.1107 16.8173V14.7991C12.1107 14.2417 11.6586 13.79 11.1016 13.79V17.8264C11.6586 17.8264 12.1107 17.3747 12.1107 16.8173Z"
              fill="#EE8700"
            />
          </svg>
        </div>
        <Search />
        <nav className={`flex header-nav ${isOpen ? "active" : ""}`}>
          <ul className="header-nav-list flex gap-x-12">
            <NavLink to="/" className="header-nav-list-item">
              Главная
            </NavLink>
            {userLogin ? (
              userLogin === "admin" ? (
                <NavLink className="header-nav-list-item" to="/admin">
                  {userLogin}
                </NavLink>
              ) : (
                <NavLink
                  className="header-nav-list-item"
                  to="/profile"
                  onClick={() => localStorage.removeItem("userLogin")}
                >
                  {userLogin}
                </NavLink>
              )
            ) : (
              <NavLink className="header-nav-list-item" to="/registration">
                Регистрация
              </NavLink>
            )}
            <NavLink to="/books" className="header-nav-list-item">
              Книги
            </NavLink>
            <NavLink to="/categories" className="header-nav-list-item">
              Категории
            </NavLink>
            <NavLink to="/basket" className="header-nav-list-item">
              {isOpen ? (
                "Корзина"
              ) : (
                <div className="relative">
                  {" "}
                  <div className="count absolute">
                    <span>{books.length}</span>
                  </div>
                  <svg
                    width="34"
                    height="30"
                    viewBox="0 0 34 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.0798 28.9995C28.8153 28.9995 30.2221 27.6025 30.2221 25.8791C30.2221 24.1558 28.8153 22.7588 27.0798 22.7588C25.3443 22.7588 23.9375 24.1558 23.9375 25.8791C23.9375 27.6025 25.3443 28.9995 27.0798 28.9995Z"
                      stroke="black"
                    />
                    <path
                      d="M11.3689 28.9995C13.1043 28.9995 14.5112 27.6025 14.5112 25.8791C14.5112 24.1558 13.1043 22.7588 11.3689 22.7588C9.63343 22.7588 8.22656 24.1558 8.22656 25.8791C8.22656 27.6025 9.63343 28.9995 11.3689 28.9995Z"
                      stroke="black"
                    />
                    <path
                      d="M1 0.899903C1 0.899903 8.29019 0.806292 7.28465 7.14062L6.20064 13.475C6.03988 14.2345 6.05565 15.0204 6.24696 15.773C6.43825 16.5255 6.79997 17.2247 7.30449 17.8176C7.80902 18.4103 8.44311 18.8809 9.15846 19.1937C9.87381 19.5063 10.6515 19.6528 11.4325 19.6221H24.0018C25.7425 19.5708 27.4142 18.935 28.744 17.8185C30.0737 16.7021 30.9831 15.1708 31.3234 13.475L32.4077 7.06263C32.5792 6.29458 32.5708 5.49763 32.383 4.73331C32.1951 3.96901 31.8328 3.25779 31.3242 2.65464C30.8155 2.05147 30.174 1.5725 29.4492 1.25472C28.7244 0.936942 27.9357 0.788881 27.1441 0.82191H13.475"
                      stroke="black"
                    />
                  </svg>
                </div>
              )}
            </NavLink>
          </ul>
        </nav>

        <button onClick={() => setOpen(!isOpen)} className={clazz}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
