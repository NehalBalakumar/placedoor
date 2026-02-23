export default function Hero(){
    return (
        <div className="flex flex-col items-center justify-center min-h-[85vh] pt-10 text-center px-6 backdrop-blur-lg bg-white/40 rounded-2xl mx-6 shadow-lg animate-fadeIn">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Discover Real Placement Experiences
            </h2>

            <p className="text-gray-700 text-lg md:text-xl mb-8 max-w-2xl leading-relaxed font-medium tracking-wide">
                Get <span className="text-blue-600 font-semibold">real placement experiences</span>, 
                <span className="text-indigo-600 font-semibold"> verified salary insights </span> 
                and honest interview stories shared by students across India.
            </p>

            <div className="flex w-full max-w-xl bg-white rounded-full shadow-lg overflow-hidden">
                <input
                    type="text"
                    placeholder="Search companies..."
                    className="flex-1 px-6 py-3 rounded-1-full focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800"
                    />
                <button className="bg-blue-600 text-white px-6 rounded-r-full hover:bg-blue-700 transition-all duration-300">
                    Search
                </button>
            </div>
        </div>
    );
}