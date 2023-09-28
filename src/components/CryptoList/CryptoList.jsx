import React from "react";
import PropTypes from "prop-types";
import CryptoListItem from "../CryptoListItem/CryptoListItem"; // Import the CryptoListItem component

//The CryptoList component displays a list of cryptocurrencies based on filtered data.

function CryptoList({ cryptoData, term, handleFetchDetails }) {
  const filteredCryptoData = cryptoData.filter((crypto) =>
    crypto.name.toLowerCase().includes(term.toLowerCase())
  );

  return (
    <div className="crypto-list grid grid-cols-1 md:grid-cols-4 gap-4 relative z-0">
      {filteredCryptoData.map((crypto) => (
        <CryptoListItem
          key={crypto.id}
          name={crypto.name}
          symbol={crypto.symbol}
          priceUsd={crypto.price_usd}
          percentChange24h={crypto.percent_change_24h}
          marketCap={crypto.market_cap_usd}
          id={crypto.id}
          handleFetchDetails={handleFetchDetails}
        />
      ))}
    </div>
  );
}

// Define propTypes to specify the expected shape of props for type checking.
CryptoList.propTypes = {
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
  term: PropTypes.string,
  handleFetchDetails: PropTypes.func.isRequired,
};

export default CryptoList;
