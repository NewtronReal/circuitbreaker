import "./Serialoutput.css"
import React,{useState,useContext,useEffect} from "react"
import { SerialContext , UartContext} from "./App";


function SerialOutput(props){
    const serial = useContext(SerialContext)
    const uart = useContext(UartContext)
    useEffect(function(){
        function printOutput(e){
            if(e.detail.pin!=uart.uart.tx){
                return
            }
            if(e.detail.output.endsWith("login:")){
                serial.setOutput(["login:"])
                return;
            }
            serial.setOutput(serial.output.concat(e.detail.output.split("\n")))
        }
        window.addEventListener("serialoutput",printOutput)
        return function(){
            window.removeEventListener("serialoutput",printOutput)
        }
    })
    function sendInput(e){
        if(e.key=="Enter"){
            var device = serial.devices[uart.uart.rx+uart.uart.tx]
            if(device==undefined){
                return
            }
            if(device.proc.rx!=uart.uart.rx){
                return
            }
            var c = serial.output
            c[c.length-1]+=e.target.value
            serial.setOutput(c)
            device.proc.process(e.target.value,serial.baudRate)
        }
    }
    function setFocus(){
        document.getElementById("serialin").focus()
    }
    return (
        <div className="scontainer" onClick={setFocus}>
            {serial.output.map(function(value, index){
                return <div key={index} className="outputdiv"><div>{value}</div>{index==serial.output.length-1&&<span><input id="serialin" autoFocus={true} onKeyDown={sendInput} type="text"></input></span>}</div>
            })}
        </div>
    )
}

export default SerialOutput;