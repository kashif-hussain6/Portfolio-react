import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/profile.php?id=100072035328558"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
          </a>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon">
              <FaTwitter />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/kashif-hussain64/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <SiNextdotjs />
          </span>
          <span className="bannerIcon">
            <SiTailwindcss />
          </span>
          <span className="bannerIcon">
            <SiFigma />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
