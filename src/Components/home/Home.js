import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import './Home.css'

function Home() {

  const [countries, setCountries] = useState([]);
  const [search, setsearch] = useState("");
  const [filtercountries, setFiltercountries] = useState([]);

  

  const getCountries = async () => {
    try {
        const response = await axios.get('https://restcountries.com/v2/all');
        setCountries(response.data);
        setFiltercountries(response.data);
    } catch (error) {
        console.log(error);
    }
};



const columns = [
  {
      name: "Country Name",
      selector: (row) => row.name,
      sortable: true,
  },
  {
    name: "Country Flag",
    selector: (row) => <img width={50} height={50} src={row.flag} />,
},
  {
      name: "Country Region",
      selector: (row) => row.region,
  },
  {
      name: "Country Capital",
      
      selector: (row) => row.capital,
  },



];

useEffect(() => {
  getCountries();
}, []);

useEffect(() => {
  const result = countries.filter((country) => {
      return country.name.toLowerCase().match(search.toLowerCase());
  });

  setFiltercountries(result);
},[search]);



  const handleClick=()=>{
    localStorage.clear();
    window.location.reload();
}

  return (
    <div id="Home">
    <div className="background">
     <div className="btnend">
 <button className="btn btn-outline-light" onClick={handleClick}>Logout</button>
     </div>
       <h1 className="d-flex justify-content-center pb-5">Login Successfully</h1>
   
      
<div className="container">
<DataTable 
            title="Countries List"
            columns={columns} 
            data={filtercountries} 
            fixedHeader
            fixedHeaderScrollHeight='500px'
            selectableRowsHighlight
            highlightOnHover
            actions
            subHeader
            subHeaderComponent={
                <input
                    type="text"
                    placeholder="Search here"
                    className='form-control w-25'
                    value={search}
                    onChange={(e) => setsearch(e.target.value)}
                />
            }
            />
</div>
    
    </div>
    </div>
  );
}

export default Home;
