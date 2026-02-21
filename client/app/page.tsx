export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100">
      
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 shadow-sm bg-white">
        <h1 className="text-2xl font-bold text-blue-600">
          PlacementDoor
        </h1>

        <div className="space-x-6 text-gray-800 font-medium">
          <button className="hover:text-blue-600 transition cursor-pointer">Companies</button>
          <button className="hover:text-blue-600 transition cursor-pointer">Reviews</button>
          <button className="hover:text-blue-600 transition cursor-pointer">Login</button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center h-[80vh] text-center px-6 backdrop-blur-lg bg-white/40 rounded-2xl mx-6 shadow-lg">

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Discover Real Placement Experiences
        </h2>

        <p className="text-gray-600 text-lg mb-8 max-w-2xl">
          Honest company reviews, real interviewquestions and salary insights shared by students like you.
        </p>

      <div className="flex w-full max-w-xl shadow-md rounded-lg overflow-hidden">
       <input
      type="text"
      placeholder="Search companies..."
      className="flex-1 px-5 py-3 focus:outline-none"
    />
    <button className="bg-blue-600 text-white px-6 hover:bg-blue-700 transition-all duration-300 hover:scale-105">
      Search
    </button>

      </div>

      </div>

    {/* Featured Companies Section */}
<div className="px-10 pb-20">
  <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
    Featured Companies
  </h3>

  <div className="grid md:grid-cols-3 gap-8">
    
    <div className="bg-white/60 backdrop-blur-lg p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
      <h4 className="text-lg font-semibold">TCS</h4>
      <p className="text-yellow-500 mt-2">⭐ 3.8</p>
      <p className="text-gray-600 text-sm mt-1">120 Reviews</p>
    </div>

    <div className="bg-white/60 backdrop-blur-lg p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
      <h4 className="text-lg font-semibold">Infosys</h4>
      <p className="text-yellow-500 mt-2">⭐ 4.1</p>
      <p className="text-gray-600 text-sm mt-1">95 Reviews</p>
    </div>

    <div className="bg-white/60 backdrop-blur-lg p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
      <h4 className="text-lg font-semibold">Wipro</h4>
      <p className="text-yellow-500 mt-2">⭐ 3.5</p>
      <p className="text-gray-600 text-sm mt-1">80 Reviews</p>
    </div>

  </div>
</div>

    </div>
  );
}