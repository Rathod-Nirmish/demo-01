import React, { useState, useEffect } from "react";
// import './tailwind.css';
import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import MainHeader from "./components/MainHeader/MainHeader.jsx";
import Hero from "./components/Hero/Hero";
import MainHero from "./components/MainHero/MainHero.jsx";
import Overview from "./components/Overview/Overview.jsx";
import InvestmentInsight from "./components/InvestmentInsight/InvestmentInsight.jsx";
import InvestmentCards from "./components/InvestmentCards/InvestmentCards.jsx";
import DownloadComponent from "./components/DownloadComponent/DownloadComponent.jsx";
import Companies from "./components/Companies/Companies";
import CompaniesHome from "./components/CompaniesHome/CompaniesHome.jsx";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import Category from "./components/Category/Category";
import TradeWorkCarousel from "./components/TradeWorkCarousel/TradeWorkCarousel";
import CarouselComponent from "./components/CarouselComponent/CarouselComponent.jsx";
import Expertise from "./components/Expertise/Expertise";
import Advantages from "./components/Advantages/Advantages.jsx";
import Tips from "./components/Tips/Tips";
import InvestingForYou from "./components/InvestingForYou/InvestingForYou.jsx";
import GetStarted from "./components/GetStarted/GetStarted";
import TestimonialSlider from "./components/TestimonialSlider/TestimonialSlider.jsx";
import Footer from "./Footer/Footer";
import HomePage from "./components/HomePage/HomePage";
import AllWeatherInvesting from "./components/DetailStrategyPage/AllWeatherInvesting/AllWeatherInvesting.jsx";
import ComparisonGraph from "./components/DetailStrategyPage/ComparisonGraph/ComparisonGraph.jsx";
import AboutEquity from "./components/DetailStrategyPage/AboutEquity/AboutEquity.jsx";
import PeopleAlsoAsk from "./components/DetailStrategyPage/PeopleAlsoAsk/PeopleAlsoAsk.jsx";
import ActiveGainersLosersList from "./components/DetailStrategyPage/ComparisonGraph/ActiveGainersLosersList.jsx";
import InvestmentInfo from "./components/DetailStrategyPage/InvestmentInfo/InvestmentInfo.jsx";
import StockTable from "./components/DetailStrategyPage/StockTable/StockTable.jsx";

import AboutUsHero from "./components/AboutUsPage/AboutUsHero/AboutUsHero.jsx";
import WeBelieveBuying from "./components/AboutUsPage/WeBelieveBuying/WeBelieveBuying.jsx";
import LeadershipTeam from "./components/AboutUsPage/LeadershipTeam/LeadershipTeam.jsx";
import Timeline from "./components/AboutUsPage/Timeline/Timeline.jsx";
import ScurveTimeline from "./components/AboutUsPage/ScurveTimeline/ScurveTimeline.jsx";
import KnowledgeCentre from "./components/AboutUsPage/KnowledgeCentre/KnowledgeCentre";
import ContactForm from "./components/AboutUsPage/ContactForm/ContactForm.jsx";
import CommonyAskedQuestions from "./components/AboutUsPage/CommonyAskedQuestions/CommonyAskedQuestions";
import BuyTradeAndHold from "./components/AboutUsPage/BuyTradeAndHold/BuyTradeAndHold.jsx";
import Sidebar from "./components/ListPage/Sidebar/Sidebar.jsx";
// import CurrentEquityCase from "./components/investment/CurrentEquityCase.jsx";
import ExitedEquityCase from "./components/ExitedEquityCase/ExitedEquityCase.jsx";
import SuccessCard from "./components/SuccessCard/SuccessCard.jsx";
import ProtectedRoute from "./components/ProtectedRoute";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import CurrentEquityCase from "../Equity-frontend/src/components/CurrentEquityCase.jsx";
// import ExitedEquityCase from "../Equity-frontend/src/components/ExitedEquityCase.jsx";
import "../Equity-frontend/package.json";
import "../Equity-frontend/src";
import "../Equity-frontend/src/index.css";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import the components for the new routes
// import EquityGoldPage from "./components/EquityGoldPage";
// import AllWeatherInvestingPage from "./components/AllWeatherInvestingPage";
// import Top100StocksPage from "./components/Top100StocksPage";
// import EquityDebtPage from "./components/EquityDebtPage";

