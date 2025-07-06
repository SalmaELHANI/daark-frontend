import AboutSection from '../components/AboutSection';

const About = () => {
    return (
        <div className="min-h-screen bg-white">
            <AboutSection />

            <section className="bg-white font-poppins">
                <div className="gap-16 items-center py-12 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-20 lg:px-6">

                    <div className="text-gray-700 sm:text-lg">
                        <h2 className="mb-6 text-4xl tracking-tight font-extrabold text-gray-900 ">
                            Pourquoi choisir <span className="text-[#348AC7]">Daark</span>
                        </h2>

                        <p className="mb-5 text-sm sm:text-base leading-relaxed">
                            Notre mission est claire : <strong>simplifier</strong> le processus de recherche, <strong>gagner du temps</strong> et <strong>éviter les mauvaises surprises</strong>.
                            Fini les annonces douteuses, les appels sans réponse ou les déplacements inutiles. Chez Daark, nous centralisons des offres fiables, avec photos, descriptions claires et informations vérifiées.
                        </p>

                        <ul className="list-disc pl-5 text-sm sm:text-base mb-5 leading-relaxed">
                            <li>Des annonces vérifiées et mises à jour</li>
                            <li>Un système de filtres pour trouver rapidement ce que vous cherchez</li>
                            <li>Une interface simple et intuitive</li>
                            <li>Un suivi transparent du statut de vos annonces</li>
                            <li>Une assistance réactive et locale</li>
                        </ul>

                        <p className="text-sm sm:text-base leading-relaxed">
                            Que vous soyez étudiant, famille ou professionnel, <strong>Daark</strong> est là pour vous offrir une expérience de location moderne, fluide et 100% en ligne.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-10 lg:mt-0">
                        <img
                            className="w-full h-full rounded-lg object-cover"
                            src="https://i.pinimg.com/736x/ae/1f/f7/ae1ff7cfec52ef80dbad03487a64e7ff.jpg"
                            alt="logement marocain 1"
                        />
                        <img
                            className="w-full h-full rounded-lg object-cover mt-4 lg:mt-10"
                            src="https://i.pinimg.com/736x/cc/9a/ae/cc9aaefc63841f07b0cfb322c5aa62fa.jpg"
                            alt="logement marocain 2"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
