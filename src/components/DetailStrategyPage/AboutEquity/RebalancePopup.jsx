import React, { useState } from "react";
import styles from "./RebalancePopup.module.css"; // Assuming your CSS file is named like this

const RebalancePopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const buyingList = [
    { symbol: "Infosys Ltd", price: 1465, qty: 45, total: 65947 },
    { symbol: "HDFC Bank Ltd", price: 1615, qty: 10, total: 16150 },
    { symbol: "TCS", price: 3345, qty: 3, total: 10035 },
    { symbol: "ICICI Bank Ltd", price: 990, qty: 15, total: 14850 },
    { symbol: "Reliance Industries Ltd", price: 990, qty: 20, total: 14850 },
  ];

  const sellingList = [
    { symbol: "Suzlon Energy Ltd", price: 75, qty: 200, total: 15000 },
    { symbol: "L&T", price: 2600, qty: 4, total: 10400 },
    { symbol: "Bharti Airtel Ltd", price: 880, qty: 7, total: 6160 },
    { symbol: "State Bank Of India (SBI)", price: 590, qty: 12, total: 7080 },
  ];

  const buyingTotal = 121832;
  const sellingTotal = 38642;

  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popupContainer}>
        <div className={styles.popupHeader}>
          <h2>Rebalance constituents</h2>
          <button className={styles.closeButton} onClick={onClose}>
            &times;
          </button>
        </div>

        <div className={styles.popupContent}>
          {/* Buying List Section */}
          <div className={styles.stocksList}>
            <span className={styles.stocksHeader}>
              Stocks Buying list: {buyingList.length}
            </span>
            <table className={styles.stocksTable}>
              <thead>
                <tr className={styles.stocksTableThStyle}>
                  <th className={styles.stocksTableThStyle}>Trading Symbol</th>
                  <th className={styles.stocksTableThStyle}>Buying Price(₹)</th>
                  <th className={styles.stocksTableThStyle}>Buying Qty</th>
                  <th className={styles.stocksTableThStyle}>
                    Total Buying Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {buyingList.map((stock, index) => (
                  <tr key={index}>
                    <td>{stock.symbol}</td>
                    <td>{stock.price}</td>
                    <td>{stock.qty}</td>
                    <td>{stock.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* <table className={styles.stocksTable}>
              <tbody>
                <tr>
                  <td>Total Value:</td>
                  <td> </td>
                  <td></td>
                  <td>buyingTotal</td>
                </tr>{" "}
              </tbody>
            </table> */}
            <div className={styles.totalValueContainer}>
              <span>Total Value:</span>
              <span className={styles.totalValue}>{buyingTotal}</span>
            </div>
          </div>

          {/* Selling List Section */}
          {sellingList.length > 0 && (
            <div className={styles.stocksList}>
              <span className={styles.stocksHeaderRed}>
                Stocks Selling list: {sellingList.length}
              </span>
              <table className={styles.stocksTable}>
                <thead>
                  <tr>
                    <th className={styles.stocksTableThStyle}>
                      Trading Symbol
                    </th>
                    <th className={styles.stocksTableThStyle}>
                      Selling Price(₹)
                    </th>
                    <th className={styles.stocksTableThStyle}>Selling Qty</th>
                    <th className={styles.stocksTableThStyle}>
                      Total Selling Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sellingList.map((stock, index) => (
                    <tr key={index}>
                      <td>{stock.symbol}</td>
                      <td>{stock.price}</td>
                      <td>{stock.qty}</td>
                      <td>{stock.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className={styles.totalValueContainer}>
                <span>Total Value:</span>
                <span className={styles.totalValue}>{sellingTotal}</span>
              </div>
            </div>
          )}
        </div>

        {/* Rebalance Button */}
        <div className={styles.rebalanceButton}>

        <button className={styles.rebalanceButtonStyle}>Rebalance Strategy</button>
        </div>
      </div>
    </div>
  );
};

export default RebalancePopup;
