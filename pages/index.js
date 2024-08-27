import { useState, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Loader from "@/components/Loader/Loader";
import Header from "@/components/Header/Header";
import Menu from "@/components/Header/Menu/Menu";
import ProgressIndicator from "@/components/ProgressIndicator/ProgressIndicator";
import Cursor from "@/components/Cursor/Cursor";
import Hero from "@/components/Hero/Hero";
import About1 from "@/components/About/About1";
import Skills from "@/components/Skills/Skills";
import About2 from "@/components/About/About2";
import Projects from "@/components/Projects/Projects";
import Work from "@/components/Work/Work";
import Collaboration from "@/components/Collaboration/Collaboration";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Education from "@/components/Education/Education";
import { displayFancyLogs } from "utils/log";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import { SKILLS } from "../constants";

gsap.registerPlugin(ScrollTrigger);
gsap.config({ nullTargetWarn: false });

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

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDesktop, setIsDesktop] = useState(true);
  const [clientHeight, setClientHeight] = useState(0);
  const [clientWidth, setClientWidth] = useState(0);

  useEffect(() => {
    const skillImages = Object.values(SKILLS).flat().map(skill => `/skills/${skill}.svg`);
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5600);

    loadImageArray(skillImages)
      .then(() => {
        clearTimeout(timer);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Failed to load images:", error);
        clearTimeout(timer);
        setIsLoading(false);
      });

    displayFancyLogs();

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const { innerWidth, innerHeight, orientation, history } = window;

    const result =
      typeof orientation === "undefined" &&
      navigator.userAgent.indexOf("IEMobile") === -1;
    history.scrollRestoration = "manual";

    setIsDesktop(result);
    setClientHeight(innerHeight);
    setClientWidth(innerWidth);
  }, [isDesktop]);

  return (
    <>
      <SpeedInsights />
      <Analytics />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header>
            <Menu />
          </Header>
          <ProgressIndicator />
          <Cursor isDesktop={isDesktop} />
          <main className="flex flex-col">
            <div
              role="img"
              className="text-gray-light-1 opacity-10 sm:text-9xl xs:text-8xl inline-block -z-10 absolute rotate-90 right-0 md:top-52 xs:top-96"
            >
              DEV
            </div>
            <div className="fixed top-0 left-0 h-screen w-screen -z-1" />
            <Hero />
            <About1 clientHeight={clientHeight} />
            <Skills />
            <About2 clientHeight={clientHeight} />
            <Projects isDesktop={isDesktop} clientHeight={clientHeight} />
            <Work isDesktop={isDesktop} />
            <Education />
            <Collaboration clientHeight={clientHeight} />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}