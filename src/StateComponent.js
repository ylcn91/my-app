import React,{useState} from 'react'

function StateComponent() {

    const [isBordo, setBordo] = useState(true);

    const [isMavi, setMavi] = useState("trabzonspor");


    return (
       <h1 onClick = {()=> setBordo(!isBordo)}
       style={{color : isBordo ? "blue" : "crimson"}}               
       >
           State-böle birşey
       </h1>
    )
}

export default StateComponent;