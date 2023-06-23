import React, { useState } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-a-vertical-carousel-component-in-react
 */

export const VerticalCarousel = ({ slides, leadingText }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Used to determine which items appear above the active item
  const halfwayIndex = Math.ceil(slides.length / 2);

  // Usd to determine the height/spacing of each item
  const itemHeight = 90;

  // Used to determine at what point an item is moved from the top to the bottom
  const shuffleThreshold = halfwayIndex * itemHeight;

  // Used to determine which items should be visible. this prevents the "ghosting" animation
  const visibleStyleThreshold = shuffleThreshold / 2;

  const determinePlacement = (itemIndex) => {
    // If these match, the item is active
    if (activeIndex === itemIndex) return 0;

    if (itemIndex >= halfwayIndex) {
      if (activeIndex > itemIndex - halfwayIndex) {
        return (itemIndex - activeIndex) * itemHeight;
      } else {
        return -(slides.length + activeIndex - itemIndex) * itemHeight;
      }
    }

    if (itemIndex > activeIndex) {
      return (itemIndex - activeIndex) * itemHeight;
    }

    if (itemIndex < activeIndex) {
      if ((activeIndex - itemIndex) * itemHeight >= shuffleThreshold) {
        return (slides.length - (activeIndex - itemIndex)) * itemHeight;
      }
      return -(activeIndex - itemIndex) * itemHeight;
    }
  };

  const handleClick = (direction) => {
    setActiveIndex((prevIndex) => {
      if (direction === "next") {
        if (prevIndex + 1 > slides.length - 1) {
          return 0;
        }
        return prevIndex + 1;
      }

      if (prevIndex - 1 < 0) {
        return slides.length - 1;
      }

      return prevIndex - 1;
    });
  };

  return (
    <div className="container">
      <section className="outer-container">
        <div className="carousel-wrapper">
          <button
            type="button"
            className="carousel-button prev"
            onClick={() => handleClick("prev")}
          >
            <SlArrowUp />
          </button>

          <div className="carousel">
            {/* <div className="leading-text">
              <p>{leadingText}</p>
            </div> */}
            <div className="slides">
              <div className="carousel-inner">
                <ul>
                  {slides.map((item, i) => (
                    <li
                      key={item.id}
                      onClick={() => setActiveIndex(i)}
                      className={cn("carousel-item", {
                        active: activeIndex === i,
                        visible:
                          Math.abs(determinePlacement(i)) <=
                          visibleStyleThreshold,
                      })}
                      style={{
                        transform: `translateY(${determinePlacement(i)}px)`,
                      }}
                    >
                      <a href="#">
                        <figure className="image is-64x64" >
                          <img
                            src={item.smallImage.src}
                            alt={item.smallImage.alt}
                          />
                        </figure>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="carousel-button next"
            onClick={() => handleClick("next")}
          >
            <SlArrowDown />
          </button>
        </div>
        <div className="content">
          <figure className="image">
            <img
              src={slides[activeIndex].content.image}
              alt={slides[activeIndex].content.introline}
            />
          </figure>
        </div>
      </section>
    </div>
  );
};

VerticalCarousel.propTypes = {
  slides: PropTypes.array.isRequired,
  leadingText: PropTypes.string.isRequired,
};

export default VerticalCarousel;
