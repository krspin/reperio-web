import React, { useEffect, useState } from "react";
import Search from "./components/Search";
import axios from "axios";


const useFetch = (targetUrl) => {
    const [data, setData] = useState(null);
    useEffect(() => {
      async function fetchData() {
        const response = await fetch(targetUrl);
        const json = await response.json();
        setData(json);
      }
      fetchData();
    }, [targetUrl]);
  
    return data;
  };



function Recipe() {

    //insert api key here
    
    //removed for commit
    const result = useFetch(URL);
    //const recipeList = result.map((rec) => rec);
    //json object is result
    const recList = [];
    
    for (var i in result){
        recList.push(i, result [i]);
    }
    

    

    return (
    <body>
        <div style={{margin: 50, alignItems: "center", justifyContent: "center", display: "flex", fontSize: 32, fontFamily: 'Heebo'}}>
            Discover Thousands of Recipes
        </div>
        <div style={{margin: 50, alignItems: "center", justifyContent: "center", display: "flex", fontFamily: 'Heebo'}}>
        <Search/>
        </div>
        <div className= "recipes">
        <div>
        {recList}
   
        <h1>Something else</h1>
        </div>
        </div>
        
    </body>
      
    );
}

export default Recipe;