import React, { useState } from "react";

function Doubt() {
  const [fromDate, setFromDate] = useState(""); // State for the "From" date
  const [toDate, setToDate] = useState(""); // State for the "To" date
  const [filter, setFilter] = useState([]);
  const data = [
    {
      day: "SUNDAY",
      temp: 68,
      image: "https://png.pngtree.com/png-clipart/20190904/original/pngtree-windy-weather-png-image_4468848.jpg",
      message: "WINDY",
      date: "02/07/2023",
    },
    {
      day: "MONDAY",
      temp: 74,
      image: "https://clipart-library.com/data_images/193476.png",
      message: "SUNNY",
      date: "03/07/2023",
    },
    {
      day: "TUESDAY",
      temp: 83,
      image: "https://p7.hiclipart.com/preview/275/622/480/thunderstorm-lightning-clip-art-thunder.jpg",
      message: "THUNDERSTORMS",
      date: "04/07/2023",
    },
    {
      day: "WEDSDAY",
      temp: 75,
      image: "https://www.edupics.com/image-01cloudy-dm9953.jpg",
      message: "MOSTLY CLOUDY",
      date: "05/07/2023",
    },
    {
      day: "THUSDAY",
      temp: 82,
      image: "https://w7.pngwing.com/pngs/832/827/png-transparent-cloudy-sun-cloud-material-free-to-pull-the-sun-partly-cloudy-material-thumbnail.png",
      message: "PARTLY CLOUDY",
      date: "06/07/2023",
    },
    {
      day: "FRIDAY",
      temp: 81,
      image: "https://img.freepik.com/free-vector/rainy-cloud-sticker-white-background_1308-59851.jpg?w=2000",
      message: "RAIN",
      date: "07/07/2023",
    },
    {
      day: "SAT",
      temp: 90,
      image: "https://clipart-library.com/data_images/193476.png",
      message: "SUNNY",
      date: "08/07/2023",
    },
  ];
  const handleSubmit = () => {
    // Filter data based on date range
    const filteredData = data.filter((item) => {
      const itemDate = new Date(item.date);
      if (!isNaN(itemDate)) {
        if ((!fromDate || itemDate >= new Date(fromDate)) && (!toDate || itemDate <= new Date(toDate))) {
          return true;
        }
      } else {
        return false;
      }
    });

    // Use the filtered data as needed
    console.log(filteredData);
    setFilter(filteredData);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="d-flex flex-row">
          <h1>From</h1>
          <input type="text" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
          <h1>To</h1>
          <input type="text" value={toDate} onChange={(e) => setToDate(e.target.value)} />
          <button className="btn1" style={{ marginLeft: "20px", marginRight: "20px" }} onClick={handleSubmit}>
            Submit
          </button>
          <h2 className="" style={{ color: "gary" }}>
            FORECAST
          </h2>
        </div>
      </div>

      <ul>
      {/* <div className="grid-container">
  {filter.map((filteredItem, index) => (
    <div key={index} className="grid-item">
      <button style={{ backgroundColor: "blue", color: "white", width: "90px" }}>{filteredItem.day}</button>
      <h5>{filteredItem.temp}</h5>
      <img src={filteredItem.image} className="img" alt={filteredItem.message} style={{ height: "100px", width: "100px" }} />
      <p>{filteredItem.message}</p>
    </div>
  ))}
</div> */}
 <div className='container mt-5'>
  <div className='row'>
    <div className='col-md-2'></div>
    <div className=''>
      <div className=' d-flex flex-row flex-wrap justify-content-start'>
        {filter.length > 0 &&
          filter.map((filteredItem, index) => (
            <div key={index} className='card  mb-5 cardimage shadow' style={{width:"120px"}}>
              <button style={{ backgroundColor: "blue", color: "white", width: "90px" }}>
                {filteredItem.day}
              </button>
              <h5>{filteredItem.temp}</h5>
              <img
                src={filteredItem.image}
                className='img'
                alt={filteredItem.message}
                style={{ height: "100px", width: "100px" }}
              />
              <p>{filteredItem.message}</p>
              <p>{filteredItem.date}</p>
            </div>
          ))}
      </div>
    </div>
  </div>
</div>

      </ul>
    </div>
  );
}

export default Doubt;


// import React from 'react';

// const Doubt = () => {
//   const data = [
//     {
//       day: "SUNDAY",
//       temp: 68,
//       image: "https://png.pngtree.com/png-clipart/20190904/original/pngtree-windy-weather-png-image_4468848.jpg",
//       message: "WINDY",
//       date: "02/07/2023",
//     },
//     {
//       day: "MONDAY",
//       temp: 74,
//       image: "https://clipart-library.com/data_images/193476.png",
//       message: "SUNNY",
//       date: "03/07/2023",
//     },
//     {
//       day: "TUESDAY",
//       temp: 83,
//       image: "https://p7.hiclipart.com/preview/275/622/480/thunderstorm-lightning-clip-art-thunder.jpg",
//       message: "THUNDERSTORMS",
//       date: "04/07/2023",
//     },
//     {
//       day: "WEDSDAY",
//       temp: 75,
//       image: "https://www.edupics.com/image-01cloudy-dm9953.jpg",
//       message: "MOSTLY CLOUDY",
//       date: "05/07/2023",
//     },
//     {
//       day: "THUSDAY",
//       temp: 82,
//       image: "https://w7.pngwing.com/pngs/832/827/png-transparent-cloudy-sun-cloud-material-free-to-pull-the-sun-partly-cloudy-material-thumbnail.png",
//       message: "PARTLY CLOUDY",
//       date: "06/07/2023",
//     },
//     {
//       day: "FRIDAY",
//       temp: 81,
//       image: "https://img.freepik.com/free-vector/rainy-cloud-sticker-white-background_1308-59851.jpg?w=2000",
//       message: "RAIN",
//       date: "07/07/2023",
//     },
//     {
//       day: "SAT",
//       temp: 90,
//       image: "https://clipart-library.com/data_images/193476.png",
//       message: "SUNNY",
//       date: "08/07/2023",
//     }
//   ];

//   const filteredData = data.filter(item => item.temp > 60);

//   return (
//     <div className='container'>
//       <div className='row'>
//         <div className='col-md-2'></div>
//         <div className='col-md-2'>
//           <div className='d-flex flex-row flex-wrap justify-content-start'>
//             {filteredData.map((item, index) => (
//               <div key={index} className='card w-50 mb-5 cardimage shadow'>
//                 <button style={{ backgroundColor: "blue", color: "white", width: "90px" }}>
//                   {item.day}
//                 </button>
//                 <h5>{item.temp}</h5>
//                 <img
//                   src={item.image}
//                   className='img'
//                   alt={item.message}
//                   style={{ height: "100px", width: "100px" }}
//                 />
//                 <p>{item.message}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Doubt;
