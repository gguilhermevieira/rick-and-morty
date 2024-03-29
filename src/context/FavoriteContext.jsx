import React, { createContext, useState } from 'react';

export const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favofiteIds, setFavofite] = useState([]);

  const addFavoriteIds = (id) => {
    setFavofite([...favofiteIds, id]);
  };

  const removeFavoriteIds = (id) => {
    setFavofite(favofiteIds.filter((item) => item !== id));
  };

  return (
    <FavoriteContext.Provider value={{ favofiteIds, addFavoriteIds, removeFavoriteIds }}>
      {children}
    </FavoriteContext.Provider>
  );
};
