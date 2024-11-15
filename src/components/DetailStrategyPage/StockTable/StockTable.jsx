import React, { useState, useEffect } from "react";
import styles from "./StockTable.module.css";
import {
  STRATEGIES,
  callAxiosApi,
  getStrategy,
  USERBROKER,
  userBrokerDetails,
  TRADELOG,
} from "../../../utils/api_utils";

const StockTable = () => {
  const [stockList, setStockList] = useState([]);
  const stocks = [
    {
      tradingsymbol: "Hindustan Ltd",
      buy_price: "31,743",
      current_value: "31,743",
      unrealised_pnl: "+3.35%",
      buy_qty: 1,
      icon: "./hindustan.png",
      positiveReturn: true,
    },
    // {
    //   tradingsymbol: "Punjab Bank",
    //   buy_price: "31,743",
    //   current_value: "31,743",
    //   unrealised_pnl: "+3.35%",
    //   buy_qty: 6,
    //   icon: "./punjab.png",
    //   positiveReturn: true,
    // },
    // {
    //   tradingsymbol: "Trent Ltd",
    //   buy_price: "31,743",
    //   current_value: "31,743",
    //   unrealised_pnl: "+3.35%",
    //   buy_qty: 10,
    //   icon: "./trent.png",
    //   positiveReturn: true,
    // },
    // {
    //   tradingsymbol: "Finance Ltd",
    //   buy_price: "31,743",
    //   current_value: "31,743",
    //   unrealised_pnl: "+3.35%",
    //   buy_qty: 12,
    //   icon: "./finance.png",
    //   positiveReturn: true,
    // },
    // {
    //   tradingsymbol: "Rec Limited",
    //   buy_price: "31,743",
    //   current_value: "31,743",
    //   unrealised_pnl: "+3.35%",
    //   buy_qty: 6,
    //   icon: "./rec.png",
    //   positiveReturn: true,
    // },
    // {
    //   tradingsymbol: "Indian Railways",
    //   buy_price: "31,743",
    //   current_value: "31,743",
    //   unrealised_pnl: "-1.36%",
    //   buy_qty: 12,
    //   icon: "./india-railways.png",
    //   positiveReturn: false,
    // },
  ];

  useEffect(() => {
    const fetchStrategies = async () => {
      try {
        const response = await callAxiosApi(getStrategy, {
          table: TRADELOG,
        });

        if (response.data.errorStatus === false) {
          // console.log("setStockList", response.data.data);

          setStockList(response.data.data);
        } else {
          // console.log("not get getStrategy data");
        }
      } catch (e) {
        console.log("API Not Fetched");
      }
    };
    fetchStrategies();
  }, []);

  return (
    <>
      {stockList.length > 0 && (
        <div className={styles.stockTableContainer}>
          <table className={styles.stockTable}>
            <thead>
              <tr className={styles.tableTh}>
                <th className={styles.tableTh}>Stock</th>
                <th className={styles.tableTh}>Avg. Buy Price (₹)</th>
                <th className={styles.tableTh}>Current Price (₹)</th>
                <th className={styles.tableTh}>Returns (%)</th>
                <th className={styles.tableTh}>Shares</th>
              </tr>
            </thead>
            <tbody>
              {stockList.map((stock, index) => (
                <tr key={index}>
                  <td>
                    {/* <img src={stock.icon} alt={stock.tradingsymbol} className={styles.stockImage} /> */}
                    <span className={styles.stockName}>
                      {stock.tradingsymbol}
                    </span>
                  </td>
                  <td className={styles.buy_price}>{stock.buy_price}</td>
                  <td className={styles.current_value}>
                    {stock.current_value}
                  </td>
                  <td
                    className={`${styles.unrealised_pnl} ${
                      stock.unrealised_pnl.toString().includes("-")
                        ? styles.negative
                        : styles.positive
                    }`}
                  >
                    {stock.unrealised_pnl}
                  </td>
                  <td className={styles.buy_qty}>{stock.buy_qty}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div>
            <button
              className={styles.closeSubscription}
              // onClick={handleSubscribe}
            >
              Close Subscription
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default StockTable;
