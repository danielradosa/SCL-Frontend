import React from "react";

const MidLanding = () => {
  window.onscroll = function () {
    const hand = document.querySelector(".hand");
    const scroll = window.scrollY;
    hand.style.marginTop = `-${scroll / 1.5}px`;
  };

  return (
    <div className="w-[960px]">
      <div className="space-x-2">
        <a href="/login">
          <button className="text-blue-600 underline">
            Login
          </button>
        </a>
        <a href="/register">
          <button className="text-blue-600 underline">
            Register
          </button>
        </a>
      </div>
    </div>
  );
};

export default MidLanding;
