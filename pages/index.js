import React, { useEffect } from "react";
import Head from "next/head";
import Hero from "../components/pages-componets/home/Hero";
import Down from "../components/svg/Down";
import Image from "next/image";

import BlueBird from "../public/home/bird-flying-blue.webp";

export default function Home() {
  useEffect(() => {
    // The code inside useEffect is only executed on the client (in the browser), thus it has access to window.
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    // We listen to the resize event
    window.addEventListener("resize", () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
  }, []);
  return (
    <>
      <Head>
        <title>آزادی پرندگان</title>
        <meta name="description" content="حق آزادی پرندگان" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <section>
          <Hero />
        </section>
        {/* <section className="reasons-header">
          <h3>۵ دلیل که پرندگان را در قفس نگهداری نکنیم:</h3>
        </section> */}
        <section className="freedom" id="freedom">
          <div>
            <p className="title">
              <span className="title-number">۱.</span>
              <span className="title-name">
                <b> حق آزادی </b>
              </span>
            </p>
            <p>
              پرندگان کالا یا اسباب بازی شما نیستند، بلکه موجوداتی اند دارای
              احساسات، هوش و حافظه. خداوند پرندگان را آزاد آفریده و هیچ انسانی
              به خاطر خودخواهی و استفاده از صدا و زیبایی پرندگان حق گرفتن
              <b> آزادی </b>
              از آن‌ها را ندارد.
              {/* آزادی یعنی داشتن
              <b> قدرت تصمیم گیری </b>
              برای اینکه کجا بروند، کجا لانه بسازند، چه غذایی بخورند، با کدام
              پرنده دعوا کنند و به کدام پرنده عشق بورزند. */}
            </p>
          </div>
          <img src="/home/bird-flying-blue.webp" alt="پرنده" />
          <a className="top" href="#hero">
            <Down />
          </a>
          <a className="bottom" href="#fly">
            <Down />
          </a>
        </section>
        <section className="fly" id="fly">
          <div>
            <p className="title">
              <span className="title-number">۲.</span>
              <span className="title-name">
                <b> عشق پرواز</b>
              </span>
            </p>
            <p>
              بهترین تفریح برای پرندگان پرواز کردن است. گرفتن
              <b> آسمان </b>
              بی‌نهایت ‌خداوند از پرندگان و گذاشتن آن‌ها در قفسی کوچک کاری بسیار
              ظالمانه است.
            </p>
          </div>
          <img src="/home/owl-flying.webp" alt="پرنده آزاد" />
          <a className="top" href="#freedom">
            <Down />
          </a>
          <a className="bottom" href="#hunt">
            <Down />
          </a>
        </section>
        <section className="hunt" id="hunt">
          <div>
            <p className="title">
              <span className="title-number">۳.</span>
              <span className="title-name">
                <b> شکار و غذا </b>
              </span>
            </p>
            <p>
              پرندگان ذاتا
              <b> شکارچی </b>
              هستند و از انواع مختلفی از حشرات و محصولات گیاهی تغذیه می‌کنند.
              گذاشتن پرندگان در قفس و دادن غذای
              <b> تکراری </b>
              به آن‌ها باعث از بین رفتن حس شکار در آن‌ها می‌شود.
            </p>
          </div>
          <img src="/home/birds-hunt.webp" alt="پرنده آزاد" />
          <a className="top" href="#fly">
            <Down />
          </a>
          <a className="bottom" href="#together">
            <Down />
          </a>
        </section>
        <section className="together" id="together">
          <div>
            <p className="title">
              <span className="title-number">۴.</span>
              <span className="title-name">
                <b> اجتماعی بودن</b>
              </span>
            </p>
            <p>
              پرندگان همچون انسان‌ها و بسیاری از حیوانات دیگر موجوداتی اجتماعی
              هستند.
              <b> تنها </b>
              گذاشتن پرندگان در قفس باعث ایجاد احساس تنهایی و افسردگی در ‌آن‌ها
              می‌شود.
            </p>
          </div>
          <img src="/home/birds-together2.webp" alt="پرنده آز اد" />
          <a className="top" href="#hunt">
            <Down />
          </a>
          <a className="bottom" href="#memory">
            <Down />
          </a>
        </section>
        <section className="memory" id="memory">
          <div>
            <p className="title">
              <span className="title-number">۵.</span>
              <span className="title-name">
                <b> حافظه قوی </b>
              </span>
            </p>
            <p>
              پرندگان به خاطر اینکه مکان لانه خود را پیدا کنند دارای حافظه قوی
              می‌باشند، قرار دادن آن‌ها در قفس - در مکانی ثابت و تکراری باعث
              می‌شود حوصلشان سر رود، زمان برایشان به کندی سپری شود و با اینکار
              پرندگان بی‌گناه را شکنجه می‌کنید.
            </p>
          </div>
          <img src="/home/red-bird.webp" alt="پرنده آزاد" />
          <a className="top" href="#together">
            <Down />
          </a>
          <a className="bottom" href="#defence">
            <Down />
          </a>
        </section>
        <section className="defence" id="defence">
          <div>
            <p className="title">
              <span className="title-name">
                <b>چگونگی دفاع از حق آزادی پرندگان:</b>
              </span>
            </p>
            <p>
              یکی از کارهایی که می‌توانید انجام دهید
              <b> نخریدن </b>
              پرندگان و مطلع کردن دیگران از طبیعت ذاتی پرندگان است. متاسفانه
              اکثر پرنده‌هایی که تمام عمر خود را در قفس بوده‌اند مهارت لازم برای
              زنده ماندن در طبیعت را ندارند.
            </p>
          </div>
          <img
            className="next-image"
            src="/home/caged-bird.webp"
            alt="پرنده در قفس"
          />
          <a className="top" href="#memory">
            <Down />
          </a>
          <a className="bottom" href="#footer">
            <Down />
          </a>
        </section>
        <section className="footer" id="footer">
          <div>
            <a
              className="footer-link atyal-link"
              href="https://atyal.ir/"
              target="_blank"
              title="link to atyal.ir website"
              rel="noopener noreferrer"
            >
              <p>
                Web Design by
                <span className="atyal-name"> Atyal.ir</span>
              </p>
            </a>
            <a
              className="footer-link weekend-link"
              href="https://www.instagram.com/artofweekend/"
              target="_blank"
              title="link to art of weekend instagram"
              rel="noopener noreferrer"
            >
              <p className="weekend">
                With Special Thanks to
                <span className="weekend-name"> Art of Weekend</span>
              </p>
            </a>
          </div>
          <a className="top" href="#defence">
            <Down />
          </a>
        </section>
      </div>

      <style jsx>{`
        .container {
          scroll-snap-type: y mandatory;
          overflow-y: scroll;
          height: calc(var(--vh, 1vh) * 100);
          scroll-behavior: smooth;
        }

        section {
          height: calc(var(--vh, 1vh) * 100);
          scroll-snap-align: start;
          direction: rtl;
          scroll-behavior: smooth;
        }

        section + div {
          width: 500vw;
        }

        section:not(:first-of-type) {
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
        }

        h3 {
          padding: 0 5vw;
          text-align: center;
          margin: 0;
        }

        img {
          width: clamp(300px, 50vw, 900px);
        }

        .title {
          padding: 0 5vw;
          margin: 0;
        }

        .title-name {
          font-size: clamp(1.25rem, 1.5vw, 2rem);
        }

        p {
          padding: 0 7vw;
        }

        a:not(.footer-link) {
          position: absolute;
          bottom: 5%;
          border: 1px solid rgba(255, 255, 255, 0.9);
          background-color: rgba(0, 0, 0, 0.2);
          border-radius: 50%;
          box-shadow: rgba(222, 222, 230, 0.1) 0px 30px 60px -12px inset,
            rgba(238, 234, 234, 0.05) 0px 18px 36px -18px inset;
          transition: all 0.3s linear;
        }

        .top {
          right: 5vw;
          transform: rotate(180deg);
        }

        .bottom {
          right: 10vw;
        }

        a:not(.footer-link):hover {
          box-shadow: rgba(222, 222, 230, 0.3) 0px 30px 60px -12px inset,
            rgba(238, 234, 234, 0.4) 0px 18px 36px -18px inset;
        }

        .reasons-header {
          display: flex;
          justify-content: center;
          text-align: center;
          background-color: rgba(255, 255, 255, 0.8);
        }

        .freedom {
          color: white;
          background-color: #1a365e;
        }

        .fly {
          color: #f3f7f7;
          background-color: #404042;
        }

        .hunt {
          color: #cce7e7;
          background-color: #2f3022;
        }

        .together {
          color: #e4d0ba;
          background-color: #0f232c;
        }

        .memory {
          color: #dbeaf1;
          background-color: #030a02;
        }

        .defence {
          color: #fefefe;
          background-color: #353535;
        }

        .footer {
          color: #fafbfb;
          background-color: #242433;
          background-image: url("/icons/mountains.svg");
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center bottom;
          direction: ltr;
        }

        .atyal-link p {
          font-size: clamp(1.5rem, 2vw, 2.4rem);
          border: 1px solid rgba(255, 255, 255, 0);
        }

        .atyal-name {
          color: #bcbcec;
          font-family: "Audiowide", cursive;
          font-weight: bolder;
        }

        .weekend-link {
          color: rgba(243, 247, 247, 0.7);
          font-size: clamp(1.1rem, 1.2vw, 1.5rem);
        }

        .weekend-link p {
          border: 1px solid rgba(255, 255, 255, 0);
        }

        .weekend-name {
          color: rgba(161, 161, 226, 0.95);
          font-family: "Audiowide", cursive;
          font-weight: bolder;
        }

        .atyal-link:hover p,
        .weekend-link:hover p {
          border: 1px solid white;
          box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
            0 10px 10px rgba(0, 0, 0, 0.22);
        }

        @media only screen and (max-width: 1000px) {
          section:not(:first-of-type) {
            flex-direction: column;
            justify-content: center;
          }

          img {
            width: 100%;
          }

          .top {
            right: 5rem;
          }

          .bottom {
            right: 10rem;
          }
        }
      `}</style>
    </>
  );
}
