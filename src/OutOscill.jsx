import React,{useState,useContext,useEffect} from "react"
import "./OutOscill.css"
import { UartContext } from "./App";
import RadioButton from "./RadioButton";
import SerialOutput from "./SerialOutput";

function OutOscill(props){
    const uart = useContext(UartContext)
    const [bootImage,setBootImage] = useState(0)
    const [option,changeOption] =useState(0);
    function openTerminal(a){
        changeOption(1)
    }
    function openOsci(){
        changeOption(0)
    }
    useEffect(function(){
        function giveOut(e){
            if(e.detail.pin==uart.selectedPin){
                setBootImage(1)
                setTimeout(function(){
                    setBootImage(0)
                },500)
            }
        }
        window.addEventListener("booting",giveOut)
        return function(){
            window.removeEventListener("booting",giveOut)
        }
    })
    function clearOthers(){
        for(const [key,val] of Object.entries(uart.uart)){
            if(val==uart.selectedPin){
                uart.uart[key] = ""
            }
        }
    }
    function setRx(){
        clearOthers()
        uart.setUart((c)=>{return {...c,rx:uart.selectedPin}})
    }
    function setTx(){
        clearOthers()
        uart.setUart((c)=>{return {...c,tx:uart.selectedPin}})
    }
    function setVcc(){
        clearOthers()
        uart.setUart((c)=>{return {...c,vcc:uart.selectedPin}})
    }
    function setGnd(){
        clearOthers()
        uart.setUart((c)=>{return {...c,gnd:uart.selectedPin}})
    }
    const imageStyle={
        backgroundImage:"url("+(bootImage?"RX.svg":uart.osc)+")",
        backgroundSize:"contain",
        backgroundRepeat:"no-repeat",
        backgroundPosition:"center",
        border:"1px solid black"
    }
    function OscilloScope(){
        if(option==0){
            return <div className="viewbox oscilloscopecontainer">
                <div style={imageStyle} className="oscillo"></div>
                <div className="pinprops">
                    <div><RadioButton condition={function(){return uart.uart.gnd==uart.selectedPin}} onclick={setGnd}/>GND</div>
                    <div><RadioButton condition={function(){return uart.uart.vcc==uart.selectedPin}} onclick={setVcc}/>VCC</div>
                    <div><RadioButton condition={function(){return uart.uart.rx==uart.selectedPin}} onclick={setRx}/>Rx</div>
                    <div><RadioButton condition={function(){return uart.uart.tx==uart.selectedPin}} onclick={setTx}/>Tx</div>
                </div>
            </div>
        }else{
            return <div className="viewbox outputcontainer">
                <SerialOutput></SerialOutput>
            </div>
        }
    }
    return <div className="ttl">
        <div className="options">
            <div className="option" onClick={openTerminal}>Ttl</div>
            <div className="option" onClick={openOsci}>Os</div>
        </div>
        {OscilloScope()}
    </div>
}

export default OutOscill