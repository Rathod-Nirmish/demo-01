import React from 'react';
import InvestmentCard from './InvestmentCard';
import './InvestmentInsights.css';

const InvestmentInsights = () => {
  const insights = [
    { title: 'Equity & Gold', description: 'Create wealth with equities, stay...', tag: 'Popular', buttonText: 'View EquityCases' },
    { title: 'All Weather Investing', description: 'One investment for all market...', tag: 'Trending', buttonText: 'View EquityCases' },
    { title: 'Top 100 Stocks', description: "India's most powerful companies in...", tag: 'Emerging', buttonText: 'View EquityCases' },
    { title: 'Equity & Debt', description: 'A unique 2-in-1 portfolio of equity & debt suitable for low risk wealth...', tag: 'Recently Launched', buttonText: 'View EquityCases' }
  ];

  return (
    <div className="investment-insights">
      <h2>Investment Insightsss</h2>
      <div className="insights-list">
        {insights.map((insight, index) => (
          <InvestmentCard
            key={index}
            title={insight.title}
            description={insight.description}
            tag={insight.tag}
            buttonText={insight.buttonText}
          />
        ))}
      </div>
      <div className="side-banner">
        <div className="banner-content">
          <h3>Best Strategies Exchanges</h3>
          <div className="coin-icon-placeholder"></div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentInsights;
