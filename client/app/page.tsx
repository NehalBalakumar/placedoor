import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100">

      <Navbar />
      <Hero />

      {/* Featured Companies Section */}
      <div className="py-28 relative overflow-hidden">

        <h3 className="text-3xl font-bold text-center mb-20 text-gray-900">
          Trusted by Industry Leaders
        </h3>

        {/* Glass Background */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="w-[90%] h-28 bg-white/40 backdrop-blur-xl rounded-3xl shadow-lg"></div>
        </div>

        {/* Moving Logos */}
        <div className="relative fade-mask overflow-hidden">
          <div className="flex animate-marquee gap-20 items-center">

            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-20 items-center">

                {/* Google */}
                <img
                  src="/logos/google.png"
                  alt="Google"
                  className="h-12 object-contain mix-blend-multiply transition-all duration-500 hover:scale-125 hover:-translate-y-2 hover:drop-shadow-[0_15px_30px_rgba(0,0,0,0.25)] cursor-pointer"
                />

                {/* Microsoft */}
                <img
                  src="/logos/microsoft.png"
                  alt="Microsoft"
                  className="h-12 object-contain mix-blend-multiply transition-all duration-500 hover:scale-125 hover:-translate-y-2 hover:drop-shadow-[0_15px_30px_rgba(0,0,0,0.25)] cursor-pointer"
                />

                {/* Amazon */}
                <img
                  src="/logos/amazon.png"
                  alt="Amazon"
                  className="h-12 object-contain mix-blend-multiply transition-all duration-500 hover:scale-125 hover:-translate-y-2 hover:drop-shadow-[0_15px_30px_rgba(0,0,0,0.25)] cursor-pointer"
                />

                {/* Spotlight Logo */}
                <img
                  src="/logos/meta.png"
                  alt="Meta"
                  className="h-14 scale-110 object-contain mix-blend-multiply transition-all duration-500 hover:scale-140 hover:-translate-y-3 hover:drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)] cursor-pointer"
                />

                {/* PayPal */}
                <img
                  src="/logos/paypal.png"
                  alt="PayPal"
                  className="h-12 object-contain mix-blend-multiply transition-all duration-500 hover:scale-125 hover:-translate-y-2 hover:drop-shadow-[0_15px_30px_rgba(0,0,0,0.25)] cursor-pointer"
                />

                {/* GitHub */}
                <img
                  src="/logos/github.png"
                  alt="GitHub"
                  className="h-12 object-contain mix-blend-multiply transition-all duration-500 hover:scale-125 hover:-translate-y-2 hover:drop-shadow-[0_15px_30px_rgba(0,0,0,0.25)] cursor-pointer"
                />

              </div>
            ))}

          </div>
        </div>

      </div>

    </div>
  );
}