import React from "react";
import hand from "../../assets/hand.png";

const MidLanding = () => {
  window.onscroll = function () {
    const hand = document.querySelector(".hand");
    const scroll = window.scrollY;
    hand.style.marginTop = `-${scroll / 1.5}px`;
  };

  return (
    <div className="w-full overflow-hidden">
      <div className="md:ml-20 md:mt-12 2xl:ml-64 2xl:mt-16">
        <h3 className="p-16 font-bold text-xl">
          SOCIÁLNA SIEŤ
        </h3>
        <h1 className="pl-16 pr-16 font-bold text-6xl z-30 relative 2xl:text-8xl">
          Platforma pre <br />{" "}
          <span className="from-orange-400 to-orange-600 bg-clip-text text-transparent bg-gradient-to-r drop-shadow-md">
            nadšencov
          </span>{" "}
          a{" "}
          <span className="from-yellow-400 to-orange-400 bg-clip-text text-transparent bg-gradient-to-l drop-shadow-md">
            samotných tatérov. <span className="text-black">Tá najlepšia.</span>
          </span>
        </h1>
        <div className="align-middle pb-24">
          <a href="/signup">
            <button className="mt-16 font-bold ml-16 pl-6 pr-6 pt-2 pb-2 bg-orange-400 text-white rounded-3xl text-xl drop-shadow-lg">
              Registrácia
            </button>
          </a>
          <a href="/login">
            <button className="mt-16 ml-4 pl-6 pr-6 pt-2 pb-2 border-2 border-black rounded-3xl text-xl font-bold 2xl:ml-8">
              Prihlásenie
            </button>
          </a>
        </div>
        <img 
          src={hand}
          alt=""
          className="rotate-[-15deg] xl:ml-[28em]  xl:w-[900px] mr-16 hidden 2xl:block hand relative"
        />
      </div>
    </div>
  );
};

export default MidLanding;
