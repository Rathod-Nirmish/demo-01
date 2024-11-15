import React, { useState, useEffect } from "react";
import styles from "./Sidebar.module.css";
import CustomRangeSlider from "./CustomRangeSlider";
import ListItem from "./ListItem";
import {
  STRATEGIES,
  callAxiosApi,
  getStrategy,
} from "../../../utils/api_utils";

const Sidebar = () => {
  const [selectedAmountRange, setSelectedAmountRange] = useState([0, 500000]);

  const [selectedCagrRange, setSelectedCagrRange] = useState([0, 100]);
  const [selectedVolatility, setSelectedVolatility] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStrategies, setSelectedStrategies] = useState([
    // "Equity",
    // "Options",
  ]);
  const [strategyList, setStrategyList] = useState([]);
  const [selectedTimePeriod, setSelectedTimePeriod] = useState("Daily");

  const items = [
    {
      icon: "/equity-gold.png",
      name: "Equity & Gold",
      description: "Create Wealth With Equities, Stay...",
      minInvestment: 5000,
      cagr: 55.98,
      years: "5",
      volatility: "Low",
      category: "Equity",
    },
    {
      icon: "/weather-investing.png",
      name: "AllWeatherInvesting",
      description: "One Investment For All Market...",
      minInvestment: 10000,
      cagr: 21.81,
      years: "6",
      volatility: "Med.",
      category: "Futures",
    },
    {
      icon: "/top-100.png",
      name: "Top100 Stocks",
      description: "India's most powerful companies...",
      minInvestment: 15000,
      cagr: 71.81,
      years: "6",
      volatility: "Med.",
      category: "Options",
    },
    {
      icon: "/gold-coins.png",
      name: "Dividend Aristocrats",
      description: "Companies that have been consistently",
      minInvestment: 113584,
      cagr: 19.82,
      years: "8",
      volatility: "High",
      category: "Options",
    },
    // Add more strategyList as needed
  ];

  useEffect(() => {
    const fetchStrategies = async () => {
      try {
        const response = await callAxiosApi(getStrategy, { table: STRATEGIES });

        if (response.data.errorStatus === false) {
          const finalData = response.data.data.filter(
            (item) => item.status != "Draft"
          );
          setStrategyList(finalData); // Update insights with fetched data
          // setStrategyList(response.data.data); // Update insights with fetched data
          // toast.success("Strategy fetch successful!");
          console.log("startegy list", response.data.data);
        } else {
        }
      } catch (e) {
        toast.error("Strategy fetch failed, please try again.");
      } finally {
        // setLoading(false); // Stop loading once the data is fetched or an error occurs
      }
    };
    fetchStrategies();
  }, []);

  const handleAmountRangeChange = (values) => {
    console.log("selectedAmountRange", values);

    setSelectedAmountRange(values);
  };

  const handleCagrRangeChange = (values) => {
    setSelectedCagrRange(values);
  };

  const handleVolatilityChange = (volatility) => {
    setSelectedVolatility(volatility);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleStrategyChange = (strategy) => {
    setSelectedStrategies((prev) =>
      prev.includes(strategy)
        ? prev.filter((s) => s !== strategy)
        : [...prev, strategy]
    );
  };

  const handleTimePeriodChange = (timePeriod) => {
    setSelectedTimePeriod(timePeriod);
  };

  const removeFilter = (filter) => {
    setSelectedStrategies((prev) => prev.filter((s) => s !== filter));
  };

  const filteredItems = strategyList.filter((item) => {
    const matchesAmount =
      item.minInvestment >= selectedAmountRange[0] &&
      item.minInvestment <= selectedAmountRange[1];
    const matchesCagr =
      item.cagr >= selectedCagrRange[0] && item.cagr <= selectedCagrRange[1];
    const matchesVolatility = selectedVolatility
      ? item.volatility === selectedVolatility
      : true;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStrategy = selectedStrategies.length
      ? selectedStrategies.includes(item.category)
      : true;

    return (
      matchesAmount &&
      matchesCagr &&
      matchesVolatility &&
      matchesSearch &&
      matchesStrategy
    );
  });

  const handleResetFilters = () => {
    window.location.reload();
    setSelectedAmountRange([0, 500000]);
    setSelectedCagrRange([0, 100]);
    setSelectedVolatility(null);
    setSearchQuery("");
    setSelectedStrategies([]);
    setSelectedTimePeriod("Daily");
    handleAmountRangeChange([0, 500000]);
  };

  return (
    <div className={styles.container}>
      {/* <div className={styles.activeFilters}>
        <span>Active Filters:</span>
        {selectedStrategies.map((filter, index) => (
          <span key={index} className={styles.activeFilter}>
            {filter}
            <button onClick={() => removeFilter(filter)}>×</button>
          </span>
        ))}
        <span className={styles.resultsCount}>{filteredItems.length} Results found.</span>
      </div> */}
      <div className={styles.sidebar}>
        <div className={styles.investmentAmount}>
          <h3>INVESTMENT AMOUNT</h3>
          <CustomRangeSlider
            min={0}
            max={500000}
            step={100}
            onChange={handleAmountRangeChange}
          />
        </div>
        <div>
          <input
            type="radio"
            id="any"
            name="amount"
            value="any"
            onChange={() => handleAmountRangeChange([0, 500000])}
            // onClick={() => handleAmountRangeChange("High")}
            defaultChecked
          />
          <label htmlFor="any">Any</label>
        </div>
        <div>
          <input
            type="radio"
            id="under5000"
            name="amount"
            value="under5000"
            onChange={() => handleAmountRangeChange([0, 5000])}
          />
          <label htmlFor="under5000">Under 5,000</label>
        </div>
        <div>
          <input
            type="radio"
            id="under25000"
            name="amount"
            value="under25000"
            onChange={() => handleAmountRangeChange([0, 25000])}
          />
          <label htmlFor="under25000">Under 25,000</label>
        </div>
        <div>
          <input
            type="radio"
            id="under50000"
            name="amount"
            value="under50000"
            onChange={() => handleAmountRangeChange([0, 50000])}
          />
          <label htmlFor="under50000">Under 50,000</label>
        </div>
        {/* <hr className={styles.horizontalLine} />
        <div className={styles.subscriptionFees}>
          <h3>SUBSCRIPTION FEES RANGE</h3>
          <CustomRangeSlider
            min={0}
            max={100}
            step={1}
            onChange={handleCagrRangeChange}
          />
        </div> */}
        <hr className={styles.horizontalLine} />

        <div className={styles.volatility}>
          <h3>VOLATILITY</h3>
          <img
            src="./low-volatility.png"
            className={styles.volatilityOption}
            onClick={() => handleVolatilityChange("Low")}
          />
          <img
            src="./medium-volatility.png"
            className={styles.volatilityOption}
            onClick={() => handleVolatilityChange("Medium")}
          />
          <img
            src="./high-volatility.png"
            className={styles.volatilityOption}
            onClick={() => handleVolatilityChange("High")}
          />
        </div>
        <hr className={styles.horizontalLine} />

        <div className={styles.rebalanceTimePeriod}>
          <h3>REBALANCE TIME PERIOD</h3>
          <button
            className={`${styles.timePeriodButton} ${
              selectedTimePeriod === "Daily" ? styles.selected : ""
            }`}
            onClick={() => handleTimePeriodChange("Daily")}
          >
            Daily
          </button>
          <button
            className={`${styles.timePeriodButton} ${
              selectedTimePeriod === "Weekly" ? styles.selected : ""
            }`}
            onClick={() => handleTimePeriodChange("Weekly")}
          >
            Weekly
          </button>
          <button
            className={`${styles.timePeriodButton} ${
              selectedTimePeriod === "Biweekly" ? styles.selected : ""
            }`}
            onClick={() => handleTimePeriodChange("Biweekly")}
          >
            Biweekly
          </button>
          <button
            className={`${styles.timePeriodButton} ${
              selectedTimePeriod === "Monthly" ? styles.selected : ""
            }`}
            onClick={() => handleTimePeriodChange("Monthly")}
          >
            Monthly
          </button>
        </div>
        <hr className={styles.horizontalLine} />

        <div className={styles.investmentStrategy}>
          <h3>INVESTMENT STRATEGY</h3>
          <div>
            <input
              type="checkbox"
              id="assetAllocation"
              name="strategy"
              checked={selectedStrategies.includes("Equity")}
              onChange={() => handleStrategyChange("Equity")}
            />
            <label htmlFor="assetAllocation">Equity</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="corporateGovernance"
              name="strategy"
              checked={selectedStrategies.includes("Futures")}
              onChange={() => handleStrategyChange("Futures")}
            />
            <label htmlFor="corporateGovernance">Futures</label>
          </div>

          <div>
            <input
              type="checkbox"
              id="Options"
              name="strategy"
              checked={selectedStrategies.includes("Options")}
              onChange={() => handleStrategyChange("Options")}
            />
            <label htmlFor="Options">Options</label>
          </div>
        </div>
      </div>
      {/* right side */}
      <div className={styles.results}>
        {/* display active filter */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <input
            type="text"
            placeholder='Try "All Weather" or "Infosys"'
            value={searchQuery}
            onChange={handleSearchChange}
            className={styles.searchBar}
          />
          <button onClick={handleResetFilters}>Reset</button>
        </div>
        <div className={styles.activeFilters}>
          <span>Active Filters:</span>
          {selectedStrategies.map((filter, index) => (
            <span key={index} className={styles.activeFilter}>
              {filter}
              <button
                className={styles.closeFilterBtn}
                onClick={() => removeFilter(filter)}
              >
                ×
              </button>
            </span>
          ))}
          <span className={styles.resultsCount}>
            <span className={styles.resultsCountBold}>
              {filteredItems.length}
            </span>{" "}
            Results found.
          </span>
        </div>

        {filteredItems.map((item, index) => (
          <ListItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
