import "./Serial.css"
import { useContext } from "react";
import { SerialContext } from "./App";
function Serial(props){
    const serial = useContext(SerialContext)
    function setBaud(e){
        serial.setBaudRate(Number.parseInt(e.target.value))
    }
    return <div>
        <div className="heading">Options controlling local serial lines</div>
        <p>Select a serial line</p>
        <div className="legend">
            <div>Serial line to connect to<input defaultValue="/dev/ttyS0" disabled={true}></input></div>
        </div>
        <p>Configure the serial line</p>
        <div className="legend">
            <div>Speed{"("}baud{")"}<input type="number" defaultValue="9600" onChange={setBaud}></input></div>
            <div>Data bits<input type="number" defaultValue="8" disabled={true}></input ></div>
            <div>Stop bits<input type="number" defaultValue="1" disabled={true}></input></div>
            <div>Parity<select disabled={true}>
                <option>None</option>
                <option>Even</option>
                <option>Odd</option>
                </select></div>
            <div>Flow control<select disabled={true}defaultValue="XON/XOFF">
                <option>None</option>
                <option>XON/XOFF</option>
                <option>RTC/CTS</option>
                </select></div>
        </div>
    </div>
}

export default Serial;