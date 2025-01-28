import Image from "next/image";
import HeroSection from "@/components/Herosection";
import FeaturedCourses from "@/components/FeaturedCourse";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
    <main className="min-h-screen antialiased bg-black/[0.96]">
    <HeroSection/>
    <FeaturedCourses/>
    <UpcomingWebinars/>
    <MusicSchoolTestimonials/>
    <Footer/>
    </main>
    </>
  
  );
}
