import React from 'react';
import './App.css';

function App() {
  return (
    <div className='flex flex-row bg-white font-bold '>
      {/* Sidebar  */}
      <div className='flex h-screen justify-between '>
        {/* Main Sidebar */}
        <aside className='flex flex-col w-14 border-r-2 border-gray-300 bg-gray-200'>
          <div className='px-2.5 pt-4 font-nzito sticky z-30 w-full top-0 bg-gray-200'>
            <h3 className='pb-4 border-b-2 border-b-gray-300'>APP</h3>
          </div>
          {/* overflow auto */}
          <div className='flex flex-grow  overflow-y-auto scrollbar justify-center '>
            <ul className='list-none space-y-1.5 py-2'>
              <li className='py-1 pb-6'><div className='p-[2px] border-1 border-gray-400 '>🏠</div></li>
              <li className='py-1'><span className='p-[2px] rounded border-[1.5px] border-spacing-1 border-indigo-300 bg-gray-100'>🥑</span></li>
              <li className='py-1'><span className='p-[2px] border-1'>🪶</span></li>
              <li className='py-1'><span className='p-[2px] border-1'>🦚</span></li>
              <li className='py-1'><span className='p-[2px] border-1'>🦚</span></li>
              <li className='py-1'><span className='p-[2px] border-1'>🦚</span></li>
              <li className='py-1'><span className='p-[2px] border-1'>🦚</span></li>
              <li className='py-1'><span className='p-[2px] border-1'>🦚</span></li>
              <li className='py-1'><span className='p-[2px] border-1'>🦚</span></li>
              <li className='py-1'><span className='p-[2px] border-1'>🦚</span></li>
              <li className='py-1'><span className='p-[2px] border-1'>🦚</span></li>
              <li className='py-1'><span className='p-[2px] border-1'>🦚</span></li>
              <li className='py-1'><span className='p-[2px] border-1'>🦚</span></li>
              <li className='py-1'><span className='p-[2px] border-1'>🦚</span></li>
              <li className='py-1'><span className='p-[2px] border-1'>🦚</span></li>
              <li className='py-1'><span className='p-[2px] border-1'>🦚</span></li>
              <li className='py-1'><span className='p-[2px] border-1'>🦚</span></li>
              <li className='py-1'><span className='p-[2px] border-1'>🦚</span></li>
              <li className='py-1'><span className='p-[2px] border-1'>🦚</span></li>
              <li className='py-1'><span className='p-[2px] border-1'>🦚</span></li>
              <li className='py-1'><span className='p-[2px] border-1'>🦚</span></li>
              <li className='py-1'><span className='p-[2px] border-1'>🦚</span></li>
              <li className='py-1'><span className='p-[2px] border-1'>🦚</span></li>
              <li className='py-1'><span className='p-[2px] border-1'>🦚</span></li>
              <li className='py-1'><span className='p-[2px] border-1'>💯</span></li>
            </ul>
          </div>
          <div className='flex flex-col'>
            <div className='flex bottom-0 left-0 justify-center'>
              <ul className='list-none space-y-1.5 py-2'>
                <li className='py-1'><span className='p-[2px] border-1'>🦶🏽</span></li>
                <li className='py-1'><span className='p-[2px] border-1'>👣</span></li>
                <li className='py-1'><span className='p-[2px] border-1'>🐾</span></li>
              </ul>
            </div>
          </div>
        </aside>
        {/* Sub sidebar container */}
        <div className='border-r-2 border-gray-300'>
          <aside className='flex flex-col w-56 h-screen'>
            <div className='px-2.5 pt-4 font-nzito sticky top-0 z-40 w-full bg-gray-100'>
              <h3 className='pb-4 pl-4 border-b-2'>SUB TITLE</h3>
            </div>
            {/* overflow auto */}
            <div className='flex px-6 overflow-y-auto scrollbar'>
              <ul className='list-none space-y-1.5 py-2 pl-4'>
                <li><div className='border-1 border-gray-400'>FF</div></li>
                <li><div className='border-1 border-gray-400'>XX</div></li>
                <li><div className='border-1 border-gray-400'>XX</div></li>
                <li><div className='border-1 border-gray-400'>XX</div></li>
                <li><div className='border-1 border-gray-400'>XX</div></li>
                <li><div className='border-1 border-gray-400'>XX</div></li>
                <li><div className='border-1 border-gray-400'>XX</div></li>
                <li><div className='border-1 border-gray-400'>XX</div></li>
                <li><div className='border-1 border-gray-400'>XX</div></li>
                <li><div className='border-1 border-gray-400'>XX</div></li>
                <li><div className='border-1 border-gray-400'>XX</div></li>
                <li><div className='border-1 border-gray-400'>XX</div></li>
                <li><div className='border-1 border-gray-400'>XX</div></li>
                <li><div className='border-1 border-gray-400'>XX</div></li>
                <li><div className='border-1 border-gray-400'>XX</div></li>
                <li><div className='border-1 border-gray-400'>XX</div></li>
                <li><div className='border-1 border-gray-400'>XX</div></li>
                <li><div className='border-1 border-gray-400'>XX</div></li>
                <li><div className='border-1 border-gray-400'>XX</div></li>
                <li><div className='border-1 border-gray-400'>XX</div></li>
                <li><div className='border-1 border-gray-400'>XX</div></li>
                <li><div className='border-1 border-gray-400'>XX</div></li>
                <li><div className='border-1 border-gray-400'>XX</div></li>
                <li><div className='border-1 border-gray-400'>XX</div></li>
                <li><div className='border-1 border-gray-400'>XX</div></li>
                <li><div className='border-1 border-gray-400'>XX</div></li>
                <li><div className='border-1 border-gray-400'>XX</div></li>
                <li><div className='border-1 border-gray-400'>XX</div></li>
                <li><div className='border-1 border-gray-400'>XX</div></li>
                <li><div className='border-1 border-gray-400'>XX</div></li>
                <li><div className='border-1 border-gray-400'>LL</div></li>
              </ul>
            </div>
          </aside>
        </div>
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
