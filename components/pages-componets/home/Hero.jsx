import React, { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    // The code inside useEffect is only executed on the client (in the browser), thus it has access to window.
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  return (
    <>
      <video
        autoPlay={true}
        controlsList="nodownload"
        muted
        playsInline
        loop
        disablePictureInPicture={true}
      >
        <source src="/home/fly.mp4" type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
      <section className="hero-des">
        <h1>پرندگان به آسمان تعلق دارند</h1>
        <img src="/home/caged-bird.webp" alt="پرنده در قفس" />
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
          font-weight: bold;
          font-style: normal;
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
          border-top-right-radius: 5%;
        }

        .hero-des {
          box-sizing: content-box;
          height: calc(var(--vh, 1vh) * 100);
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
