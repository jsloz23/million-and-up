import React from "react";
import PropTypes from "prop-types";

//The CryptoModal component displays detailed information about a cryptocurrency in a modal.
const CryptoModal = ({ cryptoData, handleFetchDetails }) => {
  return (
    <div className="flex flex-col items-center justify-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-zinc-700 w-72 md:w-96 h-4/6 border-green-500 border-8">
      <div className="crypto-info border-2">
        <h3 className="text-lg text-center px-8">{cryptoData.name}</h3>
      </div>
      <div className="text-center my-5">
        <p>
          Price:
          {parseInt(cryptoData.price_usd).toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}{" "}
          USD
        </p>
        <p>24h Change: {cryptoData.percent_change_24h} %</p>
        <p>
          Market Cap:{" "}
          {parseInt(cryptoData.market_cap_usd).toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}{" "}
          USD
        </p>
        <p>1h Change: {cryptoData.percent_change_1h} %</p>
        <p>7d Change: {cryptoData.percent_change_7d}%</p>
        <p>Price BTC: {cryptoData.price_btc}</p>
        <p>Rank: {cryptoData.rank}</p>
        <p>Symbol: {cryptoData.symbol}</p>
      </div>
      <div className="mt-4 flex justify-center">
        <button
          className="bg-red-500 p-4 rounded-md"
          onClick={() => handleFetchDetails()}
        >
          Close
        </button>
      </div>
    </div>
  );
};

// Define propTypes to specify the expected shape of props for type checking.
CryptoModal.propTypes = {
  cryptoData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      symbol: PropTypes.string.isRequired,
      price_usd: PropTypes.string.isRequired,
      percent_change_24h: PropTypes.string.isRequired,
      market_cap_usd: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleFetchDetails: PropTypes.func.isRequired,
};

export default CryptoModal;
