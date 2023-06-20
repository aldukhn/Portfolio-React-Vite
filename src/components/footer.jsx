import React from "react";
import { BiGitRepoForked } from "react-icons/bi";

function Footer() {
  return (
    <footer className="flex p-4  text-black dark:text-white">
      <div className=" lg:w-1/2 mx-auto flex justify-between text-sm">
        <span className="mr-8">
          Powered by &nbsp;
          <a
            href="https://github.com/aldukhn"
            target="_blank"
            className="text-purple-400"
          >
            CREATE REACT APP
          </a>
          &nbsp; on GitHub
        </span>
        <a
          className="flex flex-row items-center space-x-2"
          href="https://github.com/aldukhn/Portfolio-React-Vite"
          target="_blank"
        >
          <BiGitRepoForked className="text-[1.3rem]" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
