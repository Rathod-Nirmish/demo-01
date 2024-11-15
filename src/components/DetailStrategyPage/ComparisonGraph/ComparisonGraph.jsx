// src/components/ComparisonGraph.js
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import CustomTooltip from "./CustomTooltip";
import ActiveGainersLosersList from './ActiveGainersLosersList';
import "./ComparisonGraph.css";

const data = [
  { name: "Jul", equity: 10, allWeather: 11 },
  { name: "Aug", equity: 40, allWeather: 30 },
  { name: "Sep", equity: 20, allWeather: 50 },
  { name: "Oct", equity: 60, allWeather: 40 },
  { name: "Nov", equity: 80, allWeather: 60 },
  { name: "Dec", equity: 110, allWeather: 80 },
  { name: "Jan", equity: 125, allWeather: 50 },
  { name: "Feb", equity: 110, allWeather: 60 },
  { name: "Mar", equity: 105, allWeather: 40 },
  { name: "Apr", equity: 90, allWeather: 30 },
  { name: "May", equity: 120, allWeather: 25 },
  { name: "Jun", equity: 115, allWeather: 20 },
];

const ComparisonGraph = () => {
  return (
    <div className="comparison-main-padding">
      <div className="comparison-main-outer-container">
        <div className="comparison-first-row-style">
          <h2 className="comparison-h2-style">Live Performance Vs Equity Large Cap</h2>
          <div class="dots">
            <span class="dot green"></span>
            <span class="dot yellow"></span>
            <span class="dot red"></span>
          </div>
        </div>
        <hr className="horizontal-line-comparison" />
        <div className="comparison-graph-container">
          <div className="comparison-graph">
            <ResponsiveContainer width="100%" height={400}>
              <AreaChart data={data}>
                <defs>
                  <linearGradient
                    id="colorAllWeather"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#4681D9" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#4681D9" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorEquity" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#EB42AF" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#EB42AF" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="allWeather"
                  stroke="#4681D9"
                  fillOpacity={1}
                  fill="url(#colorAllWeather)"
                  strokeWidth={3}
                />
                <Area
                  type="monotone"
                  dataKey="equity"
                  stroke="#EB42AF"
                  fillOpacity={1}
                  fill="url(#colorEquity)"
                  strokeWidth={3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="comparison-graph-container-right-side">
            <div >
              <img
                src="./best-strategies-img-right.png"
                alt="Description of the image"
                className="best-strategies-img-right-comparison-graph"
              />
            </div>
            <div>
            <ActiveGainersLosersList />
            </div>
          </div>
        {/* <ActiveGainersLosersList /> */}
        </div>
      </div>
    </div>
  );
};

export default ComparisonGraph;
