import React from "react";

function SearchResultCard({ job }) {
  return (
    <div className="search-card">
      <h3>{job.role}</h3>
      <p>{job.companyname}</p>
      {/* Other job details */}
    </div>
  );
}

export default SearchResultCard;