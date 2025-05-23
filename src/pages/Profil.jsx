import React from 'react';

const UserProfile = () => {
  const firstName = 'Sarah';
  const lastName = 'Johnson';
  const phone = '+212 600-000000';
  const email = 'sarah.johnson@example.com';

  const initials = `${firstName[0]}${lastName[0]}`.toUpperCase();

  return (
    <div className="flex items-center justify-center min-h-screen p-2 bg-gray-100">
      <div className="max-w-md w-full bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
        
        {/* Couverture */}
        <div className="h-32 bg-gradient-to-r from-[#7474BF] to-[#348AC7] relative">
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
            {/* Avatar avec initiales */}
            <div className="h-24 w-24 rounded-full border-4 border-white bg-indigo-600 text-white flex items-center justify-center text-3xl font-bold">
              {initials}
            </div>
          </div>
        </div>

        {/* Informations */}
        <div className="pt-16 pb-8 px-6 text-center">
          <h3 className="text-xl font-bold text-gray-800">{firstName} {lastName}</h3>
          <p className="text-indigo-600 font-medium">{phone}</p>
          <p className="text-gray-500 mt-1">{email}</p>

          {/* Boutons */}
          <div className="mt-8 flex justify-center space-x-3">
            <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition duration-150 ease-in-out">
              Mes Annonces
            </button>
            <button className="flex-1 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-2 px-4 rounded-lg transition duration-150 ease-in-out">
              Se Déconnecter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
