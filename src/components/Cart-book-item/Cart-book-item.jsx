import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useContext, useEffect } from "react";
import EmblaCarousel from "./EmblaCarouseReviews";
import { BookContext } from "../../components/App/App";

import basketDone from "../../../public/img/basket.png";
import "./Cart-book-item.scss";
import "./emblaReviews.css";
const OPTIONS = {};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const CartBookItem = ({
  id,
  title,
  author,
  price,
  mark,
  image,
  description,
  avatarAutor,
  avatarPublishingHouse,
  publishingHouse,
  year,
  pages,
  binding,
  weight,
  size,
  ageLimit,
  genre,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { books, setBooks } = useContext(BookContext);

  const data = {
    id,
    title,
    price,
    image,
    author,
  };
  return (
    <>
      <section className="section-about-book">
        <div className="section-img-book">
          <div className="background-img-book">
            <img src={image} alt="book" />
            <img src={image} alt="book" />
          </div>
        </div>
        <div className="section-info-book flex flex-col items-center justify-between gap-9">
          <div className="name-book gap-3">
            <h1>{title}</h1>
            <h2>{description}</h2>
          </div>
          <div className="autor-book-info flex items-center justify-between w-full">
            <div className="flex items-center gap-5">
              <img src={avatarAutor} alt="avatar" />
              <div>
                <span>Автор</span>
                <h3>{author}</h3>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <img src={avatarPublishingHouse} alt="avatar" />
              <div>
                <span>Издательство</span>
                <h3>{`«${publishingHouse}»`}</h3>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full items-center">
            <div className="flex items-center justify-between w-full">
              <div className="price-book-info">
                <span>Цена</span>
                <h2>{`${price}₽`}</h2>
              </div>
              <div className="mark-book-info">
                <span>Оценка</span>
                <h2 className="text-right flex items-center">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.2475 1.19513C8.47803 0.499754 8.59325 0.152078 8.76373 0.0557161C8.91121 -0.0276866 9.08877 -0.0276866 9.23635 0.0557161C9.40673 0.152078 9.52195 0.499754 9.75248 1.19513L11.2764 5.79224C11.342 5.99015 11.3748 6.0891 11.4339 6.16279C11.4861 6.22789 11.5527 6.27863 11.6279 6.31058C11.713 6.34677 11.8128 6.3489 12.0126 6.35317L16.6529 6.45233C17.3549 6.46732 17.7058 6.47483 17.8459 6.61502C17.9671 6.73635 18.022 6.91348 17.9919 7.08635C17.9573 7.28613 17.6775 7.50844 17.1181 7.95328L13.4195 10.8935C13.2603 11.0202 13.1807 11.0835 13.1321 11.1651C13.0892 11.2374 13.0638 11.3195 13.058 11.4043C13.0515 11.5003 13.0804 11.6006 13.1383 11.8012L14.4823 16.4596C14.6856 17.1642 14.7873 17.5166 14.7034 17.6995C14.6308 17.8579 14.4871 17.9674 14.321 17.9908C14.1291 18.0179 13.841 17.8077 13.2647 17.3872L9.45503 14.6073C9.29102 14.4877 9.20906 14.4278 9.11994 14.4045C9.04117 14.3841 8.95881 14.3841 8.88014 14.4045C8.79102 14.4278 8.70896 14.4877 8.54495 14.6073L4.73529 17.3872C4.15903 17.8077 3.8709 18.0179 3.679 17.9908C3.51293 17.9674 3.36923 17.8579 3.29665 17.6995C3.21278 17.5166 3.31443 17.1642 3.51773 16.4596L4.86174 11.8012C4.91959 11.6006 4.94852 11.5003 4.94201 11.4043C4.93625 11.3195 4.91082 11.2374 4.86791 11.1651C4.81935 11.0835 4.73973 11.0202 4.58051 10.8935L0.881988 7.95328C0.322536 7.50844 0.0428099 7.28613 0.00808565 7.08635C-0.0219782 6.91348 0.0329116 6.73635 0.154133 6.61502C0.294185 6.47483 0.645142 6.46733 1.34705 6.45233L5.98738 6.35317C6.18715 6.3489 6.28704 6.34677 6.37214 6.31058C6.44731 6.27863 6.51391 6.22789 6.56613 6.16279C6.62524 6.0891 6.65804 5.99015 6.72364 5.79224L8.2475 1.19513Z"
                      fill="#D37423"
                    />
                  </svg>
                  {mark}
                </h2>
              </div>
            </div>
            <button
              onClick={() => {
                setBooks((prevBooks) => [...prevBooks, data]);
                setIsOpen(true);
              }}
              className="buy-book-btn flex items-center justify-center gap-4"
            >
              <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.507814 3.10591C0.507814 2.37411 0.792057 1.67229 1.29801 1.15484C1.80397 0.637383 2.49019 0.34668 3.20572 0.34668H16.45C17.1655 0.34668 17.8518 0.637383 18.3577 1.15484C18.8637 1.67229 19.1479 2.37411 19.1479 3.10591V4.36813C20.0792 4.43176 20.952 4.85501 21.5895 5.55213C22.2271 6.24925 22.5817 7.16814 22.5816 8.12268V18.6579C22.5816 19.6558 22.194 20.6128 21.5041 21.3185C20.8141 22.0241 19.8784 22.4205 18.9027 22.4205H4.19071C3.21498 22.4205 2.27922 22.0241 1.58928 21.3185C0.899343 20.6128 0.511738 19.6558 0.511738 18.6579V8.12268H0.507814V3.35674H0.518605C0.511335 3.27334 0.507734 3.18964 0.507814 3.10591ZM17.6763 3.10591C17.6763 2.41359 17.1269 1.85171 16.45 1.85171H3.20572C2.88048 1.85171 2.56856 1.98385 2.33858 2.21906C2.1086 2.45426 1.9794 2.77327 1.9794 3.10591C1.9794 3.43854 2.1086 3.75755 2.33858 3.99275C2.56856 4.22796 2.88048 4.3601 3.20572 4.3601H17.6763V3.10591ZM15.9595 13.3903C15.7643 13.3903 15.5772 13.4696 15.4392 13.6107C15.3012 13.7518 15.2237 13.9432 15.2237 14.1428C15.2237 14.3424 15.3012 14.5338 15.4392 14.6749C15.5772 14.816 15.7643 14.8953 15.9595 14.8953H18.4121C18.6073 14.8953 18.7944 14.816 18.9324 14.6749C19.0704 14.5338 19.1479 14.3424 19.1479 14.1428C19.1479 13.9432 19.0704 13.7518 18.9324 13.6107C18.7944 13.4696 18.6073 13.3903 18.4121 13.3903H15.9595Z"
                  fill="white"
                />
              </svg>
              Купить
            </button>
            <Transition appear show={isOpen} as={Fragment}>
              <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="bg">
                    <Dialog.Panel className="popup">
                      <img src={basketDone} alt="basketDone" />
                      <Dialog.Title className="popup-title">
                        Товар успешно добавлен в коризну!
                      </Dialog.Title>
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                      >
                        <button
                          onClick={() => setIsOpen(false)}
                          className="close-popup"
                        >
                          <svg
                            width="28"
                            height="28"
                            viewBox="0 0 28 28"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M1.41396 0.586042C0.632909 1.36709 0.62633 2.63993 1.39926 3.42901L11.8757 14.1243L1.95812 24.0419C1.17707 24.8229 1.17049 26.0958 1.94342 26.8849C2.71635 27.6739 3.9761 27.6804 4.75715 26.8994L14.6747 16.9818L23.7915 26.2891C24.5645 27.0782 25.8242 27.0847 26.6053 26.3037C27.3863 25.5226 27.3929 24.2498 26.62 23.4607L17.5031 14.1534L27.3846 4.27199C28.1656 3.49094 28.1722 2.21809 27.3993 1.42901C26.6263 0.639931 25.3666 0.633421 24.5855 1.41447L14.7041 11.2959L4.22769 0.600587C3.45476 -0.188494 2.19501 -0.195006 1.41396 0.586042Z"
                              fill="#D37423"
                            />
                          </svg>
                        </button>
                      </Transition.Child>
                    </Dialog.Panel>
                  </div>
                </Transition.Child>
              </Dialog>
            </Transition>
          </div>
        </div>
      </section>
      <section className="reviews-book flex flex-col mt-16 mb-16">
        <h2 className="section-title">Отзывы</h2>
        <div className="reviews-book-container flex items-center justify-between">
          <div className="carousel">
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
          </div>
          <div className="detailed-information flex flex-col">
            <div className="flex items-center justify-between">
              <h2>ID товара</h2> <span>{id}</span>
            </div>
            <div className="flex items-center justify-between">
              <h2>Жанр</h2> <span>{genre}</span>
            </div>
            <div className="flex items-center justify-between">
              <h2>Год издания</h2> <span>{year}</span>
            </div>
            <div className="flex items-center justify-between">
              <h2>Кол-во страниц</h2> <span>{pages}</span>
            </div>
            <div className="flex items-center justify-between">
              <h2>Размер</h2> <span>{size}</span>
            </div>
            <div className="flex items-center justify-between">
              <h2>Тип обложки</h2> <span>{binding}</span>
            </div>
            <div className="flex items-center justify-between">
              <h2>Вес, г</h2> <span>{weight}</span>
            </div>
            <div className="flex items-center justify-between">
              <h2>Возрастные ограничения</h2> <span>{ageLimit}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartBookItem;
