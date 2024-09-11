// AppContext.js
import { createContext, useState } from 'react';

// Create a new context
const AppContext = createContext();

// Create a provider for the context
const AppProvider = ({ children }) => {
  // Initialize state variables
  const [user, setUser] = useState(null);
  const [employees, setEmployees] = useState([]);

  // Return the provider with the state variables
  return (
    <AppContext.Provider value={{ user, setUser, employees, setEmployees }}>
      {children}
    </AppContext.Provider>
  );
};

// Export the provider and context
export { AppProvider, AppContext };