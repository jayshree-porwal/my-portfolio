import { BackgroundLines } from "@/components/ui/background-lines";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import TechStack from "@/components/TechStack";
import FeaturedBlogs from "./FeaturedBlogs";

export default function Hero() {
  const typedRef = useRef<HTMLElement | null>(null);
  const typedInstanceRef = useRef<Typed | null>(null);

  useEffect(() => {
    const options = {
      strings: [
        "Web developer",
        "React JS developer",
        "Next.JS developer",
        "MERN developer",
      ],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1500,
      startDelay: 300,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    };

    if (typedRef.current && !typedInstanceRef.current) {
      typedInstanceRef.current = new Typed(typedRef.current, options);
    }
    return () => {
      if (typedInstanceRef.current) {
        typedInstanceRef.current.destroy();
        typedInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className=" p-4 md:p-6 max-w-4xl mx-auto md:mt-10">
      <BackgroundLines
        className="pointer-events-none fixed top-0 left-0 w-full h-full -z-10"
        children={undefined}
      />
      <div className="flex flex-col gap-5 md:flex-row justify-between items-start">
        <div className="order-1 md:order-2">
          <h1 className="text-4xl font-bold">
            <span className="text-gray-500 font-tagesschrift">Hi, I'm </span>
            <span className="bg-gradient-to-r from-fuchsia-600 to-pink-600 text-transparent bg-clip-text font-tagesschrift inline-block w-fit">
              Mayank Gupta
            </span>
          </h1>
          <h2 className="text-lg bg-gradient-to-r from-fuchsia-600 to-pink-600 mt-2 text-transparent bg-clip-text font-bold">
            <span ref={typedRef}></span>
          </h2>
          <p className="text-gray-600 text-left -tracking-wide leading-5 font-serif mt-4 max-w-md dark:text-white">
            Results-driven Software Engineer with 8+ years of experience
            building scalable backend and cloud-native systems using Golang,
            Node.js, and modern DevOps practices. Proven track record in
            reducing latency, improving performance, and cutting costs across
            fintech, insurance, and cybersecurity domains. Passionate about
            clean architecture, system integration, and delivering reliable,
            compliant solutions.
          </p>
        </div>
        <div className="mt-6 md:mt-0 md:order-1 md:mr-8 ">
          <div className="w-32 h-32 md:w-50 md:h-50 border-black dark:border-white border rounded-full p-4">
            <img
              src="/images/profile.png"
              className="w-full h-full object-cover dark:invert"
              alt="Profile illustration"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6">
          <h1 className="inline-block p-4 font-bold font-tagesschrift text-2xl">
            Skills and Tools I Use
          </h1>
      </div>
      <TechStack />
      <FeaturedBlogs/>
    </div>
  );
}
