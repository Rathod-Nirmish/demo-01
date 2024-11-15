import React, { useState, useEffect } from "react";
import image1 from "../../assets/images/exited-image1.png";
import image2 from "../../assets/images/exited-image2.png";
import Equality from "../../assets/images/Image.png";
import Invest from "../../assets/images/Image-2.png";
import Stocks from "../../assets/images/Image-3.png";
import Divide from "../../assets/images/Image-4.png";
// import PromotionBanner from "./PromotionBanner";

const ExitedEquityCase = () => {
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState("ExitedEquity");
  const [tableData, setTableData] = useState({ ExitedEquity: [] });

  useEffect(() => {
    // Mock API call to fetch data
    const fetchData = async () => {
      const data = [
        {
          id: 1,
          name: "Equity & Gold",
          photo: Equality,
          startdate: "23 Aug 2024",
          enddate: "05 Sep 2024",
          investment: "₹68,888",
          returnAmount: "₹68,888",
          returnPercent: "19.82%",
        },
        {
          id: 2,
          name: "AllWeatherInvesting",
          desp: "One investment for all market...",
          photo: Invest,
          startdate: "23 Aug 2024",
          enddate: "05 Sep 2024",
          investment: "₹68,888",
          returnAmount: "₹68,888",
          returnPercent: "19.82%",
        },
        {
          id: 3,
          name: "Top100 Stocks",
          desp: "India's most powerful companies...",
          photo: Stocks,
          startdate: "23 Aug 2024",
          enddate: "05 Sep 2024",
          investment: "₹68,888",
          returnAmount: "₹68,888",
          returnPercent: "19.82%",
        },
        {
          id: 4,
          name: "Dividend Aristocrats",
          desp: "Companies that have been consistently",
          photo: Divide,
          startdate: "23 Aug 2024",
          enddate: "05 Sep 2024",
          investment: "₹68,888",
          returnAmount: "₹68,888",
          returnPercent: "19.82%",
        },
      ];

      setTableData({ Equity: data });
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white p-8">
      {/* Exited Equity Case Section */}
      <div className="flex justify-between items-center gap-6">
        <div>
          <img src={image1} alt="phoneImage" />
        </div>
        <div className="text-center mt-10">
          <div className="bg-green-100 text-green-700 text-lg inline-block px-4 py-2 rounded-full mb-4">
            You Have Exited From 3 EquityCase
          </div>
          <h1 className="text-6xl font-bold text-gray-800 pt-2">
            Exited Equity Case
          </h1>
          <p className="text-gray-500 mt-2 pt-6">
            Companies that have been consistently performing.
            <br /> Companies that have been consistently strong.
          </p>
        </div>
        <div>
          <img src={image2} alt="coinImage" />
        </div>
      </div>

      {/* Tab Navigation */}

      <div className="p-4 flex-col gap-6 px-16">
        <div className="investment-table mt-6 px-4">
          <div className="flex justify-center space-x-4 py-8">
            <button
              className={`px-8 py-3 rounded-lg border ${
                activeTab === "Equity"
                  ? "bg-gray-200 text-black"
                  : "bg-white text-black-800"
              }`}
              onClick={() => setActiveTab("Equity")}
            >
              Equity
            </button>
            <button
              className={`px-8 py-3 rounded-lg border ${
                activeTab === "Futures"
                  ? "bg-gray-200  text-black"
                  : "bg-white text-black-800"
              }`}
              onClick={() => setActiveTab("Futures")}
            >
              Futures
            </button>
            <button
              className={`px-8 py-3 rounded-lg border ${
                activeTab === "Options"
                  ? "bg-gray-200 text-black"
                  : "bg-white text-black-800"
              }`}
              onClick={() => setActiveTab("Options")}
            >
              Options
            </button>
          </div>

          {activeTab === "Equity" && (
            <div className="flex flex-col gap-8 py-12">
              {tableData.Equity.map((item, index) => (
                <div key={item.id}>
                  <div className="flex flex-row gap-2 items-center">
                    <div className="flex items-center w-2/4 p-4">
                      <img
                        src={item.photo}
                        alt={item.name}
                        className="w-[72px] h-[72px] mr-4"
                      />
                      <div className="">
                        <span className="font-bold text-gray-800">
                          {item.name}
                        </span>
                        <br />
                        <p className="text-gray-500">{item.desp}</p>
                      </div>
                    </div>
                    <div className="flex flex-col p-2 sm:w-full md:w-[10%]">
                      <h5 className="text-gray-500">Start Date</h5>
                      <h2 className="font-bold text-gray-800">
                        {item.startdate}
                      </h2>
                    </div>
                    <div className="flex flex-col p-2 w-[10%]">
                      <h5 className="text-gray-500">End Date</h5>
                      <h2 className="font-bold text-gray-800">
                        {item.enddate}
                      </h2>
                    </div>
                    <div className="flex flex-col p-2 w-[14%]">
                      <h5 className="text-gray-500">Investment Amount</h5>
                      <h2 className="font-bold text-gray-800">
                        {item.investment}
                      </h2>
                    </div>
                    <div className="flex flex-col p-2 w-[10%]">
                      <h5 className="text-gray-500">Final Amount</h5>
                      <h2 className="font-bold text-gray-800">
                        {item.returnAmount}
                      </h2>
                    </div>
                    <div className="flex flex-col p-2 w-[10%]">
                      <h5 className="text-gray-500">Return %</h5>
                      <h2 className="font-bold text-green-600">
                        {item.returnPercent}
                      </h2>
                    </div>
                  </div>
                  {index < tableData.Equity.length && (
                    <hr className="border-t-[2px] border-gray-200 mx-auto w-full" />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Promotion Banner */}
      {/* <PromotionBanner /> */}
    </div>
  );
};

export default ExitedEquityCase;
