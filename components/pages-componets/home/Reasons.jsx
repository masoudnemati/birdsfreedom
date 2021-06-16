import React from "react";

const Reasons = () => {
  return (
    <>
      <div className="main">
        <h4>۴ دلیل که پرندگان را در قفس نگهداری نکنیم</h4>
        <ol>
          <li>
            <strong> حق آزادی</strong>
          </li>
          <p>
            پرندگان کالا یا اسباب بازی شما نیستند، بلکه موجوداتی اند دارای
            احساسات، هوش و حافظه. هیچ انسانی حق گرفتن آزادی از پرندگان را ندارد.
          </p>
          <li>
            <strong>عشق پرواز</strong>
          </li>
          <p></p>
          <li>
            <strong>شکار و غذا</strong>
          </li>
          <p></p>
          <li>
            <strong>اجتماعی بودن پرندگان</strong>
          </li>
          <p></p>
        </ol>
      </div>

      <style jsx>{`
        .main {
          padding: 1rem 5vw;
        }
      `}</style>
    </>
  );
};

export default Reasons;
