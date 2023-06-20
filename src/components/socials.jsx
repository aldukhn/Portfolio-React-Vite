import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import firebaseConfig from "../common/firebaseConfig";

function Socials() {
  return (
    <>
      <a href="https://github.com/aldukhn" target="_blank">
        <FaGithub />
      </a>
      <a href="https://twitter.com/" target="_blank">
        <FaTwitter />
      </a>
      <a
        href="https://www.linkedin.com/in/abdul-al-dukhn-2220b8118/"
        target="_blank"
      >
        <FaLinkedin />
      </a>
    </>
  );
}

export default Socials;
