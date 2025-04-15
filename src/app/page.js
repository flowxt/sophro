import Header from "@/components/Header";
import Hero from "@/components/Hero";
import APropos from "@/components/APropos";
import SophroAnalyse from "@/components/SophroAnalyse";
import Constellations from "@/components/Constellations";
import Magnetisme from "@/components/Magnetisme";
import PourQui from "@/components/PourQui";
import Cabinet from "@/components/Cabinet";
import Reservations from "@/components/Reservations";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <APropos />
      <div id="approches">
        <SophroAnalyse />
        <Constellations />
        <Magnetisme />
      </div>
      <PourQui />
      <Cabinet />
      <Reservations />
      <Contact />
      <Footer />
    </main>
  );
}
// Test
