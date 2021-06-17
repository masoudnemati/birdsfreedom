import React, { useEffect } from "react";

const Reasons = () => {
  useEffect(() => {
    // The code inside useEffect is only executed on the client (in the browser), thus it has access to window.
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  return (
    <>
      <div className="main">
        <h4>۵ دلیل که پرندگان را در قفس نگهداری نکنیم:</h4>
        <ol>
          <section>
            <li>
              <strong>حق آزادی</strong>
            </li>
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
          </section>
          <section>
            <li>
              <strong>عشق پرواز</strong>
            </li>
            <p>
              بهترین تفریح برای پرندگان پرواز کردن است. گرفتن
              <b> آسمان </b>
              بی‌نهایت ‌خداوند از پرندگان و گذاشتن آن‌ها در قفسی کوچک کاری بسیار
              ظالمانه است.
            </p>
          </section>
          <section>
            <li>
              <strong>شکار و غذا</strong>
            </li>
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
            <li>
              <strong>اجتماعی بودن پرندگان</strong>
            </li>
            <p>
              پرندگان همچون انسان‌ها و بسیاری از حیوانات دیگر موجوداتی اجتماعی
              هستند.
              <b> تنها </b>
              گذاشتن پرندگان در قفس باعث ایجاد احساس تنهایی و افسردگی در ‌آن‌ها
              می‌شود.
            </p>
          </section>
          <section>
            <li>
              <strong>حافظه قوی</strong>
            </li>
            <p>
              پرندگان به خاطر اینکه مکان لانه خود را پیدا کنند دارای حافظه قوی
              می‌باشند، قرار دادن آن‌ها در قفس - در مکانی ثابت و تکراری باعث
              می‌شود حوصلشان سر رود، زمان برایشان به کندی سپری شود و با اینکار
              پرندگان بی‌گناه را شکنجه می‌کنید.
            </p>
          </section>
        </ol>
      </div>

      <style jsx>{`
        .main {
          padding: 1rem 0;
          background-color: rgba(255, 255, 255, 0.8);
          scrollbar-arrow-color: red;
        }

        h4 {
          padding: 1rem 5vw;
          margin: 0 0 -4rem 0;
        }

        ol {
          padding: 0 6vw;
          scroll-snap-type: y mandatory;
          overflow-y: scroll;
          height: calc(var(--vh, 1vh) * 100);
        }

        section {
          height: calc(var(--vh, 1vh) * 100);
          scroll-snap-align: end;
          padding-top: 5rem;
        }

        /* .cage {
          padding: 50px 0;
          background-image: url("/home/icons8-cage-of-a-bird-48.png");
          background-repeat: no-repeat;
          background-position: center 15px;
          background-size: 70px;
          font-weight: lighter;
        } */
      `}</style>
    </>
  );
};

export default Reasons;
