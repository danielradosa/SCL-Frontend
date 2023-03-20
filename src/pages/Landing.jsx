import React from "react";
import {
  HeaderLanding,
  MidLanding,
  AboutSection,
  ContactSection,
  LandingFooter,
} from "../components/Landing";

export default function Landing() {
  const showScrollToTop = () => {
    const scrollToTop = document.querySelector(".scroll-to-top");
    if (window.scrollY > 1000) {
      scrollToTop.classList.remove("hidden");
    } else {
      scrollToTop.classList.add("hidden");
    }
  };

  return (
    <>
      <HeaderLanding />
      <MidLanding />
      <AboutSection />
      <ContactSection />
      <LandingFooter />
      <button
        className="scroll-to-top bg-gray-200 p-4 text-xs fixed bottom-16 right-8 rounded-full z-10"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        onScroll={showScrollToTop}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </>
  );
}
