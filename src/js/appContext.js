import React from 'react';

const AppContext = React.createContext({
  search_results: [],
  isLoading: false
});

export default AppContext;