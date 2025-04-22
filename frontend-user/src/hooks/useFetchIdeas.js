import { useState, useEffect } from 'react';

export const useFetchIdeas = () => {
  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true); // Active le chargement pendant la récupération
    try {
      const response = await fetch('http://localhost:3000/idees');
      const data = await response.json();
      setIdeas(data);
    } catch (error) {
      console.error('Erreur lors de la récupération des idées:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(); // Appel initial des idées
  }, []);

  return { ideas, setIdeas, loading, fetchData }; // Ajout de fetchData
};