const HomeLayout = () => (
  <>
    <div className="white-gradient" />
    <MainHeader />
    <MainHero />
    <Overview />
    <div className="white-gradient-Expertise" />
    <InvestmentInsight />
    {/* <InvestmentCards /> */}
    <CompaniesHome />
    <DownloadComponent />
    <div className="white-background-empty"></div>
    <Footer />
    <Outlet /> {/* This will render the nested routes */}
  </>
);

function App() {
  // const [authToken, setAuthToken] = useState(false)

  //   useEffect(() => {
  //   const login = async () => {
  //     setAuthToken(localStorage.getItem("authToken"))

  //   }
  //   login();
  // },[localStorage.getItem("authToken")]);
  // console.log('authToken',authToken);

  return (
    <div className="App">
      <div></div>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute
              element={
                <>
                  <div className="white-gradient" />
                  <Header />
                  <Hero />
                  <Companies />
                  <Residencies />
                  <Category />

                  <Advantages />
                  <div className="white-gradient-Expertise" />
                  <Value />
                  <div className="white-gradient-contact" />
                  <Contact />
                  <div className="white-gradient-Expertise" />
                  <Expertise />
                  <Tips />
                  <TestimonialSlider />
                  <Footer />
                </>
              }
            />
          }
        />

        {/* <Route path="/home" element={<HomeLayout />}></Route> */}
        {/* Protect the /home route */}
        <Route
          path="/home"
          element={<PrivateRoute element={<HomeLayout />} />}
        />

        <Route
          path="/all-weather-investing"
          element={
            <>
              <div className="white-gradient" />
              <MainHeader />
              <AllWeatherInvesting />
              <ComparisonGraph />
              <AboutEquity />
              {/* <StockTable /> */}
              <PeopleAlsoAsk />
              {/* <ActiveGainersLosersList /> */}
              {/* <InvestmentInfo /> */}
              <DownloadComponent />
              <div className="white-background-empty"></div>
              <Footer />
            </>
          }
        />
        <Route
          path="/about-us"
          element={
            <>
              <div className="white-gradient" />
              <MainHeader />
              <AboutUsHero />
              <WeBelieveBuying />
              <Companies />
              <Timeline />
              <LeadershipTeam />
              <DownloadComponent />
              <div className="white-background-empty"></div>
              {/* <ScurveTimeline/> */}
              <Footer />
            </>
          }
        />
        <Route
          path="/faqs"
          element={
            <>
              <div className="white-gradient" />
              <MainHeader />
              <KnowledgeCentre />
              <ContactForm />
              <CommonyAskedQuestions />
              <BuyTradeAndHold />

              <Footer />
            </>
          }
        />
        <Route
          path="/strategies"
          element={
            <>
              <div className="white-gradient-strategies" />
              <MainHeader />
              <Sidebar />
              <BuyTradeAndHold />

              <Footer />
            </>
          }
        />
        {/* <Route
          path="/investment"
          element={
            <>
              <div className="white-gradient-strategies" />
              <MainHeader />
              <Sidebar />
              <BuyTradeAndHold />

              <Footer />
            </>
          }
        /> */}

        {/* <Route
          path="/investment"
          element={
            <>
              <div className="white-gradient-strategies" />
              <MainHeader />
              <CurrentEquityCase />

              <Footer />
            </>
          }
        /> */}

        {/* Protect the /investment route */}
        <Route
          path="/investment"
          element={
            <PrivateRoute
              element={
                <>
                  <div className="white-gradient-strategies" />
                  <MainHeader />
                  <CurrentEquityCase />
                  <Footer />
                </>
              }
            />
          }
        />
        <Route
          path="/exited-strategies"
          element={
            <PrivateRoute
              element={
                <>
                  <div className="white-gradient-strategies" />
                  <MainHeader />
                  <ExitedEquityCase />
                  <Footer />
                </>
              }
            />
          }
        />
        <Route
          path="/payment-success"
          element={
            <>
              <div className="white-gradient-strategies" />
              <SuccessCard />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
