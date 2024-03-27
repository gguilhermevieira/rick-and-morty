import React, { createContext, useState } from 'react';

export const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favofite, setFavofite] = useState([]);

  const addFavorite = (id) => {
    console.log('teste');
    setFavofite([...favofite, id]);
  };

  return (
    <FavoriteContext.Provider value={{ favofite, addFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};
