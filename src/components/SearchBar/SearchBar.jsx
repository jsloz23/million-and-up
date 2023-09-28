import React, { useState } from "react";

function SearchBar({ handleSearchChange }) {
  const [term, setTerm] = useState("");

  const handleChange = (event) => {
    const newValue = event.target.value;
    setTerm(newValue);
    handleSearchChange(newValue);
  };

  return (
    <div className="w-full">
      <input
        type="text"
        placeholder="Search for a crypto currency..."
        className="w-full h-12 rounded-md p-4 text-black"
        value={term}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;
