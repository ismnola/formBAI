import React from 'react';
import '../App.css';
import IdeeForm from '../components/IdeeForm';

function Home() {
  return (
    <div className="min-h-screen bg-[conic-gradient(at_bottom_right,_#1d4ed8,_#1e40af,_#111827)] flex flex-col justify-center items-center">
      <div className="max-w-4xl bg-white shadow-md rounded-lg overflow-hidden mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Boîte à idées */}
        <div className="mb-4 content-center">
          <h2 className="text-gray-700 font-semibold text-2xl tracking-wide mb-2">Boîte à idées</h2>
          <p className="text-gray-500 text-base">
            Respect et bienveillance, proposez vos idées et commentaires de manière respectueuse et constructive, en évitant toute critique personnelle.
          </p>
          <img className="mx-auto w-1/2" src="Logo-OPT.png" alt="Logo-OPT" />
          <p className="text-gray-600 text-sm font-semibold mt-6">
            *Respectez la confidentialité des idées partagées et évitez de divulguer des informations sensibles ou confidentielles.
          </p>
        </div>
              {/* Formulaire de soumission d'idées */}
      <div>
        <IdeeForm />
      </div>
      </div>
      

    </div>
  );
}


export default Home;