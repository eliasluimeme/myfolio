import { useLayoutEffect, useRef } from "react";
import Image from 'next/image';
import { motion } from 'framer-motion';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const About1 = ({ clientHeight }) => {
  const sectionRef = useRef(null);
  const quoteRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline({
          defaults: { ease: "none", duration: 0.1 },
        })
        .fromTo(
          quoteRef.current.querySelector(".about-1"),
          { opacity: 0.2 },
          { opacity: 1 }
        )
        .to(quoteRef.current.querySelector(".about-1"), {
          opacity: 0.2,
          delay: 0.5,
        })
        .fromTo(
          quoteRef.current.querySelector(".about-2"),
          { opacity: 0.2 },
          { opacity: 1 },
          "<"
        )
        .to(quoteRef.current.querySelector(".about-2"), {
          opacity: 0.2,
          delay: 1,
        });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "center 80%",
        end: "center top",
        scrub: 0,
        animation: tl,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full relative select-none">
      <motion.div
        className="w-screen mt-6"
        whileHover={{ filter: 'grayscale(0%)' }}
        initial={{ filter: 'grayscale(100%)' }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <Image
          src="/about/img.svg"
          alt=""
          width={1920}
          height={1080}
          className="select-none bg-repeat-x"
          priority
        />
      </motion.div>

      <div
        className={`${
          clientHeight > 650 ? "pt-28 pb-16" : "pt-80 pb-72"
        } section-container`}
      >
        <h1
          ref={quoteRef}
          className="font-medium text-[2.70rem] md:text-6xl lg:text-[4rem] text-center"
        >
          <span className="about-1 leading-tight">
            I&apos;m a passionate Engineer who&apos;s focused on building
            scalable and innovative solutions.{" "}
          </span>
          <span className="about-2 leading-tight">
          Combining technical proficiency with strong problem-solving and passion for continuous learning.{" "}
          </span>
        </h1>
      </div>
    </section>
  );
};

export default About1;
