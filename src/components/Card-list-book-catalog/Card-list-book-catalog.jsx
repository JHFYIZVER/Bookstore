import { useState, useEffect } from "react";
import axios from "axios";

import nothingFound from "../../../public/img/nothing.png";
import CardListItem from "../Card-list-item/Card-list-item";

const CardListBookCatalog = ({ genreFilter }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
   axios
     .get("http://localhost:3000/books")
     .then((res) => {
       const filteredProducts = genreFilter && genreFilter !== 'Жанр'
         ? res.data.filter(product => product.genre === genreFilter) 
         : res.data;
       setProducts(filteredProducts);
     })
     .catch((error) => {
       console.error("Error fetching data: ", error);
     });
 }, [genreFilter]);

  if (!products.length)
    return (
      <div className="flex flex-col items-center gap-5">
        <img src={nothingFound} alt="nothingFound" />
        <h2 className="font-bold text-3xl">Ничего не найдено</h2>
      </div>
    );

  const items = products.map((element) => {
    const { id } = element;
    return <CardListItem key={id} {...element} />;
  });

  return <>{items}</>;
};

export default CardListBookCatalog;
