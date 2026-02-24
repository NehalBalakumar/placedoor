import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100">

      <Navbar />
      <Hero />

      {/* Logo Section */}
      <div className="py-24 overflow-hidden">
  <h3 className="text-3xl font-bold text-center mb-16 text-gray-900">
    Trusted by Industry Leaders
  </h3>

  <div className="relative w-full overflow-hidden">
    <div className="flex animate-marquee space-x-20 items-center">

      {[...Array(2)].flatMap(() => [
        "google",
        "microsoft",
        "amazon",
        "meta",
        "ibm",
        "tcs",
        "accenture",
        "razorpay",
        "paytm",
        "cred"
      ]).map((logo, index) => (
        <div key={index} className="flex items-center justify-center">
          <img
            src={`/logos/${logo}.svg`}
            alt={logo}
            className="h-12 w-auto opacity-80 hover:opacity-100 transition-all duration-300 cursor-pointer"
          />
        </div>
      ))}

    </div>
  </div>
</div>

      {/* Footer */}
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
  );
}