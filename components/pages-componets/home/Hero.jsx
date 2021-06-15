import React from "react";

const Hero = () => {
  return (
    <>
      <video autoPlay="true" muted playsinline loop>
        <source src="/home/fly.webm" type="video/webm" />
        Sorry, your browser doesn't support embedded videos.
      </video>
      <section className="hero-des">
        <h1>پرندگان به آسمان تعلق دارند</h1>
        <img src="/home/caged-bird.jpg" alt="پرنده در قفس" />
      </section>

      <style jsx>{`
        h1 {
          padding: 0;
          margin: 0;
          width: 100%;
          justify-content: center;
          align-items: center;
          text-align: center;
          background-color: rgba(255, 255, 255, 0.5);
          font-family: IranNastaliq, "IranNastaliq", tahoma;
        }

        video {
          position: fixed;
          z-index: -9999;
        }

        img {
          width: clamp(250px, 50vw, 500px);
          height: auto;
          box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
            rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
        }

        .hero-des {
          box-sizing: content-box;
          height: 100vh;
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          justify-content: space-between;
          align-items: flex-end;
        }

        @media (min-aspect-ratio: 16/9) {
          video {
            width: 100%;
            height: auto;
          }
        }

        @media (max-aspect-ratio: 16/9) {
          video {
            width: auto;
            height: 100%;
          }
        }

        @media only screen and (max-width: 970px) {
          .hero-des {
            flex-direction: column;
          }

          h1 {
            margin-top: 40vh;
          }
        }
      `}</style>
    </>
  );
};

export default Hero;
