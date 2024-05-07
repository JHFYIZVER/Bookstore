import CartBookItem from "../Cart-book-item/Cart-book-item";
import axios from "axios";
import { useState, useEffect } from "react";

const CartBook = ({ id }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/books")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const book = products.find((element) => element.id == id);
  return <CartBookItem {...book} />;
};

export default CartBook;
