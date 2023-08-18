// import React, { useState, useEffect } from 'react';
// import {useHistory} from "react-router-dom"

// function SinglePage() {
//   const history = useHistory();
//   const [apiData, setApiData] = useState([]);

//   useEffect(() => {
//     // Fetch data from API
//     fetch('http://localhost:5010/allbrowse')
//       .then(response => response.json())
//       .then(data => setApiData(data))
//       .catch(error => console.error('Error fetching API data:', error));
//   }, []);

//   const navigateToAnotherPage = (data) => {
//     history.push(`/apicode/${data}`);
//   };

//   return (
//     <div>
//       <p>This is the Single Page</p>
//       <p>API Data:</p>
//       <ul>
//         {apiData.map((item, index) => (
//           <li key={index}>
//             {item.companyname} <button onClick={() => navigateToAnotherPage(item.id)}>Go to Another Page</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default SinglePage;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function SinglePage() {
  const navigate = useNavigate();
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    // Fetch data from API
    fetch('http://localhost:5010/allbrowse')
      .then(response => response.json())
      .then(data => setApiData(data))
      .catch(error => console.error('Error fetching API data:', error));
  }, []);

  const navigateToAnotherPage = (data) => {
    navigate(`/apicode1/${data}`);
  };

  return (
    <div>
      <p>This is the Single Page</p>
      <p>API Data:</p>
      <ul>
        {apiData.map((item, index) => (
          <li key={index}>
            {item.companyname} <button onClick={() => navigateToAnotherPage(item.id)}>Go to Another Page</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SinglePage;