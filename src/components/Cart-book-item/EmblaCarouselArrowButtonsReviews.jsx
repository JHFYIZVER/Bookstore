import React, { useCallback, useEffect, useState } from "react";

export const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

export const PrevButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="embla__button embla__button--prev"
      type="button"
      {...restProps}
    >
      <svg
        width="16"
        height="11"
        viewBox="0 0 16 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.43505 10.0589C4.9976 10.4627 4.31565 10.4354 3.91185 9.99794L0.429331 6.22525C0.0481805 5.81234 0.048177 5.1759 0.429324 4.76298L3.91184 0.990215C4.31564 0.55277 4.99759 0.525488 5.43504 0.929279C5.87248 1.33307 5.89976 2.01503 5.49597 2.45247L3.68333 4.41619L14.1565 4.41619C14.7518 4.41619 15.2344 4.89879 15.2344 5.49411C15.2344 6.08943 14.7518 6.57203 14.1565 6.57203L3.68337 6.57204L5.49597 8.53566C5.89976 8.9731 5.87249 9.65506 5.43505 10.0589Z"
          fill="#23262F"
        />
      </svg>

      {children}
    </button>
  );
};

export const NextButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="embla__button embla__button--next"
      type="button"
      {...restProps}
    >
      <svg
        width="17"
        height="10"
        viewBox="0 0 17 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.7603 0.390365C11.1977 -0.0134313 11.8797 0.013843 12.2835 0.451284L15.766 4.22397C16.1471 4.63688 16.1471 5.27332 15.766 5.68623L12.2835 9.459C11.8797 9.89645 11.1977 9.92373 10.7603 9.51994C10.3228 9.11615 10.2955 8.43419 10.6993 7.99675L12.512 6.03303L2.03886 6.03303C1.44354 6.03303 0.960937 5.55043 0.960937 4.95511C0.960937 4.35979 1.44354 3.87718 2.03886 3.87718L12.5119 3.87718L10.6993 1.91356C10.2956 1.47612 10.3228 0.794161 10.7603 0.390365Z"
          fill="#23262F"
        />
      </svg>

      {children}
    </button>
  );
};
