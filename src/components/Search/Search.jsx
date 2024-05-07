import "./Search.scss";

const Search = () => {
  return (
    <div className="search-box relative">
      <input className="p-5" placeholder="Поиск" type="text" />
      <svg
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.9125 17.7296C14.5262 17.7296 18.2664 13.9845 18.2664 9.3648C18.2664 4.74505 14.5262 1 9.9125 1C5.29877 1 1.55859 4.74505 1.55859 9.3648C1.55859 13.9845 5.29877 17.7296 9.9125 17.7296Z"
          stroke="#9D9D9D"
        />
        <path d="M15.8789 15.3398L23.0394 22.5097" stroke="#9D9D9D" />
      </svg>
    </div>
  );
};

export default Search;
