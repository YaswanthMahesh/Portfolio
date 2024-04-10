import React from "react";
import { SOCIAL_LINKS } from "../utils/constants";

const Footer = () => {
  return (
    <footer className="p-4 h-72 bg-slate-900 ">
      <div className="flex flex-wrap justify-between mx-10">
        <div className="my-3 w-full md:w-[40%]">
          <p className="text-xl mb-2 text-white">Yaswanth Nandigam</p>
          <p className="text-xs text-white">
            Driven and Passionate Software Developer Crafting Success-Driven Web
            and Mobile Applications
          </p>
        </div>
        <div className="my-3">
          <p className="text-xl  text-white p-2">Social Links</p>
          <ul className="flex flex-wrap">
            {SOCIAL_LINKS.map((socialMedia, idx) => (
              <li
                key={idx}
                className="flex items-center justify-between p-2 bg-transparent"
              >
                <a
                  target="_blank"
                  download={socialMedia.download}
                  className="flex justify-between w-full align-center text-white"
                  href={socialMedia.link}
                  rel="noreferrer"
                >
                  <>{socialMedia.Icon}</>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
