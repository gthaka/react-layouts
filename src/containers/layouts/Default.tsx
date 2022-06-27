import { NotificationsTwoTone, SearchTwoTone } from '@mui/icons-material';
import React from 'react'
import { MenuContextProvider } from '../../components/context/MenuContextProvider';
import Sidebar from '../sidebar/Sidebar'

interface IDefault {
  children?: React.ReactNode;
}

const Default: React.FC<IDefault | any> = (props) => {
  return (
    <div className='flex flex-row bg-white font-bold '>
      {/* Sidebar  */}
      <div className='flex h-screen justify-between '>
        <MenuContextProvider>
          {/* Main Sidebar */}
          <Sidebar className='flex flex-col border-r-2 border-gray-300 bg-gray-200' type='main' />
          {/* Sub sidebar container */}
          <Sidebar className='flex flex-col w-56 h-screen' type='sub' />
        </MenuContextProvider>
      </div>
      {/* Main area Dash */}
      <div className='flex flex-col h-screen w-screen'>
        {/* NavBar */}
        <div className='px-[3px]'>
          <div className='flex justify-between px-2.5 py-4 border-b-2 border-b-gray-300'>
            <div className='flex'>

              <div className="flex-1 flex">
                <form className="w-full flex md:ml-0" action="#" method="GET">
                  <label htmlFor="mobile-search-field" className="sr-only">
                    Search
                  </label>
                  <label htmlFor="desktop-search-field" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                      <SearchTwoTone className="flex-shrink-0 h-5 w-5" aria-hidden="true" />
                    </div>
                    <input
                      name="mobile-search-field"
                      id="mobile-search-field"
                      className="h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:hidden"
                      placeholder="Search"
                      type="search"
                    />
                    <input
                      name="desktop-search-field"
                      id="desktop-search-field"
                      className="hidden h-full w-full border-transparent py-2 pl-8 pr-3 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:block"
                      placeholder="Search ...e"
                      type="search"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className='flex'>
              <div className="flex-1 flex justify-between px-4 md:px-0">
                <div className="ml-4 flex items-center md:ml-6">
                  <button
                    type="button"
                    className="bg-white rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                  >
                    <NotificationsTwoTone className="h-6 w-6" aria-hidden="true" />
                    <span className="sr-only">View notifications</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Main Body */}
        <div className='p-2 overflow-y-auto scrollbar scroll-smooth'>
          {props.children}
        </div>
      </div>
    </div >
  )
}

export default Default