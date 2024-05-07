import CategoriesListItem from "../Categories-list-item/Categories-list-item";
import categoriesItem from "../../categories-item.json";

const CategoriesList = () => {
  const items = categoriesItem.map((element) => {
    const { id, ...data } = element;
    return <CategoriesListItem key={id} {...data} />;
  });
  return <>{items}</>;
};

export default CategoriesList;
