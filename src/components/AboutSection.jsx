import { Link } from "react-router-dom";

export default function AboutSection() {
    return (
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
                    À propos de <span className="text-[#348AC7] font-poppins ">Daark</span>
                </h2>
                <p className="text-gray-700 font-poppins text-sm sm:text-base">
                    Daark est une plateforme 100% marocaine spécialisée dans la location de logements.
                    Que vous cherchiez un appartement, une maison ou un studio, nous mettons à votre
                    disposition les meilleures offres, adaptées à vos besoins et à votre budget.
                    Notre mission est de simplifier votre recherche et de vous accompagner dans chaque étape de votre location.
                </p>
                <Link to="/advantages" onClick={() => window.scrollTo({ top: 0 })}>
                    <button className="mt-4 bg-[#348AC7] text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-[#348ac7cb] transition">
                        Nos avantages
                    </button>
                </Link>
            </div>
        </div>
    )
}