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
              Plans for artists
            </span>
          </h3>
          <div className="flex flex-col xl:flex-row space-x-13 xl:items-start xl:space-x-8">
            <div className="border border-black rounded-3xl p-8 w-72 mb-8">
                <h3 className="text-3xl font-bold">Free</h3>
                <h6 className="border-b-black/30 border-b pb-8">For beginner artists</h6>
                <ul className="mt-4">
                    <li>
                        <span className="font-bold">&#10003;</span> 8 posts a day
                    </li>
                    <li>
                        <span className="font-bold">&#10003;</span> 3 boosts a day
                    </li>
                    <li>
                        <span className="font-bold">&#10003;</span> Private collections
                    </li>
                </ul>
                <div className="mt-4"><span className="font-bold text-2xl">$0</span> /month</div>
                <button className="text-center bg-black w-full mt-4 pt-2 pb-2 rounded-3xl text-orange-400">
                    <span className="font-bold">Buy Now</span>
                </button>
            </div>
            <div className="border border-black rounded-3xl p-8 w-72 mb-8">
                <h3 className="text-3xl font-bold">Inkster</h3>
                <h6 className="border-b-black/30 border-b pb-8">For experienced artists</h6>
                <ul className="mt-4">
                    <li>
                        <span className="font-bold">&#10003;</span> Unlimited posts a day
                    </li>
                    <li>
                        <span className="font-bold">&#10003;</span> 6 boosts a day
                    </li>
                    <li>
                        <span className="font-bold">&#10003;</span> Private & public collections
                    </li>
                    <li>
                        <span className="font-bold">&#10003;</span> HQ image uploads
                    </li>
                </ul>
                <div className="mt-4"><span className="font-bold text-2xl">$8</span> /month</div>
                <button className="text-center bg-black w-full mt-4 pt-2 pb-2 rounded-3xl text-orange-400">
                    <span className="font-bold">Buy Now</span>
                </button>
            </div>
            <div className="border border-black rounded-3xl p-8 w-72 mb-16">
                <h3 className="text-3xl font-bold">Artisan</h3>
                <h6 className="border-b-black/30 border-b pb-8">For masters of the craft</h6>
                <ul className="mt-4">
                    <li>
                        <span className="font-bold">&#10003;</span> Unlimited posts a day
                    </li>
                    <li>
                        <span className="font-bold">&#10003;</span> 9 boosts a day
                    </li>
                    <li>
                        <span className="font-bold">&#10003;</span> Private & public collections
                    </li>
                    <li>
                        <span className="font-bold">&#10003;</span> Full-res image uploads
                    </li>
                    <li>
                        <span className="font-bold">&#10003;</span> 24/7 online support
                    </li>
                </ul>
                <div className="mt-4"><span className="font-bold text-2xl">$17</span> /month</div>
                <button className="text-center bg-black w-full mt-4 pt-2 pb-2 rounded-3xl text-orange-400">
                    <span className="font-bold">Buy Now</span>
                </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArtistPlans;
