import React, { useEffect } from "react";
import Down from "../../svg/Down";

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
      <section className="hero-des" id="hero">
        <h1>پرندگان به آسمان تعلق دارند</h1>
        {/* <img src="/home/caged-bird.webp" alt="پرنده در قفس" /> */}
        <div className="reasons-hero">
          <a href="#freedom">
            <span className="down-icon">
              <Down />
            </span>
            <p>۵ دلیل تا پرندگان را در قفس نگه نداریم:</p>
          </a>
        </div>
      </section>

      <style jsx>{`
        h1 {
          padding: 0;
          margin: 0;
          width: 100%;
          justify-content: center;
          text-align: center;
          color: white;
          /* background-color: rgba(255, 255, 255, 0.5); */
          font-family: IranNastaliq, "IranNastaliq", tahoma;
          font-weight: bold;
          font-style: normal;
          text-shadow: 1px 1px rgba(0, 0, 0, 0.04), 2px 2px rgba(0, 0, 0, 0.04),
            3px 3px rgba(0, 0, 0, 0.04), 4px 4px rgba(0, 0, 0, 0.04),
            0.125rem 0.125rem rgba(0, 0, 0, 0.04), 6px 6px rgba(0, 0, 0, 0.04),
            7px 7px rgba(0, 0, 0, 0.04), 8px 8px rgba(0, 0, 0, 0.04),
            9px 9px rgba(0, 0, 0, 0.04), 0.3125rem 0.3125rem rgba(0, 0, 0, 0.04),
            11px 11px rgba(0, 0, 0, 0.04), 12px 12px rgba(0, 0, 0, 0.04),
            13px 13px rgba(0, 0, 0, 0.04), 14px 14px rgba(0, 0, 0, 0.04),
            0.625rem 0.625rem rgba(0, 0, 0, 0.04), 16px 16px rgba(0, 0, 0, 0.04),
            17px 17px rgba(0, 0, 0, 0.04), 18px 18px rgba(0, 0, 0, 0.04),
            19px 19px rgba(0, 0, 0, 0.04), 1.25rem 1.25rem rgba(0, 0, 0, 0.04);
          font-size: clamp(3rem, 8vw, 8.4rem);
        }

        video {
          position: fixed;
          z-index: -9999;
        }
        /* 
        img {
          width: clamp(250px, 50vw, 500px);
          height: auto;
          box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
            rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
          border-top-right-radius: 5%;
        } */

        .hero-des {
          height: calc(var(--vh, 1vh) * 100);
          display: flex;
          flex-direction: column;
          flex-wrap: nowrap;
          justify-content: center;
          align-items: center;
        }

        a {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          justify-content: center;
          align-items: center;
          height: 4rem;
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.9);
          border-radius: 5rem;
          background-color: rgba(37, 60, 88, 0.9);
          box-shadow: rgba(222, 222, 230, 0.15) 0px 30px 60px -12px inset,
            rgba(238, 234, 234, 0.2) 0px 18px 36px -18px inset;
          transition: all 0.3s linear;
        }

        a p {
          padding: 0.5rem 0 0.5rem 1rem;
          font-size: clamp(1rem, 2.5vw, 1.4rem);
        }

        a:hover {
          box-shadow: rgba(234, 234, 240, 0.3) 0px 30px 60px -12px inset,
            rgba(252, 249, 249, 0.4) 0px 18px 36px -18px inset;
        }

        .down-icon {
          padding-right: 0.5rem;
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

        @media only screen and (max-width: 1000px) {
          .hero-des {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
};

export default Hero;
