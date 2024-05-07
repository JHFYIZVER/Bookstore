import { useState } from "react";
import "./Reviews.scss";

const Reviews = () => {
  const [isLiked, setIsLiked] = useState(0);
  const [isDisliked, setIsDisliked] = useState(0);

  const setLiked = () => {
    if (isLiked === 0) {
      setIsLiked(isLiked + 1);
    } else {
      setIsLiked(isLiked - 1);
    }
  };

  const setDisliked = () => {
    if (isDisliked === 0) {
      setIsDisliked(isDisliked + 1);
    } else {
      setIsDisliked(isDisliked - 1);
    }
  };

  return (
    <div className="rewiews-item flex flex-col gap-10">
      <div className="flex justify-between items-center">
        <h2 className="flex gap-3 items-center">
          Мадина
          <svg
            width="102"
            height="18"
            viewBox="0 0 102 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.2475 1.20196C8.47803 0.50659 8.59325 0.158914 8.76373 0.062552C8.91121 -0.0208507 9.08877 -0.0208507 9.23635 0.062552C9.40674 0.158914 9.52195 0.50659 9.75248 1.20196L11.2764 5.79908C11.342 5.99699 11.3748 6.09594 11.4339 6.16963C11.4861 6.23473 11.5527 6.28547 11.6279 6.31742C11.713 6.3536 11.8128 6.35573 12.0126 6.36L16.6529 6.45916C17.3549 6.47416 17.7058 6.48167 17.8459 6.62186C17.9671 6.74318 18.022 6.92032 17.9919 7.09319C17.9573 7.29296 17.6775 7.51528 17.1181 7.96012L13.4195 10.9004C13.2603 11.027 13.1807 11.0903 13.1321 11.172C13.0892 11.2442 13.0638 11.3263 13.058 11.4111C13.0515 11.5072 13.0804 11.6074 13.1383 11.808L14.4823 16.4664C14.6856 17.1711 14.7873 17.5234 14.7034 17.7063C14.6308 17.8648 14.4871 17.9742 14.321 17.9977C14.1291 18.0247 13.841 17.8145 13.2647 17.394L9.45503 14.6142C9.29102 14.4945 9.20907 14.4347 9.11994 14.4114C9.04117 14.3909 8.95881 14.3909 8.88015 14.4114C8.79102 14.4347 8.70896 14.4945 8.54495 14.6142L4.73529 17.394C4.15903 17.8145 3.8709 18.0247 3.679 17.9977C3.51293 17.9742 3.36923 17.8648 3.29665 17.7063C3.21278 17.5234 3.31443 17.1711 3.51773 16.4664L4.86174 11.808C4.9196 11.6074 4.94852 11.5072 4.94201 11.4111C4.93626 11.3263 4.91082 11.2442 4.86791 11.172C4.81935 11.0903 4.73973 11.027 4.58051 10.9004L0.881988 7.96012C0.322536 7.51528 0.0428099 7.29296 0.00808565 7.09319C-0.0219782 6.92032 0.0329116 6.74318 0.154133 6.62186C0.294185 6.48167 0.645142 6.47417 1.34705 6.45916L5.98738 6.36C6.18715 6.35573 6.28704 6.3536 6.37214 6.31742C6.44731 6.28547 6.51392 6.23473 6.56613 6.16963C6.62524 6.09594 6.65804 5.99699 6.72365 5.79908L8.2475 1.20196Z"
              fill="#D37423"
            />
            <path
              d="M29.2475 1.20196C29.478 0.50659 29.5932 0.158914 29.7637 0.062552C29.9112 -0.0208507 30.0888 -0.0208507 30.2364 0.062552C30.4067 0.158914 30.522 0.50659 30.7525 1.20196L32.2764 5.79908C32.342 5.99699 32.3748 6.09594 32.4339 6.16963C32.4861 6.23473 32.5527 6.28547 32.6279 6.31742C32.713 6.3536 32.8128 6.35573 33.0126 6.36L37.6529 6.45916C38.3549 6.47416 38.7058 6.48167 38.8459 6.62186C38.9671 6.74318 39.022 6.92032 38.9919 7.09319C38.9573 7.29296 38.6775 7.51528 38.1181 7.96012L34.4195 10.9004C34.2603 11.027 34.1807 11.0903 34.1321 11.172C34.0892 11.2442 34.0638 11.3263 34.058 11.4111C34.0515 11.5072 34.0804 11.6074 34.1383 11.808L35.4823 16.4664C35.6856 17.1711 35.7873 17.5234 35.7034 17.7063C35.6308 17.8648 35.4871 17.9742 35.321 17.9977C35.1291 18.0247 34.841 17.8145 34.2647 17.394L30.455 14.6142C30.291 14.4945 30.2091 14.4347 30.1199 14.4114C30.0412 14.3909 29.9588 14.3909 29.8801 14.4114C29.791 14.4347 29.709 14.4945 29.545 14.6142L25.7353 17.394C25.159 17.8145 24.8709 18.0247 24.679 17.9977C24.5129 17.9742 24.3692 17.8648 24.2966 17.7063C24.2128 17.5234 24.3144 17.1711 24.5177 16.4664L25.8617 11.808C25.9196 11.6074 25.9485 11.5072 25.942 11.4111C25.9363 11.3263 25.9108 11.2442 25.8679 11.172C25.8193 11.0903 25.7397 11.027 25.5805 10.9004L21.882 7.96012C21.3225 7.51528 21.0428 7.29296 21.0081 7.09319C20.978 6.92032 21.0329 6.74318 21.1541 6.62186C21.2942 6.48167 21.6451 6.47417 22.347 6.45916L26.9874 6.36C27.1871 6.35573 27.287 6.3536 27.3721 6.31742C27.4473 6.28547 27.5139 6.23473 27.5661 6.16963C27.6252 6.09594 27.658 5.99699 27.7236 5.79908L29.2475 1.20196Z"
              fill="#D37423"
            />
            <path
              d="M50.2475 1.20196C50.478 0.50659 50.5932 0.158914 50.7637 0.062552C50.9112 -0.0208507 51.0888 -0.0208507 51.2364 0.062552C51.4067 0.158914 51.522 0.50659 51.7525 1.20196L53.2764 5.79908C53.342 5.99699 53.3748 6.09594 53.4339 6.16963C53.4861 6.23473 53.5527 6.28547 53.6279 6.31742C53.713 6.3536 53.8128 6.35573 54.0126 6.36L58.6529 6.45916C59.3549 6.47416 59.7058 6.48167 59.8459 6.62186C59.9671 6.74318 60.022 6.92032 59.9919 7.09319C59.9573 7.29296 59.6775 7.51528 59.1181 7.96012L55.4195 10.9004C55.2603 11.027 55.1807 11.0903 55.1321 11.172C55.0892 11.2442 55.0638 11.3263 55.058 11.4111C55.0515 11.5072 55.0804 11.6074 55.1383 11.808L56.4823 16.4664C56.6856 17.1711 56.7873 17.5234 56.7034 17.7063C56.6308 17.8648 56.4871 17.9742 56.321 17.9977C56.1291 18.0247 55.841 17.8145 55.2647 17.394L51.455 14.6142C51.291 14.4945 51.2091 14.4347 51.1199 14.4114C51.0412 14.3909 50.9588 14.3909 50.8801 14.4114C50.791 14.4347 50.709 14.4945 50.545 14.6142L46.7353 17.394C46.159 17.8145 45.8709 18.0247 45.679 17.9977C45.5129 17.9742 45.3692 17.8648 45.2966 17.7063C45.2128 17.5234 45.3144 17.1711 45.5177 16.4664L46.8617 11.808C46.9196 11.6074 46.9485 11.5072 46.942 11.4111C46.9363 11.3263 46.9108 11.2442 46.8679 11.172C46.8193 11.0903 46.7397 11.027 46.5805 10.9004L42.882 7.96012C42.3225 7.51528 42.0428 7.29296 42.0081 7.09319C41.978 6.92032 42.0329 6.74318 42.1541 6.62186C42.2942 6.48167 42.6451 6.47417 43.347 6.45916L47.9874 6.36C48.1871 6.35573 48.287 6.3536 48.3721 6.31742C48.4473 6.28547 48.5139 6.23473 48.5661 6.16963C48.6252 6.09594 48.658 5.99699 48.7236 5.79908L50.2475 1.20196Z"
              fill="#D37423"
            />
            <path
              d="M71.2475 1.20196C71.478 0.50659 71.5932 0.158914 71.7637 0.062552C71.9112 -0.0208507 72.0888 -0.0208507 72.2364 0.062552C72.4067 0.158914 72.522 0.50659 72.7525 1.20196L74.2764 5.79908C74.342 5.99699 74.3748 6.09594 74.4339 6.16963C74.4861 6.23473 74.5527 6.28547 74.6279 6.31742C74.713 6.3536 74.8128 6.35573 75.0126 6.36L79.6529 6.45916C80.3549 6.47416 80.7058 6.48167 80.8459 6.62186C80.9671 6.74318 81.022 6.92032 80.9919 7.09319C80.9573 7.29296 80.6775 7.51528 80.1181 7.96012L76.4195 10.9004C76.2603 11.027 76.1807 11.0903 76.1321 11.172C76.0892 11.2442 76.0638 11.3263 76.058 11.4111C76.0515 11.5072 76.0804 11.6074 76.1383 11.808L77.4823 16.4664C77.6856 17.1711 77.7873 17.5234 77.7034 17.7063C77.6308 17.8648 77.4871 17.9742 77.321 17.9977C77.1291 18.0247 76.841 17.8145 76.2647 17.394L72.455 14.6142C72.291 14.4945 72.2091 14.4347 72.1199 14.4114C72.0412 14.3909 71.9588 14.3909 71.8801 14.4114C71.791 14.4347 71.709 14.4945 71.545 14.6142L67.7353 17.394C67.159 17.8145 66.8709 18.0247 66.679 17.9977C66.5129 17.9742 66.3692 17.8648 66.2966 17.7063C66.2128 17.5234 66.3144 17.1711 66.5177 16.4664L67.8617 11.808C67.9196 11.6074 67.9485 11.5072 67.942 11.4111C67.9363 11.3263 67.9108 11.2442 67.8679 11.172C67.8193 11.0903 67.7397 11.027 67.5805 10.9004L63.882 7.96012C63.3225 7.51528 63.0428 7.29296 63.0081 7.09319C62.978 6.92032 63.0329 6.74318 63.1541 6.62186C63.2942 6.48167 63.6451 6.47417 64.347 6.45916L68.9874 6.36C69.1871 6.35573 69.287 6.3536 69.3721 6.31742C69.4473 6.28547 69.5139 6.23473 69.5661 6.16963C69.6252 6.09594 69.658 5.99699 69.7236 5.79908L71.2475 1.20196Z"
              fill="#D37423"
            />
            <path
              d="M92.2475 1.20196C92.478 0.50659 92.5932 0.158914 92.7637 0.062552C92.9112 -0.0208507 93.0888 -0.0208507 93.2364 0.062552C93.4067 0.158914 93.522 0.50659 93.7525 1.20196L95.2764 5.79908C95.342 5.99699 95.3748 6.09594 95.4339 6.16963C95.4861 6.23473 95.5527 6.28547 95.6279 6.31742C95.713 6.3536 95.8128 6.35573 96.0126 6.36L100.653 6.45916C101.355 6.47416 101.706 6.48167 101.846 6.62186C101.967 6.74318 102.022 6.92032 101.992 7.09319C101.957 7.29296 101.678 7.51528 101.118 7.96012L97.4195 10.9004C97.2603 11.027 97.1807 11.0903 97.1321 11.172C97.0892 11.2442 97.0638 11.3263 97.058 11.4111C97.0515 11.5072 97.0804 11.6074 97.1383 11.808L98.4823 16.4664C98.6856 17.1711 98.7873 17.5234 98.7034 17.7063C98.6308 17.8648 98.4871 17.9742 98.321 17.9977C98.1291 18.0247 97.841 17.8145 97.2647 17.394L93.455 14.6142C93.291 14.4945 93.2091 14.4347 93.1199 14.4114C93.0412 14.3909 92.9588 14.3909 92.8801 14.4114C92.791 14.4347 92.709 14.4945 92.545 14.6142L88.7353 17.394C88.159 17.8145 87.8709 18.0247 87.679 17.9977C87.5129 17.9742 87.3692 17.8648 87.2966 17.7063C87.2128 17.5234 87.3144 17.1711 87.5177 16.4664L88.8617 11.808C88.9196 11.6074 88.9485 11.5072 88.942 11.4111C88.9363 11.3263 88.9108 11.2442 88.8679 11.172C88.8193 11.0903 88.7397 11.027 88.5805 10.9004L84.882 7.96012C84.3225 7.51528 84.0428 7.29296 84.0081 7.09319C83.978 6.92032 84.0329 6.74318 84.1541 6.62186C84.2942 6.48167 84.6451 6.47417 85.347 6.45916L89.9874 6.36C90.1871 6.35573 90.287 6.3536 90.3721 6.31742C90.4473 6.28547 90.5139 6.23473 90.5661 6.16963C90.6252 6.09594 90.658 5.99699 90.7236 5.79908L92.2475 1.20196Z"
              fill="#D37423"
            />
          </svg>
        </h2>
        <data>10.06.2024</data>
      </div>
      <div className="rewiews-discription">
        <p>
          Начинается книга с того, что главная героиня, Сияна, находится в
          камере не понятно где и как тут очутилась. Её лучшая подруга и
          наставник мертвы, да и ею хотят воспользоваться, чтобы вылечить
          принцессу. Но она не так-то проста, как оказывается. Наша Сияна
          владеет как темной, так и светлой магией и если постараться, то может
          переключаться с одной на другую. И благодаря своему таланту, ей
          удаётся сбежать и избежать той же участи, что постигла подругу и
          наставника. А на этом приключения её не заканчиваются, так как в этот
          момент её замечает один могущественный маг, от которого и приходится
          спасаться и прятаться, чтобы накопить сил и умений для следующей
          встрече.
        </p>
      </div>
      <div className="mark flex items-center gap-8">
        <button onClick={() => setLiked()} className="flex items-center gap-3">
          <svg
            width="24"
            height="23"
            viewBox="0 0 24 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.82193 6.6633L7.77191 6.61206C8.97112 6.70083 9.99301 5.75181 9.99301 4.54931V2.42484C9.99301 1.08564 11.0786 0 12.4178 0H12.7693C14.3027 0 15.5457 1.24303 15.5457 2.77638V6.6633H20.5888C22.6162 6.6633 24.1736 8.459 23.8868 10.4661L22.7539 18.397C22.4412 20.5855 20.5669 22.211 18.3563 22.211H5.55078V6.6633H7.82193Z"
              fill="url(#paint0_radial_93_143)"
            />
            <path
              d="M0 8.88421V19.9897C0 21.2164 0.994424 22.2108 2.2211 22.2108H7.77383V6.66309H2.2211C0.994424 6.66309 0 7.65749 0 8.88421Z"
              fill="url(#paint1_linear_93_143)"
            />
            <path
              d="M3.88653 19.9898C4.80654 19.9898 5.55235 19.244 5.55235 18.324C5.55235 17.404 4.80654 16.6582 3.88653 16.6582C2.96652 16.6582 2.2207 17.404 2.2207 18.324C2.2207 19.244 2.96652 19.9898 3.88653 19.9898Z"
              fill="white"
            />
            <defs>
              <radialGradient
                id="paint0_radial_93_143"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(10.4272 7.14245) rotate(56.8531) scale(16.2483 13.4386)"
              >
                <stop stopColor="#F3B179" />
                <stop offset="0.327145" stopColor="#FFCCA0" />
                <stop offset="1" stopColor="#FFD2AC" />
              </radialGradient>
              <linearGradient
                id="paint1_linear_93_143"
                x1="3.88692"
                y1="6.66309"
                x2="3.88692"
                y2="22.2108"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9D65F5" />
                <stop offset="1" stopColor="#6025CE" />
              </linearGradient>
            </defs>
          </svg>
          {isLiked}
        </button>
        <button
          onClick={() => setDisliked()}
          className="flex items-center gap-3"
        >
          <svg
            width="24"
            height="23"
            viewBox="0 0 24 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.82193 15.5486L7.77191 15.5999C8.97112 15.5111 9.99301 16.4601 9.99301 17.6626L9.99301 19.7871C9.99301 21.1263 11.0786 22.2119 12.4178 22.2119L12.7693 22.2119C14.3027 22.2119 15.5457 20.9689 15.5457 19.4355L15.5457 15.5486L20.5888 15.5486C22.6162 15.5486 24.1736 13.7529 23.8868 11.7458L22.7539 3.81488C22.4412 1.62646 20.5669 0.000897048 18.3563 0.000897242L5.55078 0.000898361L5.55078 15.5486L7.82193 15.5486Z"
              fill="url(#paint0_radial_93_144)"
            />
            <path
              d="M-1.94177e-07 13.3267L-1.16505e-06 2.22126C-1.27229e-06 0.994533 0.994422 0.000162038 2.2211 0.00016193L7.77383 0.000161445L7.77383 15.5479L2.2211 15.5479C0.994424 15.5479 -8.69333e-08 14.5535 -1.94177e-07 13.3267Z"
              fill="url(#paint1_linear_93_144)"
            />
            <path
              d="M3.88653 2.22109C4.80654 2.22109 5.55235 2.96689 5.55235 3.88695C5.55235 4.80694 4.80654 5.55273 3.88653 5.55273C2.96652 5.55273 2.2207 4.80694 2.2207 3.88695C2.2207 2.96689 2.96652 2.22109 3.88653 2.22109Z"
              fill="white"
            />
            <defs>
              <radialGradient
                id="paint0_radial_93_144"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(10.4272 15.0695) rotate(-56.8531) scale(16.2483 13.4386)"
              >
                <stop stopColor="#F3B179" />
                <stop offset="0.327145" stopColor="#FFCCA0" />
                <stop offset="1" stopColor="#FFD2AC" />
              </radialGradient>
              <linearGradient
                id="paint1_linear_93_144"
                x1="3.88692"
                y1="15.5479"
                x2="3.88692"
                y2="0.000161785"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9D65F5" />
                <stop offset="1" stopColor="#6025CE" />
              </linearGradient>
            </defs>
          </svg>
          {isDisliked}
        </button>
      </div>
    </div>
  );
};

export default Reviews;