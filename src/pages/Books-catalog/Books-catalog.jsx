import Header from "../../components/Header/Header";
import CardListBookCatalog from "../../components/Card-list-book-catalog/Card-list-book-catalog";
import Footer from "../../components/Footer/Footer";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Listbox } from "@headlessui/react";

import "./Books-catalog.scss";

const BooksCatalog = () => {
  const filtersGenre = [
    { id: 0, name: "Жанр", unavailable: false },
    { id: 1, name: "Фантастика", unavailable: false },
    { id: 2, name: "Кулинария", unavailable: false },
    { id: 3, name: "Приключения", unavailable: false },
    { id: 4, name: "Фэнтези", unavailable: false },
    { id: 5, name: "Психология", unavailable: false },
    { id: 6, name: "Роман", unavailable: false },
  ];


  const [selectedFilterGenre, setSelectedFilterGenre] = useState(
    filtersGenre[0]
  );

  const handleAllFilter = () => {
   setSelectedFilterGenre(filtersGenre[0]);
 };

  return (
    <>
      <Header />
      <main className="books-catalog">
        <nav>
          <NavLink
            to="/"
            className="flex items-center gap-8 mt-12 mb-12 font-bold"
          >
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
        <section className="section-books-catalog">
          <h1 className=" text-center">Книги</h1>
          <div className="filter-list">
            <div>
              <button onClick={() => handleAllFilter()} className="all">Все</button>
            </div>
            <div>
              {" "}
              <Listbox
                value={selectedFilterGenre}
                onChange={setSelectedFilterGenre}
              >
                <Listbox.Button className="genre-filter">
                  <svg
                    width="17"
                    height="22"
                    viewBox="0 0 17 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.9942 0.561523H3.20599C1.58986 0.561523 0.267578 1.87331 0.267578 3.49994V18.6014C0.267578 20.228 1.58986 21.5503 3.20599 21.5503H13.9942C15.6209 21.5503 16.9327 20.228 16.9327 18.6014V3.49994C16.9327 1.87331 15.6209 0.561523 13.9942 0.561523ZM4.28694 15.7049H12.9133C13.3541 15.7049 13.7004 16.0617 13.7004 16.492C13.7004 16.9223 13.3541 17.2791 12.9133 17.2791H4.28694C3.85667 17.2791 3.49987 16.9223 3.49987 16.492C3.49987 16.0617 3.85667 15.7049 4.28694 15.7049ZM3.49987 11.0979C3.49987 10.6676 3.85667 10.3108 4.28694 10.3108H12.9133C13.3541 10.3108 13.7004 10.6676 13.7004 11.0979C13.7004 11.5386 13.3541 11.885 12.9133 11.885H4.28694C3.85667 11.885 3.49987 11.5386 3.49987 11.0979ZM12.9133 6.49084H4.28694C3.85667 6.49084 3.49987 6.14453 3.49987 5.70376C3.49987 5.27349 3.85667 4.91669 4.28694 4.91669H12.9133C13.3541 4.91669 13.7004 5.27349 13.7004 5.70376C13.7004 6.14453 13.3541 6.49084 12.9133 6.49084Z"
                      fill="black"
                    />
                  </svg>
                  {selectedFilterGenre.name}
                </Listbox.Button>
                <Listbox.Options>
                  {filtersGenre.map((genre) => (
                    <Listbox.Option
                      key={genre.id}
                      value={genre}
                      disabled={genre.unavailable}
                    >
                      {genre.name}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Listbox>
            </div>
          </div>
          <div className="new-collection-group flex flex-wrap items-center justify-center gap-[73px]">
            <CardListBookCatalog genreFilter={selectedFilterGenre.name} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BooksCatalog;
