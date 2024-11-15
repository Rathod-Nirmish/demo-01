import React, { useState, useEffect } from 'react';
import Equality from '../../assets/images/Image.png';
import Invest from '../../assets/images/Image-2.png';
import Stocks from '../../assets/images/Image-3.png';
import Divide from '../../assets/images/Image-4.png';



const InvestmentTable = () => {
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState('Equity');
  const [tableData, setTableData] = useState({ Equity: [] });


  useEffect(() => {
    // Mock API call to fetch data
    const fetchData = async () => {
      const data = [
        {
          id: 1,
          name: 'Equity & Gold',
          photo: Equality,
          startdate: '23 Aug 2024',
          enddate: '05 Sep 2024',
          investment: '₹68,888',
          returnAmount: '₹68,888',
          returnPercent: '19.82%',
        },
        {
          id: 2,
          name: 'AllWeatherInvesting',
          desp: 'One investment for all market...',
          photo: Invest,
          startdate: '23 Aug 2024',
          enddate: '05 Sep 2024',
          investment: '₹68,888',
          returnAmount: '₹68,888',
          returnPercent: '19.82%',
        },
        {
          id: 3,
          name: 'Top100 Stocks',
          desp: "India's most powerful companies...",
          photo: Stocks,
          startdate: '23 Aug 2024',
          enddate: '05 Sep 2024',
          investment: '₹68,888',
          returnAmount: '₹68,888',
          returnPercent: '19.82%',
        },
        {
          id: 4,
          name: 'Dividend Aristocrats',
          desp: 'Companies that have been consistently',
          photo: Divide,
          startdate: '23 Aug 2024',
          enddate: '05 Sep 2024',
          investment: '₹68,888',
          returnAmount: '₹68,888',
          returnPercent: '19.82%',
        },
      ];

      setTableData({ Equity: data });
    };

    fetchData();
  }, []);


  useEffect(() => {
    // Simulating an API call to fetch data
    const fetchData = async () => {
      const data = [
        {id: 1, name: 'Equity & Gold', photo: Equality,  description: 'Create Wealth With Equities, Stay...', amount: '₹68,888', sycar: '19.82%' },
        {id: 2, name: 'AllWeatherInvesting',photo: Invest, description: 'One Investment For All Market...', amount: '₹68,888', sycar: '19.82%' },
        {id: 3, name: 'Top100 Stocks',photo: Stocks, description: 'India’s Most Powerful Companies', amount: '₹68,888', sycar: '19.82%' },
        {id: 4, name: 'Dividend Aristocrats', photo: Divide,  description: 'Companies That Have Been Consistently', amount: '₹68,888', sycar: '19.82%' },
      ];
      setTableData({ ExitedEquity: data });
    };

    fetchData();
  }, []);



  return (
    <div className="p-4 flex-col gap-6 px-16">

    


    <div className="p-4 flex-col gap-6 px-16 md:mb-72">

    <div className="investment-table mt-6 px-4">
    <div className="flex justify-center space-x-4 py-8">
      <button
        className={`px-8 py-3 rounded-lg border ${
          activeTab === 'ExitedEquity' ? 'bg-gray-200 text-black' : 'bg-white text-black-800'
        }`}
        onClick={() => setActiveTab('ExitedEquity')}
      >
        Equity
      </button>
      <button
        className={`px-8 py-3 rounded-lg border ${
          activeTab === 'Futures' ? 'bg-gray-200  text-black' : 'bg-white text-black-800'
        }`}
        onClick={() => setActiveTab('Futures')}
      >
        Futures
      </button>
      <button
        className={`px-8 py-3 rounded-lg border ${
          activeTab === 'Options' ? 'bg-gray-200 text-black' : 'bg-white text-black-800'
        }`}
        onClick={() => setActiveTab('Options')}
      >
        Options
      </button>
    </div>

      {/* Cards Section */}
      {activeTab === 'ExitedEquity' && (
      <div className="mt-10 space-y-4">
        {tableData.ExitedEquity.map((strategy, index) => (
          <div key={strategy.id} >

          <div className="flex items-center justify-between bg-white p-4"
          >
          <div className='w-1/3'>
            <div className="flex items-center">
              <img
                className="w-[72px] h-[72px] mr-4"
                src={strategy.photo}
                alt={strategy.name}
              />
              <div>
                <h3 className="font-bold text-lg">{strategy.name}</h3>
                <p className="text-gray-500">{strategy.description}</p>
              </div>
            </div>
            </div>
            <div className="p-2">
              <div className="text-gray-500">
              <h5 className="text-gray-500">Current Amount</h5>
              <h2 className="font-bold text-gray-800">{strategy.amount}</h2>
              </div>
              </div>
              <div className='p-2'>
              <div className="text-green-500">
              <h5 className="text-gray-500">5TCAGR</h5>
              <h2 className="font-bold text-gray-800">{strategy.sycar}</h2>
             </div>
            </div>
            <button className="bg-gray-100 text-gray-600 px-4 py-2 ml-4 rounded-full">
              Rebalance Update Available
            </button>
          </div>
          {index < tableData.ExitedEquity.length && <hr className="border-t-[2px] border-gray-200 mx-auto w-full" />}
          </div>
        ))}
      </div>
    )}
    </div>
    </div> 



  </div>
  );
};

export default InvestmentTable;
