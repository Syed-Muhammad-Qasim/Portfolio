import Footer from "@/components/Footer";
import { Info } from "@/components/Info";
import Navbar from "@/components/Navbar";



export default function about (){
    return(
        <div className ="bg-gray-900 w-full min-h-screen">
        <Navbar/>
        <Info
        Page ={"About Me"}
        title1={"Who I Am"}
        title2={"What I Know"}
        title3={"My Aim"}
        description1="I’m Muhammad Qasim — a passionate and self-driven frontend developer
            who learns best by doing. I enjoy creating user-friendly web
            interfaces and transforming ideas into real digital experiences.
            With a strong curiosity and a problem-solving mindset, I
            continuously seek opportunities to grow as a developer and improve
            my craft. "

        description2="Over time, I’ve built a solid foundation in frontend development. I
            have hands-on experience with HTML, CSS, JavaScript, React.js, and
            Next.js. I'm also comfortable using Tailwind CSS to build responsive
            and modern layouts. I write clean, structured code and believe in
            building applications that are not only functional but also visually
            appealing." 
            
        description3=" I’m currently exploring new tools and technologies to level up my
            development skills — such as TypeScript, UI/UX design principles,
            and animation libraries like Framer Motion. My goal is to build
            high-quality, scalable user interfaces and eventually expand my
            skills toward full-stack development. I’m excited to take on new
            challenges and keep pushing my limits."    
        />
        <Footer/>
        </div>
    )
}