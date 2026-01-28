import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import MouseParticles from "@/components/MouseParticles";
import CustomCursor from "@/components/CustomCursor";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500 selection:text-white">
      <CustomCursor />
      <MouseParticles />
      <WhatsAppButton />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Contact />

      <footer className="py-12 bg-black border-t border-white/5 text-center text-gray-500 text-sm">
        <div className="container mx-auto px-6">
          <p>© {new Date().getFullYear()} Muhammad Suleman Asif. All rights reserved.</p>
          <p className="mt-2">Built with Next.js, Tailwind CSS & Framer Motion</p>
        </div>
      </footer>
    </main>
  );
}
