import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import emptyBasketImg from "./img/7612.png";
import { NavLink } from "react-router-dom";
import { BookContext } from "../../components/App/App";
import { useState, useContext, useEffect } from "react";

import "./Basket.scss";

const Basket = () => {
  const [data, setData] = useState({});
  const [price, setPrice] = useState(0);
  const { books } = useContext(BookContext);

  useEffect(() => {
    const newData = books.reduce((acc, book) => {
      acc[book.id] = { ...book, count: 1 };
      return acc;
    }, {});
    setData(newData);
   
  }, [books]);

  const handlePlusClick = (book) => {
    const newData = { ...data };
    newData[book.id].count += 1;
    setData(newData);
    setPrice(price + Number(book.price));
  };

  const handleMinusClick = (book) => {
    if (data[book.id].count > 0) {
      const newData = { ...data };
      newData[book.id].count -= 1;
      setData(newData);
      setPrice(price - Number(book.price));
    }
  };

  const tableData = Object.values(data).map((book) => {
    return (
      <tr key={book.id}>
        <td className="pt-[20px] pb-[20px]">
          <div className="flex gap-[20px]">
            <div className="book-image">
              <img src={book.image} alt="book" />
            </div>
            <div className="flex flex-col justify-center gap-2">
              <h3 className="book-title">{book.title}</h3>
              <p>{book.author}</p>
              <p>{book.price}₽</p>
            </div>
          </div>
        </td>
        <td>
          <div className="count">
            <button
              onClick={() => handleMinusClick(book)}
              className="cursor-pointer text-orange-600"
            >
              -
            </button>
            <span>{book.count}</span>
            <button
              onClick={() => handlePlusClick(book)}
              className="cursor-pointer text-orange-600"
            >
              +
            </button>
          </div>
        </td>
        <td>
          <span className="price">{book.price * book.count}₽</span>
        </td>
      </tr>
    );
  });

  const EmptyBasket = () => {
    return (
      <div className="empty-basket mb-16">
        <img src={emptyBasketImg} alt="emptyBasketImg"></img>
        <h2>Корзина пуста</h2>
        <p>
          Если вы наполняли корзину при прошлом визите, авторизуйтесь, чтобы
          увидеть выбранные товары
        </p>
        <button className="go-to-main">
          <NavLink to="/">Вернуться на главную</NavLink>
        </button>
      </div>
    );
  };

  return (
    <>
      <Header />
      <main>
        <section className="basket">
          <h1 className="mt-16">Корзина</h1>
          {books.length === 0 ? (
            <EmptyBasket />
          ) : (
            <>
              <table className="basket-table">
                <thead>
                  <tr>
                    <th>Товар</th>
                    <th>Количество</th>
                    <th>Цена</th>
                  </tr>
                </thead>
                <tbody>{tableData}</tbody>
              </table>
              <div className="flex justify-between max-w-[1060px] payment">
                <div className="tax-text">
                  Налоги и стоимость доставки рассчитываются при оформлении
                  заказа
                </div>
                <div className="flex flex-col gap-8">
                  <p>
                    Итого:
                    <span>{Number(price)}₽</span>
                  </p>
                  <button>Оплатить</button>
                </div>
              </div>
            </>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Basket;
