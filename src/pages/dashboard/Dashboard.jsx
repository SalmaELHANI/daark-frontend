import { useState } from 'react';
import AnnoncesPage from './AnnoncesPage';
import UsersPage from './UsersPage'; 

function Dashboard() {
  const [currentPage, setCurrentPage] = useState('users');

  const renderContent = () => {
    switch (currentPage) {
      case 'annonce':
        return <AnnoncesPage />;
      case 'users':
        return <UsersPage />;
      default:
        return <div>Page non trouvée</div>;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-200">
     
      <aside className="w-64 bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col justify-between my-6 ml-4">
        <div>
          <div className="p-6 font-bold text-[#7175B6] text-2xl">Tableau de bord</div>
          <nav className="mt-8">
            <button
              onClick={() => setCurrentPage('users')}
              className={`w-full text-left block py-3 px-6 text-gray-700 hover:bg-purple-100
                ${currentPage === 'users' ? 'bg-purple-200 font-semibold' : ''}`}
            >
              Users
            </button>
            <button
              onClick={() => setCurrentPage('annonce')}
              className={`w-full text-left block py-3 px-6 text-gray-700 hover:bg-purple-100
                ${currentPage === 'annonce' ? 'bg-purple-200 font-semibold' : ''}`}
            >
              Annonce
            </button>
          </nav>
        </div>
      </aside>

      
      <div className="flex-1 flex flex-col">
        <main className="p-6 space-y-6">{renderContent()}</main>
      </div>
    </div>
  );
}

export default Dashboard;
