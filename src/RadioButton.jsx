import React,{useContext} from "react"
import { UartContext } from "./App"

function RadioButton(props){
    const uart = useContext(UartContext)
    const style={
        backgroundColor:props.condition() ? "blue":"transparent",
        width:"10px",
        height:"10px",
        border:"2px solid grey",
        borderRadius:"10px",
        float:"right"
    }
    return <div style={style} onClick={props.onclick}>

    </div>
}

export default RadioButton;