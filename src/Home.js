
import { useState } from "react"; 

export default function Home(props) {



    return (
        <nav className="home"> 
            <h1>  
                {props.name}
            </h1>

        </nav>  
    )
}

