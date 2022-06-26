// import { CodeOffTwoTone } from '@mui/icons-material';
// import React from 'react';
import { CircleLoader } from '../../assets';
import Button from '../../components/button/Button';
// import { NAVI, SUB_NAVI } from '../../config'
import Sidebar from '../sidebar/Sidebar';

function App() {
  return (
    <div className='flex flex-row bg-white font-bold '>
      {/* Sidebar  */}
      <div className='flex h-screen justify-between '>
        {/* Main Sidebar */}
        <Sidebar className='flex flex-col border-r-2 border-gray-300 bg-gray-200' type='main' />
        {/* Sub sidebar container */}
        {/* <div className='border-r-2 border-gray-300'> */}
        <Sidebar className='flex flex-col w-56 h-screen' type='sub' />
        {/* </div> */}
      </div>
      {/* Main area Dash */}
      <div className='flex flex-col h-screen w-screen'>
        {/* NavBar */}
        <div className='px-[3px]'>
          <div className='flex justify-between px-2.5 py-4 border-b-2 border-b-gray-300'>
            <div className='flex'>Left Stuff</div>
            <div className='flex'>Right Stuff</div>
          </div>
        </div>
        {/* Main Body */}
        <div className='p-2 overflow-y-auto scrollbar scroll-smooth'>
          {/* <p>
            <Button className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150 cursor-not-allowed" disabled>
              <CircleLoader className='animate-spin -ml-1 mr-3 h-5 w-5 text-white' />
            </Button>
          </p> */}
          <p>***************FIRST***********************************</p>
          <p>My Name is me!!!! I Like this layout</p>
          <p>My Name is me!!!! I Like this layout</p>
          <p>My Name is me!!!! I Like this layout</p>
          <p>My Name is me!!!! I Like this layout</p>
          <p>My Name is me!!!! I Like this layout</p>
          <p>My Name is me!!!! I Like this layout</p>
          <p>My Name is me!!!! I Like this layout</p>
          <p>My Name is me!!!! I Like this layout</p>
          <p>My Name is me!!!! I Like this layout</p>
          <p>My Name is me!!!! I Like this layout</p>
          <p>My Name is me!!!! I Like this layout</p>
          <p>My Name is me!!!! I Like this layout</p>
          <p>My Name is me!!!! I Like this layout</p>
          <p>My Name is me!!!! I Like this layout</p>
          <p>My Name is me!!!! I Like this layout</p>
          <p>My Name is me!!!! I Like this layout</p>
          <p>My Name is me!!!! I Like this layout</p>
          <p>My Name is me!!!! I Like this layout</p>
          <p>My Name is me!!!! I Like this layout</p>
          <p>My Name is me!!!! I Like this layout</p>
          <p>My Name is me!!!! I Like this layout</p>
          <p>My Name is me!!!! I Like this layout</p>
          <p>My Name is me!!!! I Like this layout</p>
          <p>My Name is me!!!! I Like this layout</p>
          <p>My Name is me!!!! I Like this layout</p>
          <p>My Name is me!!!! I Like this layout</p>
          <p>My Name is me!!!! I Like this layout</p>
          <p>My Name is me!!!! I Like this layout</p>
          <p>My Name is me!!!! I Like this layout</p>
          <p>My Name is me!!!! I Like this layout</p>
          <p>My Name is me!!!! I Like this layout</p>
          <p>My Name is me!!!! I Like this layout</p>
          <p>My Name is me!!!! I Like this layout</p>
          <p>My Name is me!!!! I Like this layout</p>
          <p>My Name is me!!!! I Like this layout</p>
          <p>My Name is me!!!! I Like this layout</p>
          <p>My Name is me!!!! I Like this layout</p>
          <p>My Name is me!!!! I Like this layout</p>
          <p>My Name is me!!!! I Like this layout</p>
          <p>My Name is me!!!! I Like this layout</p>
          <p>My Name is me!!!! I Like this layout</p>
          <p>My Name is me!!!! I Like this layout</p>
          <p>My Name is me!!!! I Like this layout</p>
          <p>My Name is me!!!! I Like this layout</p>
          <p>My Name is me!!!! I Like this layout</p>
          <p>My Name is me!!!! I Like this layout</p>
          <p>My Name is me!!!! I Like this layout</p>
          <p>My Name is me!!!! I Like this layout</p>
          <p>My Name is me!!!! I Like this layout</p>
          <p>My Name is me!!!! I Like this layout</p>
          <p>My Name is me!!!! I Like this layout</p>
          <p>My Name is me!!!! I Like this layout</p>
          <p>***************LAST***********************************</p>
        </div>
      </div>
    </div>
  );
}

export default App;
