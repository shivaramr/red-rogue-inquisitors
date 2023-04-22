import React, { memo } from "react";
// import images from "./carouselUtils";

const CarouselHead = () => {
  // console.log(images);
  

  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="true"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
          className="active"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="5"
          aria-label="Slide 6"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item">
          <img
            src="/assets/carousel/carousel_banner_mufc1.jpg"
            className="d-block w-100"            
            alt="..."
            loading="lazy"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/assets/carousel/carousel_banner_mufc2.jpg"
            className="d-block w-100"            
            alt="..."
            loading="lazy"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/assets/carousel/carousel_banner_mufc3.jpg"
            className="d-block w-100"            
            alt="..."
            loading="lazy"
          />
        </div>
        <div className="carousel-item active">
          <img
            src="/assets/carousel/carousel_banner_mufc4.jpg"
            className="d-block w-100"            
            alt="..."
            loading="lazy"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/assets/carousel/carousel_banner_mufc5.jpg"
            className="d-block w-100"            
            alt="..."
            loading="lazy"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/assets/carousel/carousel_banner_mufc6.jpg"
            className="d-block w-100"            
            alt="..."
            loading="lazy"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default memo(CarouselHead);
