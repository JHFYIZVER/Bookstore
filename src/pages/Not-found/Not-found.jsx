import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { NavLink } from "react-router-dom";
import "./Not-found.scss";

const NotFound = () => {
  return (
    <div className="not-found-continer flex flex-col justify-between ">
      <Header />
      <main>
        <div className="contaner-error">
          <h1 className="text-7xl">Ошибка 404</h1>
          <div className="flex flex-col justify-between items-center gap-8">
            <p className="text-4xl">Страница не найдена</p>
            <p className="text-3xl text-center">
              Кажется что-то пошло не так! Страница, которую вы запрашиваете, не
              существует. Возможно она устарела, была удалена, или был введен
              неверный адрес в адресной строке.
            </p>
            <button className="go-to-main">
              <NavLink to="/">Вернуться на главную</NavLink>
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
