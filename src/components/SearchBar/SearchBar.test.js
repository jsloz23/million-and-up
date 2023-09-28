/** @jest-environment jsdom */
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SearchBar from "./SearchBar";
import "@testing-library/jest-dom";

describe("SearchBar", () => {
  it("calls handleSearchChange with the correct value when input changes", () => {
    const handleSearchChange = jest.fn();
    const { getByPlaceholderText } = render(
      <SearchBar handleSearchChange={handleSearchChange} />
    );
    const input = getByPlaceholderText("Search for a crypto currency...");

    // Simulate user typing 'Bitcoin' in the input
    fireEvent.change(input, { target: { value: "Bitcoin" } });

    // Check if handleChange function was called with 'Bitcoin'
    expect(handleSearchChange).toHaveBeenCalledWith("Bitcoin");
  });
});
