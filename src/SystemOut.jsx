import "./Serialoutput.css"
import React,{useState,useContext,useEffect} from "react"
import { SystemContext , UartContext} from "./App";


function SystemOut(props){
    const serial = useContext(SystemContext)
    const uart = useContext(UartContext)
    useEffect(function(){
        function printOutput(e){
            if(e.detail.output.endsWith("login:")){
                serial.setOutput(["login:"])
                return;
            }
            serial.setOutput(serial.output.concat(e.detail.output.split("\n")))
        }
        window.addEventListener("systemoutput",printOutput)
        return function(){
            window.removeEventListener("systemoutput",printOutput)
        }
    })
    function sendInput(e){
        if(e.key=="Enter"){
            if(e.target.value=="clear"){
                serial.setOutput(["circuitbreaker@js:~$ "])
                return
            }
            var c = serial.output
            c[c.length-1]+=e.target.value
            serial.setOutput(c)
            serial.serialFunction.process(e.target.value,uart)
        }
        console.log(uart.uart.rx)
    }

    function focusInput(e){
        document.getElementById("systemin").focus()
    }
    return (
        <div className="scontainer" onClick={focusInput}>
            {serial.output.map(function(value, index){
                return <div key={index} onFocus={focusInput} className="outputdiv"><div>{value}</div>{index==serial.output.length-1&&<span><input id="systemin" autoFocus={true} onKeyDown={sendInput} type="text"></input></span>}</div>
            })}
        </div>
    )
}

export default SystemOut;