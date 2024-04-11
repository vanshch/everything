import React from 'react';
import './BuyStock.css';
import Axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
let inv  = []
const BuyStock = () => {
  const investorData = [
    {
      id: 1,
      name: "Premji And Associates",
      description: "Radhakishan Shivkishan Damani is an Indian billionaire...",
    },
    {
      id: 2,
      name: "Premji",
      description: "Radhakishan Shivkishan Damani is an Indian billionaire...",
    },
  ];

  const [users, setUsers] = useState(investorData);
  const [checkedInvestorIds, setCheckedInvestorIds] = useState([]);

  

  const handleSeeStocks = () => {
   console.log("Checked Investors:", checkedInvestorIds); 
    // Implement your logic to send a response or fetch stocks for these investors
  };

  return (
    <>
      <div>
        <h1><center>Choose your investors </center></h1>
        {investorData.map((investor) => (
          <div className="food-items" key={investor.id}>
            {/* ... other elements ... */}
            <div class="mb-3">
              <div className="form-check">
                <input
                  type="checkbox"
                  className={investor.id}
                  id="dropdownCheck"
                //   checked={checkedInvestorIds.includes(investor.id)}
                  onChange={()=>{
                    inv.push(investor.name)
                  }}
                />
                <label className="form-check-label" for="dropdownCheck">
                  {investor.name}
                </label>
              </div>
            </div>
          </div>
        ))}
        <nav class="navbar fixed-bottom bg-body-tertiary">
          <div class="container-fluid">
            <button onClick={()=>{
                
            }}>
              <Link className="navbar-brand" to="#">See Stocks</Link>
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default BuyStock;
