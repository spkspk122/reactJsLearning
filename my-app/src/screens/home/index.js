import React, { useState } from "react";
import { icons } from "../../assets/iconpath";
import { Button } from "../../components/button";
import Navbar from "../../components/navbar";
import "./styles.scss";
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
  const socialmedia = [
    {
      id: 1,
      icon: icons?.twitter,
      link: "https://twitter.com",
    },
    {
      id: 2,
      icon: icons?.faceBook,
      link: "https://www.facebook.com/login/",
    },
    {
      id: 3,
      icon: icons?.insta,
      link: "https://www.instagram.com/accounts/login/",
    },
    {
      id: 4,
      icon: icons?.github,
      link: "https://github.com/",
    },
  ];
  const footerData = [
    {
      category: "Company",
      items: [
        {
          id: 1,
          title: "About",
        },
        {
          id: 2,
          title: "Features",
        },
        {
          id: 3,
          title: "Works",
        },
      ],
    },
    {
      category: "Help",
      items: [
        {
          id: 1,
          title: "Support Center",
        },
        {
          id: 2,
          title: "Customer Service",
        },
        {
          id: 3,
          title: "Contact Us",
        },
      ],
    },
    {
      category: "FAQ",
      items: [
        {
          id: 1,
          title: "General Questions",
        },
        {
          id: 2,
          title: "Account Information",
        },
        {
          id: 3,
          title: "Technical Issues",
        },
      ],
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="container">
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
      <div className="footer-container">
        <div className="footer-heading">
          <text className="footer-txt">SHOP.CO</text>
          <text className="footer-cls">
            We have clothes that suits your style <br />
            brand which you’re proud to wear. <br />
            From women to men.
          </text>
          <div className="footer-socialmedia">
            {socialmedia?.map((item, i) => (
              <img
                key={i}
                src={item?.icon}
                alt="no img"
                className="footer-socialmedia-Img"
                onClick={() => {
                  window.location.href = item?.link;
                }}
              />
            ))}
          </div>
        </div>
        <div className="footer-sub-container">
          {footerData?.map((data, i) => (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginRight: "10%",
                marginLeft: "5%",
              }}
            >
              <div
                style={{
                  flexDirection: "column",
                  display: "flex",
                }}
              >
                <text className="footer-sub-txt">{data?.category}</text>
                {data?.items?.map((item, i) => {
                  return (
                    <>
                      <text
                        className="footer-sub-txt1"
                        onClick={() => {
                          window.location.href =
                            "https://www.google.com/search?gs_ssp=eJzj4tTP1TcwMU02T1JgNGB0YPBiS8_PT89JBQBASQXT&q=google&rlz=1C1CHBF_enIN999IN999&oq=goo&gs_lcrp=EgZjaHJvbWUqGAgBEC4YQxiDARjHARixAxjRAxiABBiKBTIGCAAQRRg5MhgIARAuGEMYgwEYxwEYsQMY0QMYgAQYigUyDAgCECMYJxiABBiKBTIMCAMQIxgnGIAEGIoFMhIIBBAAGEMYgwEYsQMYgAQYigUyBggFEEUYQTIGCAYQRRg8MgYIBxBFGDzSAQgxODc1ajBqN6gCCLACAQ&sourceid=chrome&ie=UTF-8";
                        }}
                      >
                        {item?.title}
                      </text>
                    </>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
