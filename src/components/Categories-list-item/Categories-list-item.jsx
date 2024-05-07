import "./Categories-list-item.scss";
import { NavLink } from "react-router-dom";

const CategoriesListItem = ({ title, image, navTo }) => {
  return (
    <div className="nav-to">
      <div className="card-list-item flex flex-col gap-4 justify-between">
        <div className="photo-item">
          <div className="background">
            <img src={image} alt="photo" />
          </div>
        </div>
        <h2 className="name-item font-bold text-center">{title}</h2>
        <button className="button-more">
          <NavLink to={`/${navTo}`}>Подробнее</NavLink>
        </button>
      </div>
    </div>
  );
};

export default CategoriesListItem;
