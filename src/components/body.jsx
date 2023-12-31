import React from "react";
import Projectscard from "./projectscard";
import Socials from "./socials";
import Skills from "./skills";
import Experience from "./experience";
import ExtraSection from "./extraSection";

//firebase
import { initializeApp } from "firebase/app";
import { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import firebaseConfig from "../common/firebaseConfig";

// Initialize Firebase
initializeApp(firebaseConfig);
//end firebase
function Body() {
  const [projectsData, setProjectsData] = useState([]);
  const [experienceData, setExperienceData] = useState([]);
  const [skillsData, setSkillsData] = useState([]);
  const [sumData, setSumData] = useState([]);
  const [funFacts, setfunFacts] = useState([]);
  const [titlesData, settitlesData] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const projectsRef = ref(db, "projects/");
    onValue(projectsRef, (snapshot) => {
      const data = snapshot.val();
      setProjectsData(data);
    });

    const experienceRef = ref(db, "experience/");
    onValue(experienceRef, (snapshot) => {
      const data = snapshot.val();
      setExperienceData(data);
    });

    const skillsRef = ref(db, "skills/");
    onValue(skillsRef, (snapshot) => {
      const data = snapshot.val();
      setSkillsData(data);
    });

    const sumRef = ref(db, "sum/");
    onValue(sumRef, (snapshot) => {
      const data = snapshot.val();
      setSumData(data);
    });

    const funRef = ref(db, "fun/");
    onValue(funRef, (snapshot) => {
      const data = snapshot.val();
      setfunFacts(data);
    });

    const titlesRef = ref(db, "titles/");
    onValue(titlesRef, (snapshot) => {
      const data = snapshot.val();
      settitlesData(data);
    });
  }, []);
  return (
    <section className="flex flex-wrap h-full flex-grow">
      <article className="w-[18rem] mx-auto  md:w-1/2 lg:w-1/2">
        <div className="flex flex-wrap items-center gap-6 text-[1.4rem]">
          <img
            
            src="https://github.com/aldukhn.png"
            alt="Abdulrahman Picture"
            className="h-40 rounded-full  "
          />
          <h1 className="text-5xl font-semibold font-dancingScript tracking-widest">
            {titlesData["4"]}
          </h1>
          <Socials />
        </div>
        <div className="funFacts">
          {funFacts.map((fun, i) => (
            <p key={i} className="text-gray-700 dark:text-gray-400 pt-5">
              <span className="text-green-400"> -</span> {fun.facts}
            </p>
          ))}
        </div>

        {sumData.map((sum, i) => (
          <p className="pt-5 pb-5 text-gray-700 dark:text-gray-400">
            {sum.summ}
          </p>
        ))}
        {/* Projects section*/}

        <h1 className="text-3xl font-semibold pb-5">{titlesData["0"]}</h1>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-1 lg:grid-cols-2 ">
          {projectsData.map((project, i) => (
            <Projectscard
              link={project.github}
              liveLink={project.live}
              title={project.name}
              description={project.description}
              key={i}
            />
          ))}
        </div>
        {/* For Skiils Section */}
        <h1 className="text-3xl font-bold pt-5">{titlesData["1"]}</h1>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-8 ">
          {skillsData.map((skills, i) => (
            <Skills image={skills.image} name={skills.name} key={i} />
          ))}
        </div>
        {/* For Experience Section */}
        <h1 className="text-3xl font-bold pt-5  pb-5">{titlesData["3"]}</h1>
        <div className="grid grid-cols-1  gap-5  md:grid-cols-1 lg:grid-cols-1 ">
          {experienceData.map((experience, i) => (
            <Experience
              link={experience.link}
              title={experience.title}
              description={experience.description}
              date={experience.date}
              key={i}
            />
          ))}
        </div>
        {<br></br>}
        <h1 className="text-3xl font-semibold pb-5">{titlesData["2"]}</h1>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-1 lg:grid-cols-2 ">
          <ExtraSection description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dignissimos provident dolore? Veniam repellendus nemo iure dolorum? Eveniet autem, tenetur a, optio cumque explicabo illo mollitia tempora repellendus labore beatae?" />
        </div>
      </article>
    </section>
  );
}

export default Body;
