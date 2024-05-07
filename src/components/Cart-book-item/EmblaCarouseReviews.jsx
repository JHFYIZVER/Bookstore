import React from "react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtonsReviews";
import useEmblaCarousel from "embla-carousel-react";
import Reviews from "../Reviews/Reviews";

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
    <section className="embla-Reviews">
      <div className="embla__viewport-Reviews" ref={emblaRef}>
        <div className="embla__container-Reviews">
          {slides.map((index) => (
            <div className="embla__slide-Reviews" key={index}>
              <Reviews />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

      </div>
    </section>
  );
};

export default EmblaCarousel;
