import React from "react";

const ContactSection = () => {
  return (
    <div className="mb-40 2xl:grid" id="contact">
      <h3 className="pl-16 pr-16 pb-16 font-bold 2xl:mt-16 2xl:text-center">
        <span className="text-6xl border-b-2 border-black/30 italic">
          Kontaktujte nás
        </span>
      </h3>
      <form className="bg-white p-6">
        <div className="mb-6 w-[300px] 2xl:w-[600px]">
          <label className="block text-xl font-medium mb-2" htmlFor="name">
            Celé Meno
          </label>
          <input
            className="w-full border-black border-2 pl-4 pt-2 pb-2 rounded-3xl font-bold text-orange-400"
            id="name"
            type="text"
            required
          />
        </div>
        <div className="mb-6 w-[300px] 2xl:w-[600px]">
          <label className="block font-medium mb-2 text-xl" htmlFor="email">
            E-mail
          </label>
          <input
            className="w-full border-2 border-black pl-4 pt-2 pb-2 rounded-3xl font-bold text-orange-400"
            id="email"
            type="email"
            required
          />
        </div>
        <div className="mb-4 w-[300px] 2xl:w-[600px]">
          <label className="block text-xl font-medium mb-2" htmlFor="message">
            Správa
          </label>
          <textarea
            className="w-full border-2 border-black pl-4 pt-2 pb-2 rounded-3xl h-32 font-bold text-orange-400"
            id="message"
            required
          />
        </div>
        <button className="w-1/2 ml-20 2xl:ml-40 mx-auto text-center transition-all duration-300 ease-out 
        hover:ease-in mt-6 font-bold pt-2 pb-2 bg-orange-400 text-white rounded-3xl 
        text-lg bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-600 hover:to-orange-400
        drop-shadow-lg">
          Odoslať
        </button>
      </form>
    </div>
  );
};

export default ContactSection;
