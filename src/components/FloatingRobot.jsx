import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Bot } from "lucide-react";
import { useRef, useState } from "react";

const FloatingRobot = () => {
  const robotRef = useRef(null);
  const [reply, setReply] = useState("");

  useGSAP(() => {
    const robot = robotRef.current;
    if (!robot) return;

    const route = gsap.timeline({ repeat: -1, repeatDelay: 1.5 });
    const bob = gsap.to(robot, {
      y: "+=12",
      duration: 1.8,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    route
      .to(robot, { x: "18vw", y: "8vh", rotation: 8, duration: 5, ease: "sine.inOut" })
      .to(robot, { x: "63vw", y: "-2vh", rotation: -10, duration: 7, ease: "sine.inOut" })
      .to(robot, { x: "76vw", y: "45vh", rotation: 12, duration: 6, ease: "sine.inOut" })
      .to(robot, { x: "42vw", y: "62vh", rotation: -8, duration: 6, ease: "sine.inOut" })
      .to(robot, { x: "4vw", y: "38vh", rotation: 6, duration: 8, ease: "sine.inOut" });

    return () => {
      route.kill();
      bob.kill();
    };
  }, []);

  const handleRobotClick = () => {
    setReply((currentReply) =>
      currentReply ? "Let's build something memorable." : "Hello! Thanks for visiting.",
    );
    gsap.fromTo(
      robotRef.current,
      { scale: 1 },
      { scale: 1.16, duration: 0.2, yoyo: true, repeat: 1, ease: "power2.out" },
    );
  };

  return (
    <button
      ref={robotRef}
      type="button"
      className="floating-robot"
      aria-label="Talk to the portfolio robot"
      onClick={handleRobotClick}
    >
      <span className="floating-robot__antenna" />
      <Bot strokeWidth={1.5} />
      <span className="floating-robot__signal" />
      {reply && <span className="floating-robot__reply">{reply}</span>}
    </button>
  );
};

export default FloatingRobot;
