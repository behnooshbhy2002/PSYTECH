import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function SearchResults() {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchTerm = searchParams.get("q");
    fetch(`/search?q=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => setSearchResults(data));
  }, [location.search]);

  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResults;
