 

import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchResultCard from "./SearchReslt"; // Import your card component

function Browse() {
  const [jobs, setJobs] = useState([]);
  const [userskills, setUserskills] = useState('');

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    const api = "http://localhost:5010/allbrowse";
    const authToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjRkNWQ3NGNhNmZmZDVkNWMyMjVkNmJiIiwiaWF0IjoxNjkxNzQ0NTI3LCJleHAiOjE3Mjc3NDQ1Mjd9.jkgWOgy8JfmY2upTDUaxtaEPvGLSFfCxkFMOY2TFDXk";
    try {
      const response = await axios.get(api, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      setJobs(response.data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  const searchBySkills = () => {
    const filteredJobs = jobs.filter(job =>
      job.role && job.role.toLowerCase().includes(userskills.toLowerCase().trim())
    );
    setJobs(filteredJobs);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by skills"
        value={userskills}
        onChange={(e) => setUserskills(e.target.value)}
      />
      <button onClick={searchBySkills}>Search</button>

      <div className="search-results">
        {jobs.map((job) => (
          <SearchResultCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
}

export default Browse;