import React from 'react';
import './SearchBar.css';

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="고양이 ID로 검색..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="search-input"
      />
      {searchTerm && (
        <button
          className="clear-btn"
          onClick={() => onSearchChange('')}
        >
          ✕
        </button>
      )}
    </div>
  );
}

export default SearchBar;
