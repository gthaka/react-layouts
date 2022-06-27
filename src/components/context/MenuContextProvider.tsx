import React, { createContext, useState } from "react";

export const MenuContext: any = createContext(null);

interface IProps {
  children?: React.ReactNode;
}

export const MenuContextProvider = (props: IProps) => {
  const [menu, setMenu] = useState('/');
  const [subMenu, setSubMenu] = useState(false);
  const [hasSubMenu, setHasSubMenu] = useState(false);

  const value = {
    menu, setMenu, subMenu, setSubMenu, hasSubMenu, setHasSubMenu,
  };

  return (
    <MenuContext.Provider value={value}> {props.children} </MenuContext.Provider>
  );
};