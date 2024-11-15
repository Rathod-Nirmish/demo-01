import axios from "axios";

// const localApiUrl = "https://fitnat.onrender.com"
// const localApiUrl = "http://localhost:3690"
const localApiUrl = "http://27.116.52.24:8087";

// All api routes
const getStrategy = `${localApiUrl}/getData`;
const insertData = `${localApiUrl}/insertData`;
const registerUser = `${localApiUrl}/registerUser`;
const loginApi = `${localApiUrl}/login`;
const userBrokerDetails = `${localApiUrl}/userBrokerDetails`;
const updateData = `${localApiUrl}/updateData`;
const generatePaymentLink = `${localApiUrl}/generatePaymentLink`;
const brokerTypes = `${localApiUrl}/brokerTypes`;
const makePayment = `${localApiUrl}/makePayment`;
const verifyPanAndSendOtp = `${localApiUrl}/verifyPanAndSendOtp`;
const verifyOtpAndStoreData = `${localApiUrl}/verifyOtpAndStoreData`;
// const deleteData = `${localApiUrl}/deleteData`
// const getDashboardData =`${localApiUrl}/getDashboardData`

const headers = {
  "Content-Type": "application/json",
};

// common function to make api calls
const callAxiosApi = async (url = "", body = {}) => {
  const data = JSON.stringify(body);

  const config = {
    method: "post",
    url,
    headers,
    data,
  };

  try {
    const response = await axios.request(config);
    return response;
  } catch (error) {
    return error;
  }
};

// table names

const STRATEGIES = "strategies";
const STATUS = "statusUpdate";
const PATIENT = "patient";
const USER = "user";
const USERBROKER = "userBroker";
const BROKERS = "brokers";
const FAQS = "faqs";
const SUBSCRIPTIONFEES = "subscriptionFees";
const INQUIRY = "inquiry";
const TRADELOG = "tradeLog";
const BOUGHTSTRATEGY = "boughtStrategy";
// const REGISTERUSER = "registerUser";

export {
  STRATEGIES,
  STATUS,
  getStrategy,
  PATIENT,
  loginApi,
  insertData,
  updateData,
  USER,
  USERBROKER,
  BROKERS,
  FAQS,
  SUBSCRIPTIONFEES,
  INQUIRY,
  registerUser,
  userBrokerDetails,
  TRADELOG,
  generatePaymentLink,
  brokerTypes,
  makePayment,
  BOUGHTSTRATEGY,
  verifyPanAndSendOtp,
  verifyOtpAndStoreData,
  //  deleteData, loginApi,  updateData, birdViewApi, getDashboardData,
  callAxiosApi,
  //    insertPatient
};
