type CompanyCardProps = {
    name: string;
    rating: string;
    reviews: string;
};

export default function CompanyCard ({name, rating, reviews,}: CompanyCardProps){
    return(
        <div className="bg-white/60 backdrop-blur-lg p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover: -translate-y-2 cursor-pointer">
            <h4 className="text-lg font-semibold">{name}</h4>
            <p className="text-yellow-500 mt-2">⭐ {rating}</p>
            <p className="text-gray-600 text-sm mt-1">{reviews} Reviews</p>
        </div>
    );
}