import React, { useEffect } from "react";
import Head from "next/head";
import Hero from "../components/pages-componets/home/Hero";

export default function Home() {
  useEffect(() => {
    // The code inside useEffect is only executed on the client (in the browser), thus it has access to window.
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
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
        <section>
          <h4>۱. حق آزادی</h4>
          <p>
            پرندگان کالا یا اسباب بازی شما نیستند، بلکه موجوداتی اند دارای
            احساسات، هوش و حافظه. خداوند پرندگان را آزاد آفریده و هیچ انسانی به
            خاطر خودخواهی و استفاده از صدا و زیبایی پرندگان حق گرفتن
            <b> آزادی </b>
            از آن‌ها را ندارد. آزادی یعنی داشتن
            <b> قدرت تصمیم گیری </b>
            برای اینکه کجا بروند، کجا لانه بسازند، چه غذایی بخورند، با کدام
            پرنده دعوا کنند و به کدام پرنده عشق بورزند.
          </p>
        </section>
        <section>
          <h4>۲. عشق پرواز</h4>
          <p>
            بهترین تفریح برای پرندگان پرواز کردن است. گرفتن
            <b> آسمان </b>
            بی‌نهایت ‌خداوند از پرندگان و گذاشتن آن‌ها در قفسی کوچک کاری بسیار
            ظالمانه است.
          </p>
        </section>
        <section>
          <h4>۳. شکار و غذا </h4>
          <p>
            پرندگان ذاتا
            <b> شکارچی </b>
            هستند و از انواع مختلفی از حشرات و محصولات گیاهی تغذیه می‌کنند.
            گذاشتن پرندگان در قفس و دادن غذای
            <b> تکراری </b>
            به آن‌ها باعث از بین رفتن حس شکار در آن‌ها می‌شود.
          </p>
        </section>
        <section>
          <h4>۴. اجتماعی بودن </h4>
          <p>
            پرندگان همچون انسان‌ها و بسیاری از حیوانات دیگر موجوداتی اجتماعی
            هستند.
            <b> تنها </b>
            گذاشتن پرندگان در قفس باعث ایجاد احساس تنهایی و افسردگی در ‌آن‌ها
            می‌شود.
          </p>
        </section>
        <section>
          <h4>۵. حافظه قوی</h4>
          <p>
            پرندگان به خاطر اینکه مکان لانه خود را پیدا کنند دارای حافظه قوی
            می‌باشند، قرار دادن آن‌ها در قفس - در مکانی ثابت و تکراری باعث
            می‌شود حوصلشان سر رود، زمان برایشان به کندی سپری شود و با اینکار
            پرندگان بی‌گناه را شکنجه می‌کنید.
          </p>
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
        }

        section:not(:first-of-type) {
          background-color: rgba(255, 255, 255, 0.8);
        }

        h3 {
          padding: 1.5rem 5vw 0 5vw;
          text-align: center;
          margin: 0;
        }

        h4 {
          padding: 1.5rem 5vw 0 5vw;
          margin: 0;
        }

        p {
          padding: 0 7vw;
        }

        .reasons-header {
          height: 10vh;
        }
      `}</style>
    </>
  );
}
