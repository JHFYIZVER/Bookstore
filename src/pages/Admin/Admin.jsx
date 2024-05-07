import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "../Registration/Registration.scss";
import axios from "axios";
import "./Admin.scss";
import { useState } from "react";

const Admin = () => {
  const userLogin = localStorage.getItem("userLogin");
  const [data, setData] = useState({});
  

  const addBook = () => {
    axios.post("http://localhost:3000/books", data).then((res) => {});
  };

  return (
    <>
      {userLogin === "admin" ? (
        <>
          <Header />
          <main className="registrtion flex flex-col justify-center items-center">
            <form className="admin-form">
              <h1 className="text-center uppercase">Добавление книги</h1>
              <div className="flex flex-col items-center gap-5">
                <label
                  className="flex flex-col justify-center items-center"
                  htmlFor="title"
                >
                  <span>Название книги</span>
                  <input
                    onChange={(e) => {
                      setData({ ...data, title: e.target.value });
                    }}
                    type="text"
                    id="title"
                  />
                </label>
                <label
                  className="flex flex-col justify-center items-center"
                  htmlFor="author"
                >
                  <span>Автор</span>
                  <input
                    onChange={(e) => {
                      setData({ ...data, author: e.target.value });
                    }}
                    type="text"
                    id="author"
                  />
                </label>
                <label
                  className="flex flex-col justify-center items-center"
                  htmlFor="price"
                >
                  <span>Цена</span>
                  <input
                    onChange={(e) => {
                      setData({ ...data, price: e.target.value });
                    }}
                    type="text"
                    id="price"
                  />
                </label>
                <label
                  className="flex flex-col justify-center items-center"
                  htmlFor="description"
                >
                  <span>Описание</span>
                  <input
                    onChange={(e) => {
                      setData({ ...data, description: e.target.value });
                    }}
                    type="text"
                    id="description"
                  />
                </label>
                <label
                  className="flex flex-col justify-center items-center"
                  htmlFor="image"
                >
                  <span>Обложка</span>
                  <input
                    onChange={(e) => {
                      setData({ ...data, image: e.target.value });
                    }}
                    type="text"
                    id="image"
                  />
                </label>
                <label
                  className="flex flex-col justify-center items-center"
                  htmlFor="publishingHouse"
                >
                  <span>Издательство</span>
                  <input
                    onChange={(e) => {
                      setData({ ...data, publishingHouse: e.target.value });
                    }}
                    type="text"
                    id="publishingHouse"
                  />
                </label>
                <label
                  className="flex flex-col justify-center items-center"
                  htmlFor="year"
                >
                  <span>Год издания</span>
                  <input
                    onChange={(e) => {
                      setData({ ...data, year: e.target.value });
                    }}
                    type="text"
                    id="year"
                  />
                </label>
                <label
                  className="flex flex-col justify-center items-center"
                  htmlFor="pages"
                >
                  <span>Количество страниц</span>
                  <input
                    onChange={(e) => {
                      setData({ ...data, pages: e.target.value });
                    }}
                    type="text"
                    id="pages"
                  />
                </label>
                <label
                  className="flex flex-col justify-center items-center"
                  htmlFor="binding"
                >
                  <span>Переплет</span>
                  <input
                    onChange={(e) => {
                      setData({ ...data, binding: e.target.value });
                    }}
                    type="text"
                    id="binding"
                  />
                </label>
                <label
                  className="flex flex-col justify-center items-center"
                  htmlFor="weight"
                >
                  <span>Вес</span>
                  <input
                    onChange={(e) => {
                      setData({ ...data, weight: e.target.value });
                    }}
                    type="text"
                    id="weight"
                  />
                </label>
                <label
                  className="flex flex-col justify-center items-center"
                  htmlFor="size"
                >
                  <span>Размер</span>
                  <input
                    onChange={(e) => {
                      setData({ ...data, size: e.target.value });
                    }}
                    type="text"
                    id="size"
                  />
                </label>
                <label
                  className="flex flex-col justify-center items-center"
                  htmlFor="ageLimit"
                >
                  <span>Возрастное ограничение</span>
                  <input
                    onChange={(e) => {
                      setData({ ...data, ageLimit: e.target.value });
                    }}
                    type="text"
                    id="ageLimit"
                  />
                </label>
                <label
                  className="flex flex-col justify-center items-center"
                  htmlFor="mark"
                >
                  <span>Оценка</span>
                  <input
                    onChange={(e) => {
                      setData({ ...data, mark: e.target.value });
                    }}
                    type="text"
                    id="mark"
                  />
                </label>
                <label
                  className="flex flex-col justify-center items-center"
                  htmlFor="genre"
                >
                  <span>Жанр</span>
                  <input
                    onChange={(e) => {
                      setData({ ...data, genre: e.target.value });
                    }}
                    type="text"
                    id="genre"
                  />
                </label>
                <label
                  className="flex flex-col justify-center items-center"
                  htmlFor="avatarAutor"
                >
                  <span>Аватар автора</span>
                  <input
                    onChange={(e) => {
                      setData({ ...data, avatarAutor: e.target.value });
                    }}
                    type="text"
                    id="avatarAutor"
                  />
                </label>
                <label
                  className="flex flex-col justify-center items-center"
                  htmlFor="avatarPublishingHouse"
                >
                  <span>Аватар издательства</span>
                  <input
                    onChange={(e) => {
                      setData({
                        ...data,
                        avatarPublishingHouse: e.target.value,
                      });
                    }}
                    type="text"
                    id="avatarPublishingHouse"
                  />
                </label>

                <button
                  className="uppercase registration-btn"
                  onClick={addBook}
                  type="submit"
                >
                  Добавить книгу
                </button>
              </div>
            </form>
          </main>
          <Footer />
        </>
      ) : (
        <div>У вас нет доступа к этой странице.</div>
      )}
    </>
  );
};

export default Admin;
