import FilterBar from "../components/annonces/SearchFilter";
import Cards from "./cards";


const Home = () => {
    return (
    
        <div className="relative">
            <div
                className="flex flex-col items-center justify-center text-white px-4 py-6 sm:py-10 md:py-10 bg-gradient-to-b from-[#7474BF] to-[#348AC7]"
            >
                <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2 font-poppins">
                    Search according to your needs
                </h1>
                <p className="text-base sm:text-lg text-center max-w-xl font-poppins ">
                    Discover the best opportunities and make your dream become reality.
                </p>

                <div className="w-full max-w-3xl mt-6">
                    <FilterBar />
                </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:mt-10 max-w-screen-xl mx-auto px-4 mt-20">
                <div className="sm:w-1/2 w-full p-4 sm:p-10">
                    <div className="text-center">
                        <img
                            className="rounded-lg w-full h-auto object-cover max-h-[400px]"
                            src="https://images.squarespace-cdn.com/content/v1/5f7f580e2a273179f84ceaee/ca4b0cab-42e4-46bf-ab43-430baa8c997c/riad-elegancia2.jpg"
                            alt="About Our Company"
                        />
                    </div>
                </div>

                <div className="sm:w-1/2 w-full p-4 sm:p-5 text-center sm:text-left">
                    <h2 className="my-4 font-bold text-2xl sm:text-3xl md:text-4xl">
                        About <span className="text-[#348AC7] font-poppins ">Our Company</span>
                    </h2>
                    <p className="text-gray-700 font-poppins text-sm sm:text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
                        commodi doloremque, fugiat illum magni minus nisi nulla numquam
                        obcaecati placeat quia, repellat tempore voluptatum.
                    </p>
                    <button className="mt-4 bg-[#348AC7] text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-[#348ac7cb] transition">
                        Get Started
                    </button>
                </div>
            </div>
            <Cards />
        </div>

    );
};

export default Home;