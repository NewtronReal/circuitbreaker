import React,{useContext} from "react"
import { UartContext } from "./App"

function Pin(props){
    const uart = useContext(UartContext)

    function backgroundColor(){
        if(uart.selectedPin==props.data.name){
            return "blue"
        }else if(uart.uart.rx==props.data.name){
            return "orange"
        }else if(uart.uart.tx==props.data.name){
            return "purple"
        }else if(uart.uart.gnd==props.data.name){
            return "black"
        }else if(uart.uart.vcc==props.data.name){
            return "red"
        }else{
            return "transparent"
        }
    }
    const style={
        width:props.data.size+"px",
        height:props.data.size+"px",
        left:props.data.x+"px",
        top:props.data.y+"px",
        backgroundColor:backgroundColor(),
        position:"absolute",
        cursor:"crosshair",
        borderRadius:props.data.size/2+"px"
    }
    function clicked(e){
        uart.setSelectedPin(props.data.name)
        uart.setOsc(props.data.osc)
    }


    return (
        <div style={style} onClick={clicked}></div>
    )
}

export default Pin