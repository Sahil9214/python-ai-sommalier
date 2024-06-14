import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import img1 from "./image/img1.jpg";
import img2 from "./image/img2.jpg";
import img3 from "./image/img3.jpg";
import img4 from "./image/img4.jpg";
import wine from "./image/wine.jpg";
import supply from "./image/SupplyChain.jpg";
import turnell from "./image/turnnerl.jpg";
import catalogue from "./image/AICatalogue.jpg";
const Carousel = () => {
  const [carouselClass, setCarouselClass] = useState("");
  const nextRef = useRef(null);
  const prevRef = useRef(null);
  const sliderRef = useRef(null);
  const thumbnailBorderRef = useRef(null);

  const timeRunning = 2000;

  const slides = [
    {
      id: 1,
      img: supply,
      tags: "#Streamline.",
      title: "Supply Chain Optimization",
      description:
        "Enhance supply chain efficiency by integrating data analytics and technology to streamline operations, reduce costs, and improve reliability.",
    },
    {
      id: 2,
      img: wine,
      tags: "#SipSensations",
      title: "Ai Sommalier",
      description:
        "Discover the art of wine, where heritage and flavor create memorable experiences. Explore the world of wine with #VineVirtue. 🍷",
    },
    {
      id: 3,
      img: turnell,
      tags: "#TunnelTracking",
      title: "Underground Tunnel Detection",
      description:
        "Secure national borders with advanced technology to detect underground tunnels and prevent unauthorized crossings",
    },
    {
      id: 4,
      img: catalogue,
      tags: "#CatalogueCrafting",
      title: " AI Catalogue",
      description:
        "Transform product data into elegant catalogues with AI, enhancing the shopping experience and business-consumer connection.",
    },
  ];

  useEffect(() => {
    const next = nextRef.current;
    const prev = prevRef.current;

    const nextHandler = () => showSlider("next");
    const prevHandler = () => showSlider("prev");

    next.addEventListener("click", nextHandler);
    prev.addEventListener("click", prevHandler);

    return () => {
      next.removeEventListener("click", nextHandler);
      prev.removeEventListener("click", prevHandler);
    };
  }, []);

  const showSlider = (type) => {
    const sliderDom = sliderRef.current;
    const thumbnailItemsDom =
      thumbnailBorderRef.current.querySelectorAll(".item");

    if (type === "next") {
      sliderDom.appendChild(sliderDom.firstElementChild);
      thumbnailBorderRef.current.appendChild(thumbnailItemsDom[0]);
      setCarouselClass("next");
    } else {
      sliderDom.prepend(sliderDom.lastElementChild);
      thumbnailBorderRef.current.prepend(
        thumbnailItemsDom[thumbnailItemsDom.length - 1]
      );
      setCarouselClass("prev");
    }

    setTimeout(() => {
      setCarouselClass("");
    }, timeRunning);
  };

  return (
    <div>
      <div className={`carousel ${carouselClass}`}>
        <div className="list" ref={sliderRef}>
          {slides.map((val, index) => (
            <div
              className="item"
              key={index}
              style={{
                backgroundImage: `url(${val.img})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* <img
                src={val.img}
                alt={`Slide ${index + 1}`}
                className="case-study-img"
              /> */}
              <div className="content">
                <div className="author">
                  <strong>{val.tags}</strong>
                </div>
                <div className="title">{val.title}</div>
                {/* <div className="topic">ANIMAL</div> */}
                <div className="des">
                  <strong
                    style={{
                      // color: "white",
                      letterSpacing: "1px",
                      color: "#f3ff6e",
                      fontSize: "22px",
                    }}
                  >
                    {val.description}
                  </strong>
                </div>
                <div className="buttons">
                  <button>SEE MORE</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="thumbnail" ref={thumbnailBorderRef}>
          {slides.map((val, index) => (
            <div className="item" key={index}>
              <img src={`${val.img}`} alt={`Thumbnail ${index + 1}`} />
              <div className="content">
                <div className="title">{val.tags}</div>
                <div className="description" style={{ letterSpacing: "2px" }}>
                  {val.title}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="arrows">
          <button id="prev" ref={prevRef}>
            &lt;
          </button>
          <button id="next" ref={nextRef}>
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
