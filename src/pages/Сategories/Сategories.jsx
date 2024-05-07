import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { NavLink } from "react-router-dom";
import CategoriesList from "../../components/Categories-list/Categories-list";

import "./Сategories.scss";

const Сategories = () => {
  return (
    <>
      <Header />
      <main className="categories">
        <div className="categories-wrapper">
          <nav>
            <NavLink to="/" className="flex items-center gap-8">
              <svg
                width="37"
                height="37"
                viewBox="0 0 37 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="0.0927734"
                  width="36.8151"
                  height="36.8151"
                  rx="18.4076"
                  fill="#E6E8EC"
                />
                <path
                  d="M21.7942 12.0469C22.3932 12.646 22.3932 13.6172 21.7942 14.2163L17.51 18.5005L21.7942 22.7847C22.3932 23.3837 22.3932 24.355 21.7942 24.954C21.1951 25.5531 20.2239 25.5531 19.6248 24.954L14.2559 19.5852C13.6569 18.9861 13.6569 18.0149 14.2559 17.4158L19.6248 12.0469C20.2239 11.4479 21.1951 11.4479 21.7942 12.0469Z"
                  fill="#23262F"
                />
              </svg>
              На главную
            </NavLink>
          </nav>
          <section>
            <h1 className="title-categories">Категории</h1>
            <div className="categories-list flex justify-center gap-16 w-full flex-wrap">
              <CategoriesList />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Сategories;
