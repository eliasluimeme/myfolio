import { useLayoutEffect, useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MENULINKS, SKILLS } from "../../constants";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const loadImageArray = (imageSrcArray) => {
  const imagePromises = imageSrcArray.map((src) => {
    return new Promise((resolve, reject) => {
      const imgElement = new Image();
      imgElement.src = src;
      imgElement.onload = () => resolve();
      imgElement.onerror = (error) => reject(error);
    });
  });
  return Promise.all(imagePromises);
};

const Skills = () => {
  const sectionRef = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const skillImages = Object.values(SKILLS).flat().map(skill => `/skills/${skill}.svg`);
    
    loadImageArray(skillImages)
      .then(() => {
        setImagesLoaded(true);
      })
      .catch((error) => {
        console.error("Failed to load images:", error);
        setImagesLoaded(true); // Set to true even on error to allow rendering
      });
  }, []);

  useLayoutEffect(() => {
    if (!imagesLoaded) return;

    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ paused: true, defaults: { ease: "none" } });

      tl.from(
        sectionRef.current.querySelectorAll(".staggered-reveal"),
        { opacity: 0, duration: 0.5, stagger: 0.5 },
        "<"
      );

      ScrollTrigger.create({
        trigger: sectionRef.current.querySelector(".skills-wrapper"),
        start: "150px bottom",
        end: "center center",
        scrub: 0,
        animation: tl,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [imagesLoaded]);

  useEffect(() => {
    if (imagesLoaded) {
      ScrollTrigger.refresh();
    }
  }, [imagesLoaded]);

  const renderSkillImages = (skills) => (
    <div className="flex flex-wrap gap-6 transform-gpu staggered-reveal">
      {skills.map((skill) => (
        <Image
          key={skill}
          src={`/skills/${skill}.svg`}
          alt={skill}
          width={50}
          height={50}
        />
      ))}
    </div>
  );

  if (!imagesLoaded) {
    return <div>Loading skills...</div>; // Or a more sophisticated loading indicator
  }

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[1].ref}
      className="w-full relative select-none mt-44"
    >
      <div className="section-container py-16 flex flex-col justify-center">
        <img
          src="/right-pattern.svg"
          alt=""
          className="absolute hidden right-0 bottom-2/4 w-2/12 max-w-xs md:block"
          loading="lazy"
          height={700}
          width={320}
        />
        <div className="flex flex-col skills-wrapper">
          <div className="flex flex-col">
            <p className="uppercase tracking-widest text-gray-light-1 staggered-reveal">
              SKILLS
            </p>
            <h1 className="text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal">
              My Skills
            </h1>
            <h2 className="text-[1.65rem] font-medium md:max-w-lg w-full mt-2 staggered-reveal">
              I like to combine technical expertise with creativity to deliver innovative solutions.
            </h2>
          </div>
          <div className="mt-10">
            <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 staggered-reveal">
              LANGUAGES
            </h3>
            {renderSkillImages(SKILLS.languages)}
          </div>
          <div className="mt-10">
            <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 staggered-reveal">
              LIBRARIES AND FRAMEWORKS
            </h3>
            {renderSkillImages(SKILLS.librariesAndFrameworks)}
          </div>
          <div className="flex flex-wrap mt-10">
            <div className="mr-16 xs:mr-20 mb-6">
              <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 staggered-reveal">
                DATABASES
              </h3>
              {renderSkillImages(SKILLS.databases)}
            </div>
            <div className="staggered-reveal">
              <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4">
                TOOLS
              </h3>
              {renderSkillImages(SKILLS.tools)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;