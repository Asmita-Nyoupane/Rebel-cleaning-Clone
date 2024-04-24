import React from "react";
import "./Home.css";
import mainimage from "../../assets/Images/mainimage.png";

const Home = () => {
  return (
    <div className="homePage">
      <div className="content">
        <h4>LEARN FROM TODAY.</h4>
        <h1 className="heading">Happiness Is Freely Cleaning Houses</h1>
        <p>
          Awesome site. on the top advertising a Courses available business
          online includes assembling having awesome site on the top advertising
          a Courses available business having..
        </p>
        <div className="btn">
          <button className="aboutBtn"> About Us</button>
          <button className="bookBtn"> Book a Service</button>
        </div>
      </div>
      <div className="main-image">
        <img className="cleaner-img" src={mainimage} alt=" Main Image" />
      </div>
    </div>
  );
};

export default Home;
