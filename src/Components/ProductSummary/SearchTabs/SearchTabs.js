import React,{useState} from "react";

export const SearchTabs = () => {
    const [sortBy, setSortBy] = useState("Sort By:Relevance");
  return (
    <div className="search-tabs-component">
      <select value={sortBy}>
        <option value="Sort By: Brand - A to Z">Sort By: Brand - A to Z</option>
        <option></option>
        <option></option>
        <option></option>
      </select>
    </div>
  );
};
