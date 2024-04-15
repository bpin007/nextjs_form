
import React, { useState } from 'react';
import Indivisual from './Indivisual';
import Companies from './companies';

const Sign_up_page = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tab:string) => {
    setActiveTab(tab);
  };

  return (
    <>
    <p className='text-5xl font-extrabold'>Get Started...</p>
    <div className="max-w-md mx-auto bg-white p-4  shadow border-2 border-black rounded-lg">
      <div className="flex mb-4 bg-slate-200 rounded-lg">
        <button
          className={`flex-1 text-center py-2 rounded-lg font-semibold ${
            activeTab === 'tab1' ? 'bg-purple-300 text-black' : ' text-black'
          }`}
          onClick={() => handleTabClick('tab1')}
        >
          Individuals
        </button>
        <button
          className={`flex-1 text-center py-2 rounded-lg font-semibold ${
            activeTab === 'tab2' ? 'bg-purple-300 text-black' : 'text-black'
          }`}
          onClick={() => handleTabClick('tab2')}
        >
          Companies
        </button>
      
      </div>
      <div className="p-4">
          <div className={`tab-content ${activeTab !== 'tab1' ? 'hidden' : ''}`}>
            <Indivisual />
          </div>
          <div className={`tab-content ${activeTab !== 'tab2' ? 'hidden' : ''}`}>
            <Companies />
          </div>
        </div>
    </div>
    </>
  );
};

export default Sign_up_page;
