import React, { useEffect } from "react";
import Head from "next/head";
import Hero from "../components/pages-componets/home/Hero";
import Down from "../components/svg/Down";

export default function Home() {
  useEffect(() => {
    // The code inside useEffect is only executed on the client (in the browser), thus it has access to window.
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    // We listen to the resize event
    window.addEventListener("resize", () => {
      // We execute the same script as before
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
        <section className="reasons-header">
          <h3>۵ دلیل که پرندگان را در قفس نگهداری نکنیم:</h3>
        </section>
        <section className="freedom">
          <div>
            <h4>۱. حق آزادی</h4>
            <p>
              پرندگان کالا یا اسباب بازی شما نیستند، بلکه موجوداتی اند دارای
              احساسات، هوش و حافظه. خداوند پرندگان را آزاد آفریده و هیچ انسانی
              به خاطر خودخواهی و استفاده از صدا و زیبایی پرندگان حق گرفتن
              <b> آزادی </b>
              از آن‌ها را ندارد. آزادی یعنی داشتن
              <b> قدرت تصمیم گیری </b>
              برای اینکه کجا بروند، کجا لانه بسازند، چه غذایی بخورند، با کدام
              پرنده دعوا کنند و به کدام پرنده عشق بورزند.
            </p>
          </div>
          <img src="/home/bird-flying-blue.jpg" alt="پرنده آزاد" />‍
          <a href="#fly">
            <Down />
          </a>
        </section>
        <section className="fly" id="fly">
          <div>
            <h4>۲. عشق پرواز</h4>
            <p>
              بهترین تفریح برای پرندگان پرواز کردن است. گرفتن
              <b> آسمان </b>
              بی‌نهایت ‌خداوند از پرندگان و گذاشتن آن‌ها در قفسی کوچک کاری بسیار
              ظالمانه است.
            </p>
          </div>
          <img src="/home/owl-flying.jpg" alt="پرنده آزاد" />
          <a href="#hunt">
            <Down />
          </a>
        </section>
        <section className="hunt" id="hunt">
          <div>
            <h4>۳. شکار و غذا </h4>
            <p>
              پرندگان ذاتا
              <b> شکارچی </b>
              هستند و از انواع مختلفی از حشرات و محصولات گیاهی تغذیه می‌کنند.
              گذاشتن پرندگان در قفس و دادن غذای
              <b> تکراری </b>
              به آن‌ها باعث از بین رفتن حس شکار در آن‌ها می‌شود.
            </p>
          </div>
          <img src="/home/birds-hunt.jpg" alt="پرنده آزاد" />
          <a href="#together">
            <Down />
          </a>
        </section>
        <section className="together" id="together">
          <div>
            <h4>۴. اجتماعی بودن </h4>
            <p>
              پرندگان همچون انسان‌ها و بسیاری از حیوانات دیگر موجوداتی اجتماعی
              هستند.
              <b> تنها </b>
              گذاشتن پرندگان در قفس باعث ایجاد احساس تنهایی و افسردگی در ‌آن‌ها
              می‌شود.
            </p>
          </div>
          <img src="/home/birds-together2.jpg" alt="پرنده آزاد" />
          <a href="#memory">
            <Down />
          </a>
        </section>
        <section className="memory" id="memory">
          <div>
            <h4>۵. حافظه قوی</h4>
            <p>
              پرندگان به خاطر اینکه مکان لانه خود را پیدا کنند دارای حافظه قوی
              می‌باشند، قرار دادن آن‌ها در قفس - در مکانی ثابت و تکراری باعث
              می‌شود حوصلشان سر رود، زمان برایشان به کندی سپری شود و با اینکار
              پرندگان بی‌گناه را شکنجه می‌کنید.
            </p>
          </div>
          <img src="/home/red-bird.jpg" alt="پرنده آزاد" />
        </section>
      </div>

      <style jsx>{`
        .container {
          scroll-snap-type: y mandatory;
          overflow-y: scroll;
          height: calc(var(--vh, 1vh) * 100);
        }

        section {
          height: calc(var(--vh, 1vh) * 100);
          scroll-snap-align: start;
          direction: rtl;
        }

        section:not(:first-of-type) {
          display: flex;
          align-items: center;
          position: relative;
        }

        h3 {
          padding: 0 5vw;
          text-align: center;
          margin: 0;
        }

        h4 {
          padding: 0 5vw;
          margin: 0;
        }

        p {
          padding: 0 7vw;
        }

        a {
          position: absolute;
          right: 5vw;
          bottom: 5%;
          background-color: rgba(0, 0, 0, 0.9);
          border: 1px solid lightblue;
          border-radius: 50%;
          box-shadow: rgba(222, 222, 230, 0.25) 0px 30px 60px -12px inset,
            rgba(238, 234, 234, 0.3) 0px 18px 36px -18px inset;
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

        img {
          width: clamp(300px, 50vw, 900px);
        }

        @media only screen and (max-width: 1000px) {
          section:not(:first-of-type) {
            flex-direction: column;
            justify-content: center;
          }

          img {
            width: 100%;
          }

          a {
            right: 44vw;
          }
        }
      `}</style>
    </>
  );
}
