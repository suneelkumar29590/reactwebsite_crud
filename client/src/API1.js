import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
 

function AnotherPage() {
  const { data } = useParams();
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    // Fetch data from API based on the received parameter
    fetch(`http://localhost:5010/allbrowse/${apiData.companyname}`)
      .then(response => response.json())
      .then(data => setApiData(data))
      .catch(error => console.error('Error fetching API data:', error));
  }, [data]);

  return (
    <div>
      <p>This is Another Page</p>
      {apiData ? (
        <p>Data from source: {apiData.companyname}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default AnotherPage;