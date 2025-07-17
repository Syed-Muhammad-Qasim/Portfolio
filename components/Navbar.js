import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  return (
    <nav className="flex flex-row items-center bg-emerald-950 border-b-2 border-emerald-800 w-full h-[100px] gap-2">
      <span className="inline-block bg-emerald-950 border-t border-emerald-800 p-2 rounded sm:ml-4 lg:ml-20 xl:ml-30 xl:flex items-center h-full">
        <img
          src="DevMQicon.png"
          alt="DevMQ Icon"
          className="w-[90px] h-[90px] object-contain"
        />
      </span>
      <span className="flex flex-row items-center gap-10 text-white text-xl ml-auto  lg:gap-14 xl:gap-24">
        <span className=" flex flex-row gap-2">
          <Link href="/">
            <h1 className="hidden md:flex text-emerald-200 hover:text-emerald-400 transition">
              Home
            </h1>
          </Link>
        </span>
        <span className=" flex flex-row gap-1">
          <Link href="/about">
            <h1 className="hidden md:flex text-emerald-200 hover:text-emerald-400 transition">
              About
            </h1>
          </Link>
        </span>
        <span className=" flex flex-row gap-1">
          <Link href="/project">
            <h1 className="hidden md:flex text-emerald-200 hover:text-emerald-400 transition">
              Projects
            </h1>
          </Link>
        </span>
        <span className=" flex flex-row gap-1">
          <Link href ="/contact">
          <h1 className="hidden md:flex text-emerald-200 hover:text-emerald-400 transition">
            Contact
          </h1>
          </Link>
        </span>
      </span>
      <button className="bg-emerald-400 text-emerald-950 text-xl ml-auto mr-4 w-[110px] h-[30px] my-9 rounded-full hover:bg-emerald-300 hover:text-emerald-900 transition">
        Hire me
      </button>
      <select
        className="md:hidden ml-auto mr-4 my-9 rounded bg-emerald-950"
        value={router.pathname=== "/" ? "/" :router.pathname}
        onChange={(e) => {
          if (e.target.value) window.location.href = e.target.value;
        }}
       
      >
        <option value="/">Home</option>
        <option value="/about">About</option>
        <option value="/project">Projects</option>
        <option value="/contact">Contact</option>
      </select>
    </nav>
  );
}
