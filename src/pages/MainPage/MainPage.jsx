import Header from "../../components/Header/Header";
import EmblaCarousel from "./EmblaCarousel";
import sloganBook from "./img/book-group.png";
import reader from "./img/Reader.png";
import rectangle from "./img/rectangle.svg";
import CardList from "../../components/Card-list/Card-list";
import Footer from "../../components/Footer/Footer";
import { NavLink } from "react-router-dom";

import "./MainPage.scss";
import "./embla.css";

const MainPage = () => {
  const OPTIONS = { align: "start" };
  const SLIDE_COUNT = 1;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <div className="wrapper flex flex-col justify-center items-center">
      <Header />
      <main>
        <section className="slogan flex justify-between">
          <div className="slogan-text flex flex-col gap-4">
            <h1 className="title">
              Станьте читателем, и завтра вы станете лидером.
            </h1>
            <h2 className="max-w-lg text-lg text-gray-500">
              Широкий выбор лучших произведений, увлекательные новинки и
              незабываемые классики ждут вас в нашем магазине!
            </h2>
            <div className="slogan-group-btn flex gap-5">
              <button className="find-more">Узнать больше</button>
              <button className="to-shop"><NavLink to="/categories">К покупкам</NavLink></button>
            </div>
            <ul className="flex gap-16 text-4xl font-bold mb-12 advantages">
              <li className="relative">
                430K+{" "}
                <span className="absolute -bottom-6 left-0 font-normal text-xs text-gray-400">
                  Книг
                </span>
              </li>
              <li className="relative">
                159K+{" "}
                <span className="absolute -bottom-6 left-0 font-normal text-xs text-gray-400">
                  Авторов
                </span>
              </li>
              <li className="relative">
                350+{" "}
                <span className="absolute -bottom-6 left-0 font-normal text-xs text-gray-400">
                  Магазинов
                </span>
              </li>
            </ul>
          </div>
          <div className="slogan-img relative">
            <img
              className="slogan-book absolute"
              src={sloganBook}
              alt="slogan-book"
            />
            <img
              className="slogan-book__blur absolute"
              src={sloganBook}
              alt="slogan-book"
            />
            <img
              className="slogan-reader absolute bottom-10 right-12 z-10"
              src={reader}
              alt="reader"
            />
            <img
              className="absolute -right-12 rectangle"
              src={rectangle}
              alt="rectangle"
            />
          </div>
        </section>
        <section className="top-week-book flex flex-col pt-16 pb-16">
          <h2 className="text-4xl font-bold text-center mb-16">
            Топ недели - книги
          </h2>
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </section>
        <section className="top-author flex-col pt-16 pb-16">
          <h2 className="text-4xl font-bold text-center mb-16">Топ авторов</h2>
          <table>
            <thead>
              <tr>
                <th>Автор</th>
                <th>Место</th>
                <th>Произведения</th>
                <th>Читатели</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Джеймс Роллинс</td>
                <td className="flex items-center gap-3 justify-center">
                  <svg
                    width="17"
                    height="28"
                    viewBox="0 0 17 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.75818 0.401367L0.550781 14.1898L8.75818 19.1142L16.9656 14.1898L8.75818 0.401367ZM0.550781 15.8313L8.75818 27.3216L16.9656 15.8313L8.75818 20.7557L0.550781 15.8313Z"
                      fill="#141416"
                    />
                  </svg>
                  1
                </td>
                <td>2.2K</td>
                <td>800К+</td>
              </tr>
              <tr>
                <td>Сьтвен Кинг</td>
                <td className="flex items-center gap-3 justify-center">
                  <svg
                    width="17"
                    height="28"
                    viewBox="0 0 17 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.75818 0.401367L0.550781 14.1898L8.75818 19.1142L16.9656 14.1898L8.75818 0.401367ZM0.550781 15.8313L8.75818 27.3216L16.9656 15.8313L8.75818 20.7557L0.550781 15.8313Z"
                      fill="#141416"
                    />
                  </svg>
                  2
                </td>
                <td>2.1K</td>
                <td>600К+</td>
              </tr>
              <tr>
                <td>Лев Толстой</td>
                <td className="flex items-center gap-3 justify-center">
                  <svg
                    width="17"
                    height="28"
                    viewBox="0 0 17 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.75818 0.401367L0.550781 14.1898L8.75818 19.1142L16.9656 14.1898L8.75818 0.401367ZM0.550781 15.8313L8.75818 27.3216L16.9656 15.8313L8.75818 20.7557L0.550781 15.8313Z"
                      fill="#141416"
                    />
                  </svg>
                  3
                </td>
                <td>1.6K</td>
                <td>500К+</td>
              </tr>
              <tr>
                <td>Оскар Уайльд </td>
                <td className="flex items-center gap-3 justify-center">
                  <svg
                    width="17"
                    height="28"
                    viewBox="0 0 17 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.75818 0.401367L0.550781 14.1898L8.75818 19.1142L16.9656 14.1898L8.75818 0.401367ZM0.550781 15.8313L8.75818 27.3216L16.9656 15.8313L8.75818 20.7557L0.550781 15.8313Z"
                      fill="#141416"
                    />
                  </svg>
                  4
                </td>
                <td>1.1K</td>
                <td>200К+</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className="new-collection flex-col pt-16 pb-16">
          <h2 className="text-4xl font-bold text-center mb-16">
            Новавя коллекция
          </h2>
          <div className="new-collection-group flex flex-wrap items-center justify-center">
            <CardList />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MainPage;
