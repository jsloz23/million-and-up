/** @jest-environment jsdom */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CryptoList from "./CryptoList";
import "@testing-library/jest-dom";

const mockCryptoData = [
  {
    id: "1",
    name: "Bitcoin",
    symbol: "BTC",
    price_usd: "26132.55",
    percent_change_24h: "-0.43",
    market_cap_usd: "508825486921.92",
  },
];

describe("CryptoList", () => {
  it("renders crypto list items based on filtered data", () => {
    const term = "Bit"; // Filter term
    const handleFetchDetails = jest.fn();

    render(
      <CryptoList
        cryptoData={mockCryptoData}
        term={term}
        handleFetchDetails={handleFetchDetails}
      />
    );

    // Assert that the filtered crypto items are rendered
    expect(screen.getByText("Bitcoin (BTC)")).toBeInTheDocument();

    // Ensure that non-matching items are not rendered
    expect(screen.queryByText("Non-Matching Crypto")).toBeNull();
  });

  it('calls handleFetchDetails when a CryptoListItem "See Details" button is clicked', () => {
    const term = ""; // No filter applied
    const handleFetchDetails = jest.fn();

    render(
      <CryptoList
        cryptoData={mockCryptoData}
        term={term}
        handleFetchDetails={handleFetchDetails}
      />
    );

    // Simulate a click on the "See Details" button of the first CryptoListItem
    const seeDetailsButton = screen.getByText("See Details");
    expect(seeDetailsButton).toBeInTheDocument();
    fireEvent.click(seeDetailsButton);

    // Assert that handleFetchDetails was called with the correct ID
    expect(handleFetchDetails).toHaveBeenCalledWith("1");
  });
});
