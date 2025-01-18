import React,{useEffect,useContext} from "react";
import { Terminal } from "primereact/terminal";
import { TerminalService } from 'primereact/terminalservice';
import { UartContext,SystemContext } from "./App";
import SystemOut from "./SystemOut.jsx"

function Ttl(props){
    const uart = useContext(UartContext)


    useEffect(() => {    
        return () => {
        }
    }, []);

    return(
        <div className="terminal">
            <SystemOut>
            </SystemOut>
        </div>
    )
}

export default Ttl;
