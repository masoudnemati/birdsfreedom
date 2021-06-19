import React from "react";

const Down = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="{24}"
        height="{24}"
        viewBox="0 0 24 24"
      >
        <path d="M16.293 9.293L12 13.586 7.707 9.293 6.293 10.707 12 16.414 17.707 10.707z" />
      </svg>

      <style jsx>{`
        svg {
          cursor: pointer;
          width: clamp(40px, 4vw, 55px);
          height: clamp(35px, 3vw, 50px);
          height: auto;
          fill: white;
          padding: 5px 0 0 0;
          margin: 0;
        }

        svg:hover {
          fill: skyblue;
        }
      `}</style>
    </>
  );
};

export default Down;
