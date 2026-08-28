import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import LogoShowcase from "./sections/LogoShowcase";
import FeatureCards from "./sections/FeatureCards";
import Navbar from "./components/NavBar";
import FloatingRobot from "./components/FloatingRobot";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const aboutRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      ".about-portrait, .about-copy",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 78%",
        },
      }
    );
  }, []);

  return (
    <>
      <Navbar />
      <FloatingRobot />
      <Hero />
      <section id="about" ref={aboutRef} className="intro-section section-padding">
        <div className="intro-content">
          <div className="about-layout">
            <div className="about-portrait">
              <img src="/images/me.jpg" alt="Nguyen Tuan Kiet" />
            </div>
            <div className="about-copy">
              <p className="intro-eyebrow">About me</p>
              <h2>HELLO, I AM NGUYEN TUAN KIET.</h2>
              <p className="intro-copy">
                I graduated with a Bachelor of Science in Computer Science from University of the West of England.
                My main focus in projects is designing and
                developing user interfaces for websites and applications. My goal is
                to make meaningful contributions to your company through impactful
                projects while continuing to learn and grow professionally within the
                organization.
              </p>
            </div>
          </div>
        </div>
      </section>
      <ShowcaseSection />
      {/* <LogoShowcase />  */}
      {/* <FeatureCards /> */}
      <TechStack />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
