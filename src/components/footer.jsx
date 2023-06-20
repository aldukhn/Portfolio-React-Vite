import React from "react";
import { BiGitRepoForked } from "react-icons/bi";
import { initializeApp } from "firebase/app";
import { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import firebaseConfig from "../common/firebaseConfig";
initializeApp(firebaseConfig);

function Footer() {
  const [linksData, setLinksData] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const linksRef = ref(db, "links/");
    onValue(linksRef, (snapshot) => {
      const data = snapshot.val();
      setLinksData(data);
    });
  }, []);

  return (
    <footer className="flex p-4  text-black dark:text-white">
      <div className=" lg:w-1/2 mx-auto flex justify-between text-sm">
        <span className="mr-8">
          Crafted with ❤️ by{" "}
          <a href={linksData["1"]} target="_blank" className="text-purple-400">
            Aldukhn
          </a>
        </span>
        <a
          className="flex flex-row items-center space-x-2"
          href={linksData["0"]}
          target="_blank"
        >
          <BiGitRepoForked className="text-[1.3rem]" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
