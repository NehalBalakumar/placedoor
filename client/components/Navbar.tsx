export default function Navbar(){
    return (
        <nav className="flex justify-between items-center px-8 py-4 shadow-sm bg-white">
            <h1 className= "text-2xl font-bold text-blue-600">
                PlacementDoor
            </h1>

            <div className="space-x-6 text-gray-800 font-medium">
                <button className="hover:text-blue-600 transition cursor-pointer">
                    Companies
                </button>
                <button className="hover:text-blue-600 transition cursor-pointer">
                    Reviews
                </button>
                <button className="hover:text-blue-600 transition cursor-pointer">
                    Login
                </button>
            </div>
        </nav>
    );
}