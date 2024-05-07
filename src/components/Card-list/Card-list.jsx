import CardListItem from "../Card-list-item/Card-list-item";
import { useState, useEffect } from "react";
import axios from "axios";

const CardList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://db-server-self.vercel.app/books")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const items = products.map((element) => {
    const { id } = element;
    return <CardListItem key={id} {...element} />;
  });
  return <>{items}</>;
};

export default CardList;
