import React from "react";

export const SimpleButton = ({ bg, text }) => {
  return (
    <>
      <button
        style={{
          background: bg ? bg : "trasparent",
          color: "white",
          padding: "0.7rem 2rem",
          borderRadius: "13px",
          border: "1px solid #FFA80FFA",
        }}
      >
        {text}
      </button>
    </>
  );
};
