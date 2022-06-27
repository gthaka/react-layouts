import React, { useState } from 'react'

interface IProps {
  children?: React.ReactNode | boolean;
}

const MenuContext: React.Context<{}[]> = React.createContext([{}, () => { }]);
const MenuProvider: React.FC<IProps> | boolean = (props) => {
  const [state, setState] = useState({});
  return (
    <MenuContext.Provider value={[state, setState]}>
      {props.children}
    </MenuContext.Provider>
  );
}

export { MenuContext, MenuProvider }