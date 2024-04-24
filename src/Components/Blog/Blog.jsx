import React from "react";
import PoolCleaning from "../../assets/Images/PoolCleaning.jpg";
import rightArrow from "../../assets/Images/rightArrow.png";
import "./Blog.css";
const Blog = () => {
  return (
    <div className="blog-section">
      <img
        className="blog-banner"
        src="https://c15jperap1ms1w6r.public.blob.vercel-storage.com/banner-wque802yh1UwHuYMd0IINt0ZYpWTNh.jpg"
        alt="service banner"
      />

      <div className="heading">
        <h5 className="title">Latest News</h5>
        <p className="para">
          Awesome site. on the top advertising a business online includes
          assembling Having the most keep.
        </p>
      </div>
      <div className=" blog-card">
        <div className="card-content">
          <img src={PoolCleaning} alt="PoolCleaning " />
          <div className="blog-content">
            <h3>
              Rebel Cleaning: Your One-Stop Solution for Hassle-Free Cleaning
              Help in...
            </h3>
            <p>
              Cleaning Help: Are you tired of spending hours scrubbing and
              tidying up your home or office? Do you...
            </p>
            <div className="readMore">
              Read More
              <img src={rightArrow} alt="" />
            </div>
          </div>
        </div>
        <div className="card-content">
          <img src={PoolCleaning} alt="PoolCleaning " />
          <div className="blog-content">
            <h3>
              Rebel Cleaning: Your One-Stop Solution for Hassle-Free Cleaning
              Help in...
            </h3>
            <p>
              Cleaning Help: Are you tired of spending hours scrubbing and
              tidying up your home or office? Do you...
            </p>
            <div className="readMore">
              Read More
              <img src={rightArrow} alt="" />
            </div>
          </div>
        </div>
        <div className="card-content">
          <img src={PoolCleaning} alt="PoolCleaning " />
          <div className="blog-content">
            <h3>
              Rebel Cleaning: Your One-Stop Solution for Hassle-Free Cleaning
              Help in...
            </h3>
            <p>
              Cleaning Help: Are you tired of spending hours scrubbing and
              tidying up your home or office? Do you...
            </p>
            <div className="readMore">
              Read More
              <img src={rightArrow} alt="" />
            </div>
          </div>
        </div>
        <div className="card-content">
          <img src={PoolCleaning} alt="PoolCleaning " />
          <div className="blog-content">
            <h3>
              Rebel Cleaning: Your One-Stop Solution for Hassle-Free Cleaning
              Help in...
            </h3>
            <p>
              Cleaning Help: Are you tired of spending hours scrubbing and
              tidying up your home or office? Do you...
            </p>
            <div className="readMore">
              Read More
              <img src={rightArrow} alt="" />
            </div>
          </div>
        </div>
        <div className="card-content">
          <img src={PoolCleaning} alt="PoolCleaning " />
          <div className="blog-content">
            <h3>
              Rebel Cleaning: Your One-Stop Solution for Hassle-Free Cleaning
              Help in...
            </h3>
            <p>
              Cleaning Help: Are you tired of spending hours scrubbing and
              tidying up your home or office? Do you...
            </p>
            <div className="readMore">
              Read More
              <img src={rightArrow} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
