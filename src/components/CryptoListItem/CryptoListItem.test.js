/** @jest-environment jsdom */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CryptoListItem from "./CryptoListItem";
import "@testing-library/jest-dom";

const mockCryptoData = {
  name: "Bitcoin",
  symbol: "BTC",
  priceUsd: "26132.55",
  percentChange24h: "-0.43",
  marketCap: "508825486921.92",
  id: "1",
};

describe("CryptoListItem", () => {
  it("renders crypto data correctly", () => {
    const handleFetchDetails = jest.fn();

    render(
      <CryptoListItem
        name={mockCryptoData.name}
        symbol={mockCryptoData.symbol}
        priceUsd={mockCryptoData.priceUsd}
        percentChange24h={mockCryptoData.percentChange24h}
        marketCap={mockCryptoData.marketCap}
        id={mockCryptoData.id}
        handleFetchDetails={handleFetchDetails}
      />
    );

    // Assert that crypto data is displayed correctly
    expect(screen.getByText("Bitcoin (BTC)")).toBeInTheDocument();
    expect(screen.getByText("Price: 26132.55 USD")).toBeInTheDocument();
    expect(screen.getByText("24h Change: -0.43%")).toBeInTheDocument();
    expect(
      screen.getByText("Market Cap: 508825486921.92 USD")
    ).toBeInTheDocument();

    // Assert that the "See Details" button is present
    expect(screen.getByText("See Details")).toBeInTheDocument();
  });

  it('calls handleFetchDetails with the correct ID when "See Details" button is clicked', () => {
    const handleFetchDetails = jest.fn();
    const id = "1";

    render(
      <CryptoListItem
        name={mockCryptoData.name}
        symbol={mockCryptoData.symbol}
        priceUsd={mockCryptoData.priceUsd}
        percentChange24h={mockCryptoData.percentChange24h}
        marketCap={mockCryptoData.marketCap}
        id={id}
        handleFetchDetails={handleFetchDetails}
      />
    );

    // Simulate a click on the "See Details" button
    fireEvent.click(screen.getByText("See Details"));

    // Assert that handleFetchDetails was called with the correct ID
    expect(handleFetchDetails).toHaveBeenCalledWith(id);
  });
});
