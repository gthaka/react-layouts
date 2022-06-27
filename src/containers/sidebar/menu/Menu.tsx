import { CodeOffTwoTone } from '@mui/icons-material';
import React from 'react'
import { NavLink } from 'react-router-dom';
import { NAVI } from '../../../config';

interface IMenu {
    className?: string;
}

const Menu: React.FC<IMenu | any> = props => {
    const width = props.hasSub ? 'w-14' : 'w-56';
    return (
        <aside className={`${props.className} ${width}`}>
            <div className='pt-4 font-nzito sticky z-30 top-0 bg-gray-200'>
                <h3 className='flex justify-center pb-4 border-b-2 border-b-gray-300'>
                    <CodeOffTwoTone className='animate-coin-spin animate-spin' />
                </h3>
            </div>
            {/* overflow auto */}
            <div className='flex flex-grow  overflow-y-auto scrollbar justify-center '>
                <ul className='list-none space-y-1.5 py-2 w-11/12 m-1'>
                    {/* <li className='py-1 pb-6'><div className='p-[2px] border-1 border-gray-400 '>🏠</div></li> */}
                    {/* <li className='py-1'><span className='p-[2px] rounded border-[1.5px] border-spacing-1 border-indigo-300 bg-gray-100'>🥑</span></li> */}

                    {NAVI.main.map(i => (
                        <li key={i.name} className={`flex p-[2px] rounded border-[1.5px] border-spacing-1 border-indigo-300 bg-gray-100 ${!props.hasSub && ` text-center`}`}>
                            <NavLink to={i.link} className="p-[2px] border-1 w-full border-1 border-gray-400 " >
                                {<i.icon className="text-indigo-600" />}{!props.hasSub && `   ${i.name}`}
                            </NavLink>
                        </li>
                    ))}

                </ul>
            </div>
            <div className='flex flex-col'>
                <div className='flex bottom-0 left-0 justify-center'>
                    <ul className='list-none space-y-1.5 py-2'>
                        {NAVI.footer.map(i => (
                            <li key={i.name} className='py-1'>
                                <NavLink to={i.link} className="p-[2px] border-1" >
                                    {<i.icon className="text-purple-600" />}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </aside>
    )
}

export default Menu