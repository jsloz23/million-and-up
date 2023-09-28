import React from "react";
import PropTypes from "prop-types";

//The CryptoListItem component displays details for a single cryptocurrency.
function CryptoListItem({
  name,
  symbol,
  priceUsd,
  percentChange24h,
  marketCap,
  id,
  handleFetchDetails,
}) {
  return (
    <div className="crypto-list-item bg-zinc-700 rounded-sm p-4 mt-5 text-center">
      <div className="crypto-info border-2">
        <h3 className="text-lg">
          {name} ({symbol})
        </h3>
      </div>
      <div className="text-center my-5">
        <p>
          Price:{" "}
          {parseInt(priceUsd).toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}{" "}
          USD
        </p>
        <p>24h Change: {percentChange24h}%</p>
        <p>
          Market Cap:{" "}
          {parseInt(marketCap).toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}{" "}
          USD
        </p>
      </div>
      <button
        className="bg-green-500 p-2 rounded-md"
        onClick={() => handleFetchDetails(id)}
      >
        See Details
      </button>
    </div>
  );
}

// Define propTypes to specify the expected shape of props for type checking.
CryptoListItem.propTypes = {
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  priceUsd: PropTypes.string.isRequired,
  percentChange24h: PropTypes.string.isRequired,
  marketCap: PropTypes.string.isRequired,
};

export default CryptoListItem;
