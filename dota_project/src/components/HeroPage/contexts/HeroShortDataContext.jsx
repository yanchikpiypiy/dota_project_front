import React, { createContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const HeroDotaContext = createContext({
  data: {},
  abilities: []
});

export default function HeroDotaContextProvider({ children }) {
  const { heroName } = useParams();
  const [heroData, setHeroData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchHeroData() {
      try {
        const response = await fetch(`http://127.0.0.1:8000/heroesChad/${heroName}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setHeroData(data[0]);
      } catch (err) {
        console.error('Error fetching hero data:', err);
        setError(err);
      }
    }

    if (heroName) {
      fetchHeroData();
    }
  }, [heroName]);

  if (error) {
    return <div>Error loading hero data.</div>;
  }

  if (!heroData) {
    return <div>Loading...</div>;
  }
  const HeroFilteredData = {
    data: heroData,
    abilities: heroData.abilities
}
    console.log(HeroFilteredData)
  // Assuming the API returns an object with an "abilities" field
  // that is a list of objects along with the rest of the hero data.
  return (
    <HeroDotaContext.Provider value={HeroFilteredData}>
      {children}
    </HeroDotaContext.Provider>
  );
}

