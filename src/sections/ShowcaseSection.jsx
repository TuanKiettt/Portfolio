import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <a
              href="https://github.com/TuanKiettt/ai_task_management_system"
              target="_blank"
              rel="noreferrer"
              aria-label="View AI Task Management App on GitHub"
            >
              <div className="image-wrapper ai-task-frame">
                <img src="/images/AI-task.jpg" alt="AI Task Management App" />
              </div>
            </a>
            <div className="text-content">
              <h2>
                Task Management App with AI Integration for Enhanced Productivity
              </h2>
              <p className="text-white-50 md:text-xl">
                An app built with ReactJS, TailwindCSS and Node.js for a fast,
                user-friendly experience.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <a
                href="https://github.com/TuanKiettt/WAD"
                target="_blank"
                rel="noreferrer"
                aria-label="View E-commerce Platform on GitHub"
              >
                <div className="image-wrapper bg-[#FFEFDB]">
                  <img
                    src="/images/E-commerce.jpg"
                    alt="E-commerce Platform"
                  />
                </div>
              </a>
              <h2>The E-commerce Platform</h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <a
                href="https://github.com/TuanKiettt/React-Project"
                target="_blank"
                rel="noreferrer"
                aria-label="View Movie API App on GitHub"
              >
                <div className="image-wrapper bg-[#FFE7EB]">
                  <img src="/images/Movie-API.png" alt="Movie API App" />
                </div>
              </a>
              <h2>Movie Information App</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
