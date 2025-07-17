import Footer from "@/components/Footer";
import { Info } from "@/components/Info";
import Navbar from "@/components/Navbar";

export default function project() {
  return (
    <div className="bg-gray-900 w-full min-h-screen">
      <Navbar />
      <Info
        Page={"Projects"}
        title1={"Stream View"}
        title2={"Movie App"}
        title3={"Crypto Hunter"}
        description1=" StreamView is a React-based YouTube clone that features a user-friendly sign-up page and dynamically fetches YouTube
 content using APIs. The project mimics core YouTube functionality, allowing users to explore trending videos and search
 content seamlessly. This project was built using React.js for dynamic UI, along with HTML and CSS for structure and styling."
        description2="A React.js-based movie and TV show app featuring dynamic content fetched from the TMDb API. Utilized prop drilling React Router for navigation, and real-time API integration to display categorized sections like Top Rated, Upcoming, and Now Playing titles.This project was built using React.js for dynamic UI, along with HTML and CSS for structure and styling."
        description3="Crypto Hunter is a React-based web app that fetches real-time cryptocurrency data using an external API. It utilizes React Context for state management and includes a search functionality to filter and display live rates of various currencies against Bitcoin.This project was built using React.js for dynamic UI, along with HTML and CSS for structure and styling."
        projectlink1="https://qasim-youtube-clone.vercel.app/"
        projectlink2="http://qasim-movieapp.vercel.app"
        projectlink3="https://qasim-crypto-hunter.vercel.app/"
      />
      <Footer/>
    </div>
  );
}
