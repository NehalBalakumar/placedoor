export default function Hero(){
    return (
        <div className="flex flex-col items-center justify-center h-[80vh] text-centre px-6 backdrop-blur-lg bg-white/40 rounded-2xl mx-6 shadow-lg">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Discover Real Placement Experiences
            </h2>

            <p className="text-gray-600 text-lg mb-8 max-w-2xl">
                Honest company reviews, real interviewquestions and salary insights shared by students like you.Honest company reviews, real interview questions and salary insights shared by students like you.
            </p>

            <div className="flex w-full max-w-xl shadow-md rounded-lg overflow-hidden">
                <input
                    type="text"
                    placeholder="Search Companies..."
                    className="flex-1 px-5 py-3 focus:outline-none"
                    />
                    <button className="bg-blue-600 text-white px-6 hover:bg-blue-700 transition-all duration-300 hover:scale-105">
                        Search
                    </button>

            </div>
        </div>
    );
}