import React from "react";

const AboutSection = () => {
  return (
    <div className="w-full flex">
      <div className="md:ml-20 md:mt-6 2xl:ml-64 2xl:mt-[-18em]">
        <h3 className="p-16 font-bold">
          <span className="text-6xl border-b-2 border-black/30 italic">
            About
          </span>
        </h3>
        <div className="flex-col 2xl:flex-row flex">
          <section className="pl-12 pr-12 ml-3 2xl:w-[600px] 2xl:text-2xl z-20 relative text-xl">
            <p>
              SOCIALink is a social media app designed specifically for tattoo
              artists and enthusiasts.
            </p>
            <p className="mt-8 about-paragraph">
              The app features an easy-to-use interface that allows users to
              upload HQ images of their work. Users can search
              by location, style, and easily connect with
              artists to schedule appointments.
            </p>
            <p className="mt-8 mb-24">
              With SOCIALink, tattoo artists and enthusiasts can connect with
              others who share their passion and find new opportunities in the
              world of tattoos.
            </p>
          </section>
          <section className="2xl:ml-20">
            <h3 className="pl-16 pr-16 pb-16 font-bold 2xl:mt-16 2xl:text-center">
              <span className="text-6xl border-b-2 border-black/30 italic">
                The team
              </span>
            </h3>
            <div className="flex flex-col xl:flex-row 2xl:ml-16">
              <div className="flex flex-col items-center 2xl:mr-12 mb-8">
                <img
                  className="rounded-3xl w-32 h-32"
                  src="https://www.byrdie.com/thmb/Mnd7M_TQ9-uX62XZT-JPdQXtCcQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-13614378301-590b74231c9a405fae4bde560b9d3473.jpg"
                  alt="profile"
                />
                <h3 className="font-bold mt-4">Peter Líška</h3>
                <p className="text-center">Founder</p>
              </div>
              <div className="flex flex-col items-center 2xl:mr-12 mb-8">
                <img
                  className="rounded-3xl w-32 h-32"
                  src="https://avatars0.githubusercontent.com/u/58340587?v=4"
                  alt="profile"
                />
                <h3 className="font-bold mt-4">Daniel Radosa</h3>
                <p className="text-center">Developer</p>
              </div>
              <div className="flex flex-col items-center 2xl:mr-12 mb-8">
                <img
                  className="rounded-3xl w-32 h-32"
                  src="https://media1.popsugar-assets.com/files/thumbor/0ebv7kCHr0T-_O3RfQuBoYmUg1k/475x60:1974x1559/fit-in/500x500/filters:format_auto-!!-:strip_icc-!!-/2019/09/09/023/n/1922398/9f849ffa5d76e13d154137.01128738_/i/Taylor-Swift.jpg"
                  alt="profile"
                />
                <h3 className="font-bold mt-4">Tayluh Swift</h3>
                <p className="text-center">Designer</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
