import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CompanyCard from "../components/CompanyCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100">
      
      <Navbar />

      <Hero />

      {/* Featured Companies Marquee */}
<div className="py-20 overflow-hidden">

  <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
    Trusted by Top Companies
  </h3>

  <div className="relative w-full overflow-hidden">
    <div className="flex animate-marquee space-x-16">

      {[
        { name: "Google", color: "text-blue-500" },
        { name: "Microsoft", color: "text-green-600" },
        { name: "Amazon", color: "text-yellow-500" },
        { name: "TCS", color: "text-indigo-600" },
        { name: "Infosys", color: "text-purple-600" },
        { name: "Wipro", color: "text-red-500" },
        { name: "Razorpay", color: "text-blue-600" },
        { name: "Zomato", color: "text-red-600" },
        { name: "CRED", color: "text-black" },
      ].map((company, index) => (
        <div
          key={index}
          className={`text-2xl font-bold ${company.color} hover:scale-110 transition-transform duration-300 cursor-pointer`}
        >
          {company.name}
        </div>
      ))}

    </div>
  </div>


      <footer className="bg-white/60 backdrop-blur-lg mt-20 py-10 text-center">
  <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
  <div className="flex justify-center space-x-6 text-xl">
    <span className="cursor-pointer hover:text-pink-500">📸</span>
    <span className="cursor-pointer hover:text-gray-800">🐙</span>
    <span className="cursor-pointer hover:text-blue-700">💼</span>
    <span className="cursor-pointer hover:text-blue-400">🐦</span>
    <span className="cursor-pointer hover:text-orange-500">👽</span>
    <span className="cursor-pointer hover:text-blue-600">📘</span>
  </div>
  <p className="text-sm text-gray-600 mt-4">
    © 2026 PlacementDoor. All rights reserved.
  </p>
</footer>

      </div>

    </div>
  );
}