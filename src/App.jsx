import { useState ,useEffect,createContext} from 'react'
import Ttl from "./Ttl.jsx"
import Putty from "./Putty.jsx"
import { MapInteractionCSS } from "react-map-interaction";
import Components from './Components.jsx';
import Circuit from './Circuit.jsx'
import {SerialProcessor, SystemProcessor,SerialProcessor2} from "./SerialFunctions.jsx"

export const UartContext = createContext();
export const SerialContext = createContext();
export const SystemContext = createContext();

const devs = {
  uartrxuarttx:{
      man:"Starnet",
      id:idGen()+":"+idGen(),
      version:"3.0",
      hub:"root",
      baud:115200,
      proc:new SerialProcessor("uarttx","uartrx")
  },
  pin11pin12:{
      man:"Starnet",
      id:idGen()+":"+idGen(),
      version:"3.0",
      hub:"root",
      baud:9600,
      proc:new SerialProcessor2("pin11","pin12")
  }
}

const serialOutputer = new SerialProcessor()
const systemOutputer = new SystemProcessor(devs)


var serialFunction1Status = {authentication:0}
function serialFunction1(){
    window.dispatchEvent(new CustomEvent("serialoutput",{
        detail:{
            output:"Enter username:"
        }
    }))
}

function idGen(){
  return Math.floor(Math.random()*65355).toString(16)
}

function App() {
  const [baudRate,setBaudRate] = useState(9600)
  const [serialOutput,setSerial] = useState([""])
  const [systemOutput, setSystem] = useState([""])
  const [uart,setUart] = useState({rx:"",tx:"",gnd:"",vcc:""})
  console.log("rendering...")
  const uartid = uart.rx+uart.tx
  const powersupply = uart.vcc.startsWith("vcc")&&uart.gnd.startsWith("gnd")
  const [osc,setOsc] = useState("")
  const [selectedPin,setSelectedPin] = useState("")

  const [mouseState,setMouse] = useState({mouseX:0,mouseY:0})
  const [devices, setDevices] = useState([])


  useEffect(function(){
    function oscilloScope(e){
    }
    window.addEventListener("mousemove",oscilloScope)
    return (function(){
      window.removeEventListener("mousemove",oscilloScope)
    })
  })

  function refresh(){
    for(const [key,value] of Object.entries(devs)){
      value.proc.boot(baudRate)
    }
  }

  return (
    <>
    <SystemContext.Provider value={{serialFunction:systemOutputer,output:systemOutput,setOutput:setSystem}}>
    <SerialContext.Provider value={{serialFunction:serialOutputer,output:serialOutput,setOutput:setSerial,baudRate:baudRate,setBaudRate:setBaudRate,devices:devs}}>
    <UartContext.Provider value={{uart:uart,setUart:setUart,selectedPin:selectedPin,setSelectedPin:setSelectedPin,osc:osc,setOsc:setOsc}}>
    <div className='diagram'>
      <div className='circuit'>
        <div className="circuitdiagram">
          <div className="restart" onClick={refresh}>⟳</div>
        <MapInteractionCSS>
          <Circuit></Circuit>
        </MapInteractionCSS>
        </div>
        {/* <Components></Components> */}
      </div>
      <Ttl uart={uart}></Ttl>
    </div>
    <div className="system">
      <Putty></Putty>
    </div>
    </UartContext.Provider>
    </SerialContext.Provider>
    </SystemContext.Provider>
    </>
  )
}

export default App
