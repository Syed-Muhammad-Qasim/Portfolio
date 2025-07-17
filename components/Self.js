import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function Self() {
  return (
    <div className="bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-800 w-full h-[600px] flex flex-col items-center justify-center">
      <div className="items-center sm:items-center h-[550px] bg-emerald-950 bg-opacity-90 rounded-3xl md:justify-center shadow-2xl flex flex-col  p-8 max-w-md w-full md:flex-row md:max-w-2xl md:gap-3 md:items-start md:h-[550px] md:px-8 py-4 lg:max-w-3xl xl:max-w-5xl lg:h-[500px]">
        <img
          src="Myphoto.png"
          alt="Muhammad Qasim"
          className="w-40 h-40 rounded-full object-cover ring-4 ring-emerald-400 shadow-lg  md:w-60 md:h-60 md:mt-10"
        />

        <span className="flex flex-col items-center md:pt-10">
          <h1 className="text-3xl font-bold text-emerald-400 mb-1 md:text-4xl">
            Muhammad Qasim
          </h1>

          <h2 className="text-xl text-emerald-400 mb-2 md:text-xl">
            Web Developer
          </h2>

          <p className="text-emerald-200 text-center md:text-lg lg:text-xl ">
            I’m a motivated and quick-learning frontend developer with hands-on
            experience in HTML, CSS, JavaScript, React.js, and Next.js. I love
            turning ideas into clean, responsive user interfaces and
            continuously push myself to learn and improve. Every project is a
            new opportunity to grow, build, and challenge my creativity.
          </p>

          <span className="pt-6 flex flex-row gap-4">
            <a
              href="/MuhammadQasimCV.pdf"
              download
              className="px-6 py-3 bg-emerald-400 h-[50px] text-gray-900 rounded-full font-semibold shadow hover:bg-emerald-300 "
            >
              Download CV
            </a>
            <Link href="/project">
            <button className="px-6 py-3 bg-emerald-400 h-[50px] text-gray-900 rounded-full font-semibold shadow hover:bg-emerald-300 ">
                    Projects
            </button>
            </Link>
          </span>

          <span className="flex flex-row gap-4 pt-4">
            <span className="px-2 py-2 w-[36px] h-[36px] rounded-full bg-emerald-900 hover:bg-emerald-400 border border-emerald-800 flex items-center justify-center md:w-[40px] md:h-[40px]">
          <a
            href="https://github.com/Syed-Muhammad-Qasim"   
          >
             <Github className="w-5 h-5 text-emerald-200" />
          </a>
            </span>
            <span className="px-2 py-2 w-[36px] h-[36px] rounded-full bg-emerald-900 hover:bg-emerald-400  border border-emerald-800 flex items-center justify-center md:w-[40px] md:h-[40px]">
            <a
            href="https://www.linkedin.com/in/syed-muhammad-qasim-69374a360/"
            className="p-2 rounded-full  bg-emerald-900 hover:bg-emerald-400 border border-emerald-800 "
          >
           <Linkedin className="w-5 h-5 text-emerald-200" />
          </a>             
              
            </span>
            <span className="px-2 py-2 w-[36px] h-[36px] rounded-full bg-emerald-900 hover:bg-emerald-400  border border-emerald-800 flex items-center justify-center md:w-[40px] md:h-[40px]">
            <a
            href="mailto:moh.qasim1214@gmail.com"
            className="p-2 rounded-full bg-emerald-900 hover:bg-emerald-400 border border-emerald-800 "
          >
           <Mail className="w-5 h-5 text-emerald-200" />
          </a>
              
            </span>
          </span>
        </span>
      </div>
    </div>
  );
}
