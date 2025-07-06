import React from "react";

const questionsTechniques = [
  {
    question: "Comment créer un compte sur Daark ?",
    reponse:
      "Cliquez sur 'S’inscrire' en haut à droite, remplissez vos informations personnelles et confirmez votre adresse email.",
  },
  {
    question: "Comment puis-je publier une annonce sur Daark ?",
    reponse:
      "Connectez-vous, ajoutez votre numéro de téléphone si ce n’est pas encore fait, puis cliquez sur 'Publier une annonce'. Remplissez les détails du logement et ajoutez entre 3 et 15 photos.",
  },
  {
    question: "Combien de photos dois-je ajouter pour une annonce ?",
    reponse:
      "Vous devez obligatoirement ajouter entre 3 et 15 photos. Les formats JPG, PNG et WebP sont acceptés.",
  },
  {
    question: "Comment contacter un propriétaire ?",
    reponse:
      "Dans la page de détail de l’annonce, vous trouverez directement le numéro de téléphone du propriétaire pour le contacter facilement.",
  },
  {
    question: "Que signifie le statut 'En attente' pour mon annonce ?",
    reponse:
      "Cela signifie que votre annonce est en cours de vérification par l’équipe de modération. Une fois validée, elle sera visible publiquement.",
  },
];

const questionsFacturation = [
  {
    question: "Mon annonce a été refusée, pourquoi ?",
    reponse:
      "Les annonces peuvent être refusées si elles ne respectent pas les règles (photos insuffisantes, contenu incomplet, doublon…). Vous pouvez la corriger et la republier.",
  },
  {
    question: "Est-ce que Daark est gratuit ?",
    reponse:
      "Oui, l’utilisation de la plateforme est 100% gratuite pour publier ou rechercher des logements.",
  },
  {
    question: "Puis-je supprimer une annonce ?",
    reponse:
      "Oui, vous pouvez supprimer n’importe quelle annonce que vous avez créée depuis votre tableau de bord utilisateur.",
  },
  {
    question: "Est-ce que je peux rechercher un logement par ville ?",
    reponse:
      "Oui, depuis la page d’accueil vous pouvez filtrer les annonces par ville, type de logement, type de location et plage de prix.",
  },
  {
    question: "Quels types de logements sont disponibles ?",
    reponse:
      "Vous pouvez trouver des studios, appartements, maisons ou colocations selon les annonces disponibles.",
  },
];

const FAQ = () => {
  const couleurBullet = "bg-gradient-to-r from-[#348AC7] to-[#7474BF]";

  return (
    <div className="py-4 max-w-screen-sm mx-auto">
      <div className="text-center mt-12 mb-8">
        <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
          Questions <span className="text-[#7474BF]">Fréquemment Posées</span>
        </h3>
      </div>

      <div className="px-10 sm:px-16">
        {/* Section Technique */}
        <div className="py-3 uppercase text-sm text-gray-500 font-medium">Technique</div>
        <div className="ml-5">
          {questionsTechniques.map(({ question, reponse }, index) => (
            <div key={index} className="flex items-start my-8">
              <div
                className={`hidden sm:flex items-center justify-center p-3 mr-3 rounded-full ${couleurBullet} text-white border-4 border-white text-xl font-semibold`}
              >
                <svg
                  width="24px"
                  fill="white"
                  height="24px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g data-name="Layer 2">
                    <g data-name="menu-arrow">
                      <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0" />
                      <path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"></path>
                      <circle cx="12" cy="19" r="1"></circle>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="text-md">
                <h1 className="text-gray-900 font-semibold mb-2">{question}</h1>
                <p className="text-gray-500 text-sm">{reponse}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Section Facturation */}
        <div className="py-3 uppercase text-sm text-gray-500 font-medium">Facturation</div>
        <div className="ml-5">
          {questionsFacturation.map(({ question, reponse }, index) => (
            <div key={index} className="flex items-start my-8">
              <div
                className={`hidden sm:flex items-center justify-center p-3 mr-3 rounded-full ${couleurBullet} text-white border-4 border-white text-xl font-semibold`}
              >
                <svg
                  width="24px"
                  fill="white"
                  height="24px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g data-name="Layer 2">
                    <g data-name="menu-arrow">
                      <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0" />
                      <path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"></path>
                      <circle cx="12" cy="19" r="1"></circle>
                    </g>
                  </g>
                </svg>
              </div>
              <div className="text-md">
                <h1 className="text-gray-900 font-semibold mb-2">{question}</h1>
                <p className="text-gray-500 text-sm">{reponse}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
