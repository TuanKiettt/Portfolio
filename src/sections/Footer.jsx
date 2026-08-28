import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p></p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg) => (
            <a
              key={socialImg.name}
              className={`icon ${socialImg.name === "github" ? "github-icon" : ""}`}
              href={socialImg.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visit my ${socialImg.name} profile`}
            >
              <img src={socialImg.imgPath} alt="" />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Nguyen Tuan Kiet. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
