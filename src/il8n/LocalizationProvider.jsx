import React, { createContext, useContext, useMemo, useState } from "react";
import { translations } from "./translations";

const LocalizationContext = createContext(null);

function getNestedValue(obj, path) {
  return path.split(".").reduce((acc, key) => (acc ? acc[key] : undefined), obj);
}

export function LocalizationProvider({ children }) {
  const [language, setLanguage] = useState("en");

  const value = useMemo(() => {
    const t = (path) => {
      const selected = getNestedValue(translations[language], path);
      if (selected !== undefined) return selected;

      const fallback = getNestedValue(translations.en, path);
      if (fallback !== undefined) return fallback;

      return path;
    };

    return {
      language,
      setLanguage,
      t,
    };
  }, [language]);

  return (
    <LocalizationContext.Provider value={value}>
      {children}
    </LocalizationContext.Provider>
  );
}

export function useLocalization() {
  const context = useContext(LocalizationContext);

  if (!context) {
    throw new Error("useLocalization must be used within a LocalizationProvider");
  }

  return context;
}
