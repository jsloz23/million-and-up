/** @jest-environment jsdom */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CryptoModal from "./CryptoModal";
import "@testing-library/jest-dom";

const mockCryptoData = {
  id: "1",
  name: "Bitcoin",
  symbol: "BTC",
  price_usd: "26132.55",
  percent_change_24h: "-0.43",
  market_cap_usd: "508825486921.92",
};

describe("CryptoModal", () => {
  it("renders crypto data correctly", () => {
    const handleFetchDetails = jest.fn();

    render(
      <CryptoModal
        cryptoData={mockCryptoData}
        handleFetchDetails={handleFetchDetails}
      />
    );

    // Assert that crypto data is displayed correctly
    expect(screen.getByText("Bitcoin")).toBeInTheDocument();
    expect(screen.getByText("Price:$26132.55 USD")).toBeInTheDocument();
    expect(screen.getByText("24h Change: -0.43 %")).toBeInTheDocument();
    expect(
      screen.getByText("Market Cap: 508825486921.92 USD")
    ).toBeInTheDocument();

    // Assert that the Close button is present
    expect(screen.getByText("Close")).toBeInTheDocument();
  });

  it("calls handleFetchDetails when Close button is clicked", () => {
    const handleFetchDetails = jest.fn();

    render(
      <CryptoModal
        cryptoData={mockCryptoData}
        handleFetchDetails={handleFetchDetails}
      />
    );

    // Simulate a click on the Close button
    fireEvent.click(screen.getByText("Close"));

    // Assert that handleFetchDetails was called
    expect(handleFetchDetails).toHaveBeenCalled();
  });
});
