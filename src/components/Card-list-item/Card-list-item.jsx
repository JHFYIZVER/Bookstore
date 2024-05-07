import "./Card-list-item.scss";
import { NavLink } from "react-router-dom";

const CardListItem = ({id, title, author, price, image }) => {
  return (
    <NavLink
      className="nav-to"
      to={`/books/${id}`}
    >
      <div className="card-list-item flex flex-col gap-4 justify-between">
        <div className="photo-item">
          <div className="background">
            <img src={image} alt="photo" />
          </div>
        </div>
        <h2 className="name-item font-bold">{title}</h2>
        <div className="info-item flex justify-between">
          <div className="cost-item flex flex-col gap-1">
            <h3>{author}</h3>
            <h4> {`${price}₽`}</h4>
          </div>
          <button className="button-item">Купить</button>
        </div>
      </div>
    </NavLink>
  );
};

export default CardListItem;
