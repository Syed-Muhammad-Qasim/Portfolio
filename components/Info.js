import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiCplusplus,
  SiC,
} from "react-icons/si";
import { SiCss3 } from "react-icons/si";

export function Info({
  Page,
  title1,
  title2,
  title3,
  description1,
  description2,
  description3,
  projectlink1,
  projectlink2,
  projectlink3,
}) {
  return (
    <div className="bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-800 w-full min-h-screen flex flex-col items-center gap-2 overflow-y-auto md:h-[600px] ">
      <h1 className="text-emerald-400 font-bold text-4xl mt-6 mb-4 underline decoration-emerald-800 decoration-4 underline-offset-8">
        {Page}
      </h1>
      <div className="flex flex-col w-full items-center gap-6 md:flex-row md:justify-center">
        <div className="items-center h-[450px] bg-emerald-950 border border-emerald-800 shadow-xl rounded-3xl flex flex-col p-8 max-w-md w-full md:h-[490px] lg:h-[510px] xl:h-[490px] hover:scale-105 ">
          <h2 className="text-emerald-400 font-bold text-3xl my-4 md:text-2xl lg:text-3xl xl:text-4xl">
            {title1}
          </h2>
          <p className="text-emerald-200 text-md md:text-sm lg:text-lg xl:text-xl text-center">
            {description1}
          </p>
          {projectlink1 && (
            <a
              href={projectlink1}
              className="mt-4 inline-block px-4 py-2 bg-green-400 text-gray-900 rounded-lg shadow hover:bg-green-300 "
            >
              View Project
            </a>
          )}
        </div>
        <div className="items-center h-[450px] bg-emerald-950 border border-emerald-800 shadow-xl rounded-3xl flex flex-col p-8 max-w-md w-full md:h-[490px] lg:h-[510px] xl:h-[490px]  hover:scale-105">
          <h2 className="text-emerald-400 font-bold text-3xl my-4 md:text-2xl lg:text-3xl xl:text-4xl">
            {title2}
          </h2>
          <p className="text-emerald-200 text-md md:text-sm lg:text-lg xl:text-xl text-center">
            {description2}
          </p>
          {projectlink2 && (
            <a
              href={projectlink2}
              className="mt-4 inline-block px-4 py-2 bg-green-400 text-gray-900 rounded-lg shadow hover:bg-green-300 "
            >
              View Project
            </a>
          )}
        </div>
        <div className=" items-center h-[450px] bg-emerald-950 border border-emerald-800 shadow-xl rounded-3xl flex flex-col p-8 max-w-md w-full md:h-[490px] lg:h-[510px] xl:h-[490px] hover:scale-105">
          <h2 className="text-emerald-400 font-bold text-3xl my-4 md:text-2xl lg:text-3xl xl:text-4xl">
            {title3}
          </h2>
          <p className="text-emerald-200 text-md md:text-sm lg:text-lg xl:text-xl text-center">
            {description3}
          </p>
          {projectlink3 && (
            <a
              href={projectlink3}
              className="mt-4 inline-block px-4 py-2 bg-green-400 text-gray-900 rounded-lg shadow hover:bg-green-300 "
            >
              View Project
            </a>
          )}
        </div>
      </div>
      <div className="flex flex-row justify-center  h-[200px] w-full px-4 gap-6 flex-wrap items-center">
        <div className=" flex items-center pl-4 w-[80px] h-[80px] bg-emerald-900 bg-opacity-80  shadow-2xl md:w-[100px] md:h-[100px] md:pl-6 hover:scale-120">
          <SiHtml5 className="text-white bg-[#E34F26] w-[50px] h-[60px] " />
        </div>
        <div className=" flex items-center pl-4 w-[80px] h-[80px] bg-emerald-900 bg-opacity-80  shadow-2xl md:w-[100px] md:h-[100px] md:pl-6 hover:scale-120">
          <SiCss3 className="text-white bg-[#1572B6] w-[50px] h-[60px] " />
        </div>
        {Page === "About Me" && (
          <div className=" flex items-center pl-4 w-[80px] h-[80px] bg-emerald-900 bg-opacity-80  shadow-2xl md:w-[100px] md:h-[100px] md:pl-6 hover:scale-120">
            <SiJavascript className="text-[#F7DF1E] w-[50px] h-[60px] " />
          </div>
        )}

        <div className=" flex items-center pl-4 w-[80px] h-[80px] bg-emerald-900 bg-opacity-80  shadow-2xl md:w-[100px] md:h-[100px] md:pl-6 hover:scale-120">
          <SiReact className="text-[#61DAFB] w-[50px] h-[60px] " />
        </div>
        {Page === "About Me" && (
          <div className=" flex items-center pl-4 w-[80px] h-[80px] bg-emerald-900 bg-opacity-80  shadow-2xl md:w-[100px] md:h-[100px] md:pl-6 hover:scale-120">
            <SiNextdotjs className="text-white w-[50px] h-[60px] " />
          </div>
        )}

        {Page === "About Me" && (
          <div className=" flex items-center pl-4 w-[80px] h-[80px] bg-emerald-900 bg-opacity-80  shadow-2xl md:w-[100px] md:h-[100px] md:pl-6 hover:scale-120">
            <SiCplusplus className=" text-white p-1 bg-[#00599C]  w-[50px] h-[60px] " />
          </div>
        )}

        {Page === "About Me" && (
          <div className=" flex items-center pl-4 w-[80px] h-[80px] bg-emerald-900 bg-opacity-80  shadow-2xl md:w-[100px] md:h-[100px] md:pl-6 hover:scale-120">
            <SiC className=" text-white p-1 bg-[#A8B9CC]  w-[50px] h-[60px] " />
          </div>
        )}
      </div>
    </div>
  );
}
