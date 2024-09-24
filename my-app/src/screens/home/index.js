import React, { useState } from "react";
import Navbar from "../../components/navbar";
import "./styles.css";
import { Button } from "../../components/button";
import { icons } from "../../assets/iconpath";
import Img1 from "../../assets/images/img-1.jpg";
const Home = () => {
  const [videoVisible, setVideoVisible] = useState(false);
  const cards = [
    {
      id: 1,
      text: "Adventure",
      desc: "Chase the thrill, feel the splash—where the waterfall meets adventure!",
      img: icons?.peak,
    },
    {
      id: 2,
      text: "Luxury",
      desc: "Indulge in a world where elegance and craftsmanship come together to create an experience beyond luxury.",
      img: icons?.img2,
    },
    {
      id: 3,
      text: "Mystery",
      desc: "Unravel the unknown, where every corner hides a secret waiting to be discovered.",
      img: icons?.img3,
    },
    {
      id: 4,
      text: "Chill",
      desc: "Where time stands still and the only thing on the agenda is to relax and chill.",
      img: icons?.img4,
    },
    {
      id: 5,
      text: "Adventure",
      desc: "Discover a new realm of flavor, where every dessert tells a delicious story of indulgence and adventure.",
      img: icons?.img5,
    },
  ];

  return (
    <div>
      <Navbar />
      <div>
        <div className="banner" alt="no img">
          <div className="title-container">
            <h1 className="title">ADVENTURE AWAITS</h1>
            <p className="sub-heading">What are you waiting for?</p>
            <div className="btn-container">
              <Button buttonStyle="btn--outline" buttonSize="btn--small">
                GET STARTED
              </Button>
              <Button
                buttonStyle="btn--test"
                buttonSize="btn--small"
                onClick={() => {
                  setVideoVisible(!videoVisible);
                }}
              >
                <i className="far fa-play-circle" /> WATCH TRAILER
              </Button>
            </div>
          </div>
          {videoVisible && (
            <div className="video-container">
              <video controls>
                <source
                  src="../../assets/videos/video-1.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
        </div>
        <span>
          <h2 className="head-2">Check out these EPIC Destinations!</h2>
        </span>
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          {cards?.map((i) => (
            <div className="card-containrer">
              <div className="card-cont-1">
                <div className="image-container">
                  <img className="img1" alt="no img" src={i?.img} />
                  <text className="plan-type">{i?.text}</text>
                </div>

                <div className="desc-container">
                  <text>{i?.desc}</text>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
