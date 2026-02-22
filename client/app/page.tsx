import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CompanyCard from "../components/CompanyCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100">
      
      <Navbar />

      <Hero />

      <div className="px-10 pb-20">
        <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          Featured Companies
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          <CompanyCard name="TCS" rating="3.8" reviews="120" />
          <CompanyCard name="Infosys" rating="4.1" reviews="95" />
          <CompanyCard name="Wipro" rating="3.5" reviews="80" />
        </div>
      </div>

    </div>
  );
}