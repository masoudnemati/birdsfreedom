import React from "react";
import Image from "next/image";

const test = () => {
  return (
    <>
      <div className="test">
        <Image
          className="image"
          src="/home/bird-flying-blue.webp"
          width={1000}
          height={625}
        />
      </div>
      <style jsx global>{`
        .image {
          border: 10px solid red !important;
          border-radius: 50%;
        }

        .test {
          width: 500px;
        }
      `}</style>
    </>
  );
};

export default test;
