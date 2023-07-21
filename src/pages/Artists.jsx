import React from "react";
import { HeaderLanding } from "../components/Landing";

const ArtistPlans = () => {
  return (
    <>
      <HeaderLanding />
      <div className="w-full flex">
        <div className="md:mt-8">
          <h3 className="font-bold mt-16 mb-16 text-center">
            <span className="text-6xl border-b-2 border-black/30 italic">
              Plans
            </span>
          </h3>
          <div className="flex flex-col xl:flex-row space-x-13 xl:items-start xl:space-x-8">
            <div className="border border-black rounded-3xl p-8 w-72 mb-8 bg-black text-white">
              <h3 className="text-3xl font-bold">Free</h3>
              <h6 className="border-b-black/30 border-b pb-8">
                Plan 0
              </h6>
              <ul className="mt-4">
                <li>
                  <span className="font-bold">&#10003;</span> 5 postov denne
                </li>
                <li>
                  <span className="font-bold">&#10003;</span> 3 topovania mesačne
                </li>
                <li>
                  <span className="font-bold">&#10003;</span> Súkromné kolekcie
                </li>
              </ul>
              <div className="mt-4">
                <span className="font-bold text-2xl">0€</span> /mesačne
              </div>
              <button className="text-center bg-orange-400 w-full mt-4 pt-2 pb-2 rounded-3xl text-white">
                <a href="/artist-signup">
                  <span className="font-bold">Začať Ihneď</span>
                </a>
              </button>
            </div>
            <div className="border border-black rounded-3xl p-8 w-72 mb-8">
              <h3 className="text-3xl font-bold">Inkster</h3>
              <h6 className="border-b-black/30 border-b pb-8">
                Plan 1
              </h6>
              <ul className="mt-4">
                <li>
                  <span className="font-bold">&#10003;</span> Neobmedzený počet postov
                </li>
                <li>
                  <span className="font-bold">&#10003;</span> 6 topovaní mesačne
                </li>
                <li>
                  <span className="font-bold">&#10003;</span> Súkromné a verejné kolekcie
                </li>
                <li>
                  <span className="font-bold">&#10003;</span> Nahrávanie videí
                </li>
              </ul>
              <div className="mt-4">
                <span className="font-bold text-2xl">8€</span> /mesačne
              </div>
              <button className="text-center bg-black w-full mt-4 pt-2 pb-2 rounded-3xl text-orange-400">
                <span className="font-bold">Zakúpiť</span>
              </button>
            </div>
            <div className="border border-black rounded-3xl p-8 w-72 mb-16">
              <h3 className="text-3xl font-bold">Artisan</h3>
              <h6 className="border-b-black/30 border-b pb-8">
                Plan 2
              </h6>
              <ul className="mt-4">
                <li>
                  <span className="font-bold">&#10003;</span> Neobmedzený počet postov
                </li>
                <li>
                  <span className="font-bold">&#10003;</span> 9 topovaní mesačne
                </li>
                <li>
                  <span className="font-bold">&#10003;</span> Súkromné a verejné kolekcie
                </li>
                <li>
                  <span className="font-bold">&#10003;</span> Nahrávanie 4k médií
                </li>
                <li>
                  <span className="font-bold">&#10003;</span> online podpora
                </li>
              </ul>
              <div className="mt-4">
                <span className="font-bold text-2xl">$17</span> /month
              </div>
              <button className="text-center bg-black w-full mt-4 pt-2 pb-2 rounded-3xl text-orange-400">
                <span className="font-bold">Zakúpiť</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArtistPlans;
