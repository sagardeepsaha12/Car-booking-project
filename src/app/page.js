import Subfooter from "@/_components/Subfooter";
import Carousels from "@/_components/Carousel";
import Image from "next/image";
import Explore from "@/_components/Explore";
import Header from "@/_components/Header";
import OurObjective from "@/_components/OurObjective";
export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header />
     <Carousels/>
     <div className="relative">
      <Explore />
       <Subfooter />
       <OurObjective />
     </div>
    </div>
    
  );
}
