import React from 'react';

const NetWorth = () => {
  return (
    <div className="mt-8 px-4 py-12 rounded-lg shadow-2xl ">
      {/* Net Worth Header */}
      
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">Net Worth</h1>
        <hr className="border-t-[2px] border-gray-200 sm:w-full md:w-[1346px] mx-auto mt-4" />
      </div>

      {/* Cards Container */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-48">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow-2xl">
          <h2 className="text-2xl font-semibold text-gray-600">Investment Amount</h2>
          <p className="text-2xl font-bold text-gray-800">₹480.86</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow-2xl">
          <h2 className="text-2xl font-semibold text-gray-600">Current Investment</h2>
          <p className="text-2xl font-bold text-gray-800">₹480.86</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-4 rounded-lg shadow-2xl">
                 <div className="flex items-center space-x-2 gap-4">
                <h2 className="text-2xl font-semibold text-gray-600">Today's Return</h2>
                  <p className="text-lg font-bold text-green-500">(12.3%)</p>
                </div>
                <p className="mt-2 text-2xl font-bold text-green-600">₹4,800.86</p>
              </div>

        {/* Card 4 */}
        <div className="bg-white p-6 rounded-lg shadow-2xl">
                 <div className="flex items-center space-x-2 gap-4">
                <h2 className="text-2xl font-semibold text-gray-600">Total Return</h2>
                  <p className="text-lg font-bold text-green-500">(23.3%)</p>
                </div>
                <p className="mt-2 text-2xl font-bold text-green-600">₹4,800.86</p>
              </div>
      </div>
    </div>
  );
};

export default NetWorth;
