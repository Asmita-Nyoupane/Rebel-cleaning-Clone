import React from "react";
import "./About.css";
import cleanerGirl from "../../assets/Images/cleanerGirl.png";
const About = () => {
  return (
    <div className="aboutSection">
      <img
        className="service-banner"
        src="https://c15jperap1ms1w6r.public.blob.vercel-storage.com/banner-wque802yh1UwHuYMd0IINt0ZYpWTNh.jpg"
        alt="service banner"
      />
      <div className="about-content">
        <div className="text">
          <h3>We Provide Top Quality Cleaning</h3>
          <p className="sub-heading">About Next Carpet Cleaning</p>
          <p className="sub-text">
            At Next Carpet Cleaning, we take pride in delivering exceptional
            carpet cleaning services to our valued customers. With years of
            experience in the industry, we have earned a reputation for
            professionalism, reliability, and outstanding results.
          </p>
          <button className="book-btn ">Book</button>
        </div>

        <div className="cleaningImg">
          <img src={cleanerGirl} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
