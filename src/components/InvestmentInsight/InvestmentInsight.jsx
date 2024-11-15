import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";
import "./InvestmentInsight.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  STRATEGIES,
  callAxiosApi,
  getStrategy,
  brokerTypes,
} from "../../utils/api_utils";

const InvestmentInsight = () => {
  const navigate = useNavigate();
  const [insights, setInsights] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true); // Initialize loading state
  const [sliceWords, setSliceWords] = useState(5); // Initialize as an empty array
  const [sliceNextWords, setSliceNextWords] = useState(4); // Initialize as an empty array

  useEffect(() => {
    const fetchStrategies = async () => {
      try {
        const response = await callAxiosApi(brokerTypes);
        // const response = await callAxiosApi(getStrategy, { table: STRATEGIES });
        console.log("response", response?.data);
        setInsights(response?.data || []); // Update insights with fetched data

        // if (response.data.errorStatus === false) {
        //   setInsights(response.data.data); // Update insights with fetched data
        //   // toast.success("Strategy fetch successful!");
        // } else {
        // }
      } catch (e) {
        toast.error("Strategy fetch failed, please try again.");
      } finally {
        // setLoading(false); // Stop loading once the data is fetched or an error occurs
      }
    };
    fetchStrategies();
  }, []);

  // if (loading) {
  //   return (
  //     <div className="loader-container">
  //       <CircularProgress />
  //     </div>
  //   );
  // }

  const handleButtonClick = async (insightData) => {
    try {
      // const response = await callAxiosApi(getStrategy, { table: STRATEGIES, strategyId:strategyId });
      if (insightData) {
        // navigate("/all-weather-investing");
        localStorage.setItem("strategyId", insightData?.strategyId); // 'authToken' is the key, and 'token' is the value

        // Pass data while navigating
        navigate("/all-weather-investing", {
          state: { strategyData: insightData },
        });
        // Scroll to the top of the page
        window.scrollTo(0, 0);
      } else {
        console.log("data not found");
      }
    } catch (e) {
      console.log("API Not Fetched");
    }
  };

  return (
    <div className="investment-component-padding">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <h1 className="investment-header">Investment Insights</h1>
      <div className="investment-insights">
        <div className="insights-list">
          {insights?.map((insight, index) => (
            <div key={index} className="insight-item">
              <div className="insight-icon-column">
                <img
                  src="./equity-gold.png"
                  alt={insight.name}
                  className="insight-icon"
                />
              </div>
              <div className="insight-details">
                <h3>{insight.name}</h3>
                <p className="insight-details-description-p">
                  {insight.description
                    .split(" ")
                    .slice(0, sliceWords)
                    .join(" ")}
                  ...
                </p>
              </div>

              <div className="insight-icon-column">
                <img
                  src={insight.icon}
                  alt={insight.type}
                  className="insight-icon"
                />
              </div>
              <div className="insight-details">
                <h3>{insight.type}</h3>
                <p className="insight-details-next-description-p">
                  {insight.description
                    .split(" ")
                    .slice(0, sliceNextWords)
                    .join(" ")}
                  ...
                </p>
              </div>

              <button
                className="insight-button"
                onClick={() => handleButtonClick(insight)}
              >
                View EquityCases
                {/* {insight.buttonText} */}
              </button>
            </div>
          ))}
        </div>
        <div className="insight-ad">
          <div>
            <img
              src="/best-strategies-img-right.png"
              alt="Best Strategies Exchanges"
              className="best-strategies-img-right"
            />
          </div>
          <div>
            <img
              src="/plus-object.png"
              alt="Best Strategies Exchanges"
              className="plus-object-img-right"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentInsight;
