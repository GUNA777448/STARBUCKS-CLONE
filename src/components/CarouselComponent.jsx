// src/components/CarouselComponent.jsx

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComponent = () => {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000}
      >
        <div>
          <img
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
            alt="Slide 1"
            className="h-[400px] w-full object-cover"
          />
          <p className="legend text-[10px] h-10">Sip into Happiness ☕</p>
        </div>
        <div>
          <img
            src="https://media.istockphoto.com/id/1467199060/photo/cup-of-coffee-with-smoke-and-coffee-beans-on-old-wooden-background.jpg?b=1&s=612x612&w=0&k=20&c=pYVOIV8N70JYqIbnGSJdtGftKYleSMkWg4r_bnVef_8="
            alt="Slide 2"
            className="h-[400px] w-full object-cover"
          />
          <p className="legend text-lg">Cool for the Summer ❄️</p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
            alt="Slide 3"
            className="h-[400px] w-full object-cover"
          />
          <p className="legend text-lg">Start Your Morning Right 🌅</p>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
