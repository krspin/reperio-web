import React from "react";
import ReperioLanding from "../photos/ReperioLanding.jpg";
import View from "react";
import { white } from "color-name";

function Home(){
    return (

        <body>

        <div style={{alignItems: "center", justifyContent: "center", display: "flex"}}>
        <div className="rectangle3" style={{position: "absolute", bottom: 250, opacity: .8}}/>
        <div style={{position: "absolute", fontSize: 27, color: "white", bottom: 360}}>
            <div style={{fontSize: 100, fontFamily: 'Heebo'}}>Reperio</div>
            </div>
            <div style={{position: "absolute", fontSize: 27, color: "white", bottom: 300, fontFamily: 'Heebo'}}>
            Cloud integrated recipe tool built with a powerful nutrition analysis API
          </div>
        <img src={ReperioLanding} height={1000} width={2000} />
        <div className="rectangle" style={{position: "absolute", bottom: 100, opacity: .8}}/>
        <div style={{position: "absolute", fontSize: 27, color: "white", bottom: 135, fontFamily: 'Heebo'}}>Discover  ●  Share  ●  Create</div>
        <div className="rectangle2" style={{position: "absolute", bottom: 0, opacity: .8}}/>

        <div style={{position: "absolute", fontSize: 27, color: "white", bottom: 20}}>

            <a href="/Login" style={{color: "white", fontFamily: 'Heebo'}}>Sign Up</a>
            </div>
        </div>


    </body>
    );
}



export default Home;


