import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Self from "@/components/Self";

export default function Home() {
  return (
    <div className ="bg-gray-900 w-full min-h-screen">
    <Navbar/>
    <Self/>
    <Footer/>
    </div>
  );
}
