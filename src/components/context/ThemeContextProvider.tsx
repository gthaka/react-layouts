import React, { createContext, ReactFragment, useState } from "react";

export const ThemeContext: any = createContext(null);

export const Themes: { Light: string, Dark: string } = {
  Light: "light",
  Dark: "dark",
};

interface IProps {
  children?: React.ReactNode | any | null;
}

export const ThemeContextProvider = (props: IProps) => {
  const [currentTheme, setCurrentTheme] = useState(Themes.Light);

  const value = {
    currentTheme,
    setCurrentTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{props.children}</ThemeContext.Provider>
  );
};