import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-emerald-950 py-4 border-t border-emerald-800">
      <div className="max-w-6xl mx-auto flex flex-row md:flex-row items-center justify-between px-6">
        
      <span className="inline-block ">
        <img
          src="DevMQicon.png"
          alt="DevMQ Icon"
          className="h-[90px] w-[100px] object-contain"
        />
      </span>
        
      
        <div className="hidden md:flex flex-row gap-4 mb-2 md:mb-0 ">
          <a
            href="mailto:moh.qasim1214@gmail.com"
            className="p-2 rounded-full bg-emerald-900 hover:bg-emerald-400 border border-emerald-800 "
          >
            <Mail className="w-5 h-5 text-emerald-200" />
          </a>
          <a
            href="https://github.com/Syed-Muhammad-Qasim"
            className="p-2 rounded-full bg-emerald-900 hover:bg-emerald-400 border border-emerald-800 " 
          >
            <Github className="w-5 h-5 text-emerald-200 hover:text-gray-900" />
          </a>
          <a
            href="https://www.linkedin.com/in/syed-muhammad-qasim-69374a360/"
            className="p-2 rounded-full  bg-emerald-900 hover:bg-emerald-400 border border-emerald-800 "
          >
            <Linkedin className="w-5 h-5 text-emerald-200 hover:text-gray-900" />
          </a>
        </div>
       
        <div className="text-green-400 text-sm text-center md:text-right">
          &copy; {new Date().getFullYear()} Muhammad Qasim. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
