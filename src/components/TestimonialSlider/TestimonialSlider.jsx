import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./TestimonialSlider.css";

// import required modules
import { Pagination, Navigation } from "swiper";

// import data from "../../utils/";
import { TestimonialSliderSettings } from "./TestimonialSliderSettings";

const TestimonialSlider = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sampad Swain",
      username: "@sampad swain",
      avatar: "./Ellipse-22.png", // Replace with your image path
      rating: 5,
      text: "first stock market investment today. in case you're a stock market noob like me, highly recommend",
    },
    {
      id: 2,
      name: "sSampad Swain",
      username: "@sampad swain",
      avatar: "./Ellipse-22.png", // Replace with your image path
      rating: 4,
      text: "first stock market investment today. in case you're a stock market noob like me, highly recommend",
    },
    {
      id: 3,
      name: "3 Sampad Swain",
      username: "@sampad swain",
      avatar: "./Ellipse-22.png", // Replace with your image path
      rating: 3,
      text: "first stock market investment today. in case you're a stock market noob like me, highly recommend",
    },
    // Add more testimonials here...
  ];

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {testimonials.map((testimonial) => (
        <SwiperSlide key={testimonial.id}>
          <div className="testimonial-container">
            <div className="testimonial-container-Testimonials-one">
              T E S T I M O N I A L S
            </div>
            <div className="testimonial-container-see-what-others">
              See what other investors are saying
            </div>
            <img
              className="testimonial-avatar"
              src={testimonial.avatar}
              alt={`${testimonial.name}'s avatar`}
            />
            <h3 className="testimonial-name">
              <span className="testimonial-username">
                <span className="testimonial-username-orange-text">
                  {testimonial.name}
                </span>
                <span className="testimonial-username-after-orange-text">
                  / {testimonial.username}
                </span>
              </span>
            </h3>
            <div className="testimonial-rating">
              {"★ ".repeat(testimonial.rating)}
            </div>
            <p className="testimonial-text">{testimonial.text}</p>
          </div>
        </SwiperSlide>
      ))}
      {/* Custom navigation buttons */}
      {/* <div className="swiper-button-next">→</div>
      <div className="swiper-button-prev">←</div> */}
    </Swiper>
  );
};

export default TestimonialSlider;
