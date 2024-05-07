import React from "react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import CardList from "../../components/Card-list/Card-list";

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <CardList key={index} />
          ))}
        </div>
      </div>

      <div className="embla__controls flex justify-center">
        <div className="embla__buttons flex">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <svg
            width="4"
            height="27"
            viewBox="0 0 4 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.921875"
              y="0.558594"
              width="2.15584"
              height="25.8701"
              rx="1.07792"
              fill="#E6E8EC"
            />
          </svg>

          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
