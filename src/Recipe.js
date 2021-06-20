import React from "react";
import Search from "./components/Search";

function Recipe() {
    return (
    <body>
        <div style={{margin: 50, alignItems: "center", justifyContent: "center", display: "flex", fontSize: 32, fontFamily: 'Heebo'}}>
            Discover Thousands of Recipes
        </div>
        <div style={{margin: 50, alignItems: "center", justifyContent: "center", display: "flex", fontFamily: 'Heebo'}}>
    
        <Search/>
        </div>
    </body>
      
    );
}

export default Recipe;