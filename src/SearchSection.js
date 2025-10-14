import React from "react";
import { FaSearch } from "react-icons/fa"; // Import search icon
import "./SearchSection.css";

const SearchSection = () => {
  return (
    <div className="search-section">
      <input type="text" placeholder="Job Search By Keywords" />
      <button className="search-btn">
        <FaSearch size={16} color="#fff" /> {/* Search icon inside button */}
      </button>
      <select>
        <option>Experience</option>
        <option>Fresher</option>
        <option>1-3 Years</option>
        <option>3-5 Years</option>
        <option>5+ Years</option>
      </select>
    </div>
  );
};

export default SearchSection;
