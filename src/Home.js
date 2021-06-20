import React from "react";
import ReperioLanding from "./photos/ReperioLanding.jpg";
import View from "react";
import { white } from "color-name";

function Home(){
    return (
        <body>
        
        <div style={{alignItems: "center", justifyContent: "center", display: "flex"}}>
        
        <img src={ReperioLanding} height={1000} width={2000} />
        <div className="rectangle" style={{position: "absolute", bottom: 100}}/>
        <div style={{position: "absolute", fontSize: 27, color: "white", bottom: 135}}>Discover  ●  Share  ●  Create</div>
        <div className="rectangle2" style={{position: "absolute", bottom: -35}}/>
        
        <div style={{position: "absolute", fontSize: 27, color: "white", bottom: -10}}>
            
            <a href="/Login" style={{color: "white"}}>Sign Up</a>
            </div>
        </div>
        
    </body>
    );
}



export default Home;


