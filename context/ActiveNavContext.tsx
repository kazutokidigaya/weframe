"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of the context
type ActiveNavContextType = {
  activeNav: string;
  setActiveNav: (nav: string) => void;
};

// Create the context
const ActiveNavContext = createContext<ActiveNavContextType | undefined>(
  undefined
);

// Create a provider component
export const ActiveNavProvider = ({ children }: { children: ReactNode }) => {
  const [activeNav, setActiveNav] = useState("Art de la Table");

  return (
    <ActiveNavContext.Provider value={{ activeNav, setActiveNav }}>
      {children}
    </ActiveNavContext.Provider>
  );
};

// Create a custom hook for easy access to the context
export const useActiveNav = () => {
  const context = useContext(ActiveNavContext);
  if (!context) {
    throw new Error("useActiveNav must be used within an ActiveNavProvider");
  }
  return context;
};
