import React from 'react';
import NetWorth from './NetWorth';
import InvestmentTable from './InvestmentTable';
import PromotionBanner from './PromotionBanner';
// import  './CurrentEquityCase.css';

// import './tailwind.module.css';



const CurrentEquityCase = () => {
  return (
    <div>
    <NetWorth />
    <InvestmentTable />
    {/* <PromotionBanner /> */}
    </div>
  )
}

export default CurrentEquityCase