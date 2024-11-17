import { Carousel } from "@/components";

const CarouselText = () => {
  return (
    <Carousel
      prevArrow={({}) => <div hidden></div>}
      nextArrow={({}) => <div hidden></div>}
      autoplay={true}
      loop={true}
      className="font-semibold"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-0 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-black" : "w-4 bg-gray-700"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        consectetur felis in ligula condimentum bibendum. Donec elit tortor,
        vehicula et.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        consectetur felis in ligula condimentum bibendum. Donec elit tortor,
        vehicula et.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        consectetur felis in ligula condimentum bibendum. Donec elit tortor,
        vehicula et.
      </p>
    </Carousel>
  );
};

export default CarouselText;
