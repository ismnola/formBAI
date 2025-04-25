import React, { useState } from 'react';

// Composant pour le formulaire d'envoi d'idée
function IdeeForm() {
  // État pour stocker l'idée saisie par l'utilisateur
  const [idee, setIdee] = useState('');
  // État pour stocker le message de réponse du serveur
  const [message, setMessage] = useState('');

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (event) => {
    event.preventDefault(); // Empêche le rechargement de la page

    try {
      const response = await fetch('https://expressbai-production.up.railway.app/ajouter-idee', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ idee }) 
      });
      const result = await response.json();

      if (response.ok) {
        setMessage({ text: result.message, type: 'success' });
      } else {
        setMessage({ text: result.error, type: 'error' });
      }
    } catch (error) {
      // Gestion des erreurs lors de l'envoi de la requête
      console.error('Erreur lors de l\'envoi de l\'idée:', error);
      setMessage({ text: 'Erreur lors de l\'envoi de l\'idée.', type: 'error' });
    }
  };

  const handleOkClick = () => {
    setMessage(null);
    window.location.reload();
  };

  return (
    <div className="max-w-lg bg-white shadow-sm rounded-lg overflow-hidden mx-auto">
      <div className="py-4 px-8 mt-3">
        <div className="flex flex-col mb-8">
          <h2 className="text-gray-700 font-semibold text-2xl tracking-wide mb-2">Partagez votre idée</h2>
        </div>
        <div className="bg-gray-100 rounded-lg">
          <div className="py-4 px-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <textarea
                value={idee}
                onChange={(e) => setIdee(e.target.value)}
                rows="5"
                minLength="10"
                required
                className="min-w-full p-2 min-h-50 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
              <button
                type="submit"
                className="block w-full tracking-widest uppercase text-center shadow bg-[#ffd500] hover:bg-yellow-300 text-gray-900 focus:shadow-outline focus:outline-none text-xs py-3 px-10 rounded cursor-pointer"
              >
                Envoyer l'idée
              </button>
            </form>
          </div>
        </div>
  
{/* Affichage du message sous forme de pop-up */}
{message && message.type === 'success' && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm">
          <div className="bg-gray-100 p-6 rounded shadow-lg text-center">
            <p className="mb-4">{message.text}</p>
            <button
              onClick={() => {
                setIdee("");// vide la zone de texte
                setMessage(null);}}// retire le pop-up
                 
              className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded cursor-pointer"
            >
              OK
            </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default IdeeForm;
