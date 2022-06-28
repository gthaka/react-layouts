import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { MenuContext } from '../../../components/context/MenuContextProvider';
import { SUB_NAVI } from '../../../config'

interface IProps {
    className: string;
    hasSub?: boolean;
    // menu?: { id: string, name: string; };
}

type menuStates = { menu:string; setMenu:Function; subMenu:string; setSubMenu:Function; };

const Submenu: React.FC<IProps | boolean | any> = props => {
    // c
    // const {id, name} = props.menu;
    const { menu } = useContext(MenuContext) as menuStates;
    return (
        props.hasSub &&
        <div className='border-r-2 border-gray-300'>
            <aside className='flex flex-col w-56 h-screen'>
                <div className='px-2.5 pt-4 font-nzito sticky top-0 z-40 w-full bg-gray-100'>
                    <h3 className='pb-4 pl-4 border-b-2 capitalize'>{menu}</h3>
                </div>
                {/* overflow auto */}
                <div className='flex px-6 overflow-y-auto scrollbar'>
                    <ul className='list-none space-y-1.5 py-2 pl-4'>
                        {SUB_NAVI[menu].map(i => (
                            <li key={i.name} >
                                <NavLink to={i.link} className="border-1 border-gray-400">
                                    {i.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
        </div>
    )
}

export default Submenu