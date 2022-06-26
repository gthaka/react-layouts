import React from 'react'
import { NavLink } from 'react-router-dom';
import { SUB_NAVI } from '../../../config'

interface IProps {
    className: string;
    menu?: { id: string, name: string; };
}

const Submenu: React.FC<IProps | any> = props => {
    // c
    // const {id, name} = props.menu;
    return (
        props.menu &&
        <div className='border-r-2 border-gray-300'>
            <aside className='flex flex-col w-56 h-screen'>
                <div className='px-2.5 pt-4 font-nzito sticky top-0 z-40 w-full bg-gray-100'>
                    <h3 className='pb-4 pl-4 border-b-2 capitalize'>{props.menu.name}</h3>
                </div>
                {/* overflow auto */}
                <div className='flex px-6 overflow-y-auto scrollbar'>
                    <ul className='list-none space-y-1.5 py-2 pl-4'>
                        {SUB_NAVI[props.menu.id].map(i => (
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