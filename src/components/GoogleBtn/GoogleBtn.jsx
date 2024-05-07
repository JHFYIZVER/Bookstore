import './GoogleBtn.scss';

const GoogleBtn = () => {
  return (
    <button className="google flex items-center justify-center gap-5">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.1716 8.36824H17.5003V8.33366H10.0003V11.667H14.7099C14.0228 13.6074 12.1766 15.0003 10.0003 15.0003C7.23908 15.0003 5.00033 12.7616 5.00033 10.0003C5.00033 7.23908 7.23908 5.00033 10.0003 5.00033C11.2749 5.00033 12.4345 5.48116 13.3174 6.26658L15.6745 3.90949C14.1862 2.52241 12.1953 1.66699 10.0003 1.66699C5.39824 1.66699 1.66699 5.39824 1.66699 10.0003C1.66699 14.6024 5.39824 18.3337 10.0003 18.3337C14.6024 18.3337 18.3337 14.6024 18.3337 10.0003C18.3337 9.44158 18.2762 8.89616 18.1716 8.36824Z"
          fill="#FFC107"
        />
        <path
          d="M2.62793 6.12158L5.36585 8.12949C6.10668 6.29533 7.90085 5.00033 10.0004 5.00033C11.275 5.00033 12.4346 5.48116 13.3175 6.26658L15.6746 3.90949C14.1863 2.52241 12.1954 1.66699 10.0004 1.66699C6.7996 1.66699 4.02376 3.47408 2.62793 6.12158Z"
          fill="#FF3D00"
        />
        <path
          d="M9.9998 18.3336C12.1523 18.3336 14.1081 17.5099 15.5869 16.1703L13.0077 13.9878C12.1429 14.6454 11.0862 15.0011 9.9998 15.0003C7.8323 15.0003 5.99189 13.6182 5.29855 11.6895L2.58105 13.7832C3.96022 16.482 6.76105 18.3336 9.9998 18.3336Z"
          fill="#4CAF50"
        />
        <path
          d="M18.1713 8.36759H17.5V8.33301H10V11.6663H14.7096C14.3809 12.5898 13.7889 13.3968 13.0067 13.9876L13.0079 13.9868L15.5871 16.1693C15.4046 16.3351 18.3333 14.1663 18.3333 9.99967C18.3333 9.44092 18.2758 8.89551 18.1713 8.36759Z"
          fill="#1976D2"
        />
      </svg>
      <span>Продолжить с Google</span>
    </button>
  );
};

export default GoogleBtn;
