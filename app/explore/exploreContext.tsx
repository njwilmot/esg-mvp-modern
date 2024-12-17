'use client';

import React, { createContext, useContext, useState } from 'react';

const ExploreContext = createContext();

export const ExploreProvider = ({ children }) => {
  const [filter, setFilter] = useState('jobs');
  const [mapData, setMapData] = useState([]);
  const [costData, setCostData] = useState([]);

  return (
    <ExploreContext.Provider value={{ filter, setFilter, mapData, setMapData, costData }}>
      {children}
    </ExploreContext.Provider>
  );
};

export const useExplore = () => useContext(ExploreContext);
