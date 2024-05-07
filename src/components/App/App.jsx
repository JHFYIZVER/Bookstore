import MainPage from "../../pages/MainPage/MainPage";
import Registration from "../../pages/Registration/Registration";
import Authorization from "../../pages/Authorization/Authorization";
import Сategories from "../../pages/Сategories/Сategories";
import NotFound from "../../pages/Not-found/Not-found";
import Books from "../../pages/Books/Books";
import Admin from "../../pages/Admin/Admin";
import Basket from "../../pages/Basket/Basket";
import BooksCatalog from "../../pages/Books-catalog/Books-catalog";

import { Routes, Route } from "react-router-dom";
import { useState, createContext } from "react";

import "./App.scss";

export const BookContext = createContext({});
export const UserContext = createContext({});

function App() {
  const [books, setBooks] = useState([]);
  const [user, setUser] = useState({});
  console.log(user);

  return (
    <BookContext.Provider value={{ books, setBooks }}>
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/categories" element={<Сategories />} />
          <Route path="/books" element={<BooksCatalog />} />
          <Route path="/books/:id" element={<Books />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/authorization" element={<Authorization />} />
        </Routes>
      </UserContext.Provider>
    </BookContext.Provider>
  );
}

export default App;
