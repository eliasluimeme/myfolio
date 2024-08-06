import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MENULINKS, SKILLS } from "../../constants";

const Education = () => {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
      const ctx = gsap.context(() => {
        const tl = gsap
          .timeline({ defaults: { ease: "none" } })
          .from(
            sectionRef.current.querySelectorAll(".staggered-reveal"),
            { opacity: 0, duration: 0.5, stagger: 0.5 },
            "<"
          );

        ScrollTrigger.create({
          trigger: sectionRef.current.querySelector(".education-wrapper"),
          start: "100px bottom",
          end: "center center",
          scrub: 0,
          animation: tl,
        });
      });

      return () => ctx.revert();
    }, []);

    return (
        <section
          ref={sectionRef}
          id={MENULINKS[1].ref}
          className="w-full relative select-none mt-44"
        >
          <div className="section-container py-16 flex flex-col justify-center">
            <div className="flex flex-col education-wrapper py-10">
                <div className="flex flex-col">
                  <p className="uppercase tracking-widest text-gray-light-1 staggered-reveal">
                    EDUCATION
                  </p>
                  <h1 className="text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal">
                    Education
                  </h1>
                  <h2 className="text-[1.65rem] font-medium md:max-w-lg w-full mt-2 staggered-reveal">
                    Where it's all started.{" "}
                  </h2>
                </div>
                    <div className="flex flex-col pt-20 staggered-reveal">
                        <div className="mockup-code text-primary-content p-2 my-2 rounded-lg shadow-lg max-w-md mx-auto overflow-x-auto">
                        <pre data-prefix="$" className="px-2 py-1 text-sm"><code>npm graduat from <a href="https://1337.ma/en/" target="_blank" rel="noopener noreferrer" className="hover:text-white">1337</a> - <a href="https://42.fr/en/homepage/" target="_blank" rel="noopener noreferrer" className="hover:text-white">42 Network</a></code></pre>
                        <pre data-prefix=">" className="text-success px-2 py-1 text-sm"><code>graduating...</code></pre>
                        <pre data-prefix=">" className="text-success px-2 py-1 text-sm"><code>Current status GRADUATED</code></pre>
                        <pre data-prefix=">" className="text-success px-2 py-1 text-sm"><code>Done!</code></pre>
                        <pre data-prefix="$" className="px-2 py-1 text-sm"><code>npm start hustling</code></pre>
                        <pre data-prefix=">" className="text-warning px-2 py-1 text-sm"><code>starting development process...</code></pre>
                    </div>
                </div>
              </div>
            </div>
        </section>

        // <div className="section-container py-16 flex flex-col justify-center">
        //     <div className="flex flex-col work-wrapper">
        //       <div className="flex flex-col">
        //         <p className="uppercase tracking-widest text-gray-light-1 staggered-reveal">
        //           EDUCATION
        //         </p>
        //         <h1 className="text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal">
        //           Education
        //         </h1>
        //         <h2 className="text-[1.65rem] font-medium md:max-w-lg w-full mt-2 staggered-reveal">
        //           Where it's all started.{" "}
        //         </h2>
        //       </div>
        //       {/* <div className="mockup-code bg-primary text-primary-content p-2 my-2 rounded-lg shadow-lg max-w-md mx-auto overflow-x-auto">
        //         <pre data-prefix="$" className="px-2 py-1 text-sm"><code>npm i daisyui</code></pre>
        //         <pre data-prefix=">" className="text-success px-2 py-1 text-sm"><code>installing...</code></pre>
        //         <pre data-prefix=">" className="text-success px-2 py-1 text-sm"><code>Done!</code></pre>
        //         <pre data-prefix="$" className="px-2 py-1 text-sm"><code>npm start</code></pre>
        //         <pre data-prefix=">" className="text-warning px-2 py-1 text-sm"><code>starting development server...</code></pre>
        //       </div> */}
        //     </div>
        // </div>
        
    )
}

export default Education;