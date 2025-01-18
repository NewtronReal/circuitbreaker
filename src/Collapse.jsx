import React,{useState} from "react"
import MenuItem from "./MenuItem"
function Collapse(props){
    const [buttonStyle,setButtonStyle]=useState({
        width:"100%",
        display:"flex",
        flexFlow:"row",
        gap:"5px"
    })
    const [collapseStyle,setCollapseStyle]=useState({
        width:"100%",
        height:"0",
        overflow:"hidden",
        display:"flex",
        flexFlow:"column",
        gap:"5px"
    })
    const [arrow,setArrow] = useState("> ")
    function toggle(){
        if(collapseStyle.height=="0"){
            setCollapseStyle(c=>({...c,height:"max-content"}))
            setArrow("v")
        }else{
            setCollapseStyle(c=>({...c,height:"0"}))
            setArrow(">")
        }
    }
    return(<>
    <div style={buttonStyle}><div style={{width:"max-content"}} onClick={toggle}>{arrow}</div>{props.name}</div>
    <div style={collapseStyle}>
        {props.items.map(function(item,index){
            return <MenuItem key={index} name={item.name}></MenuItem>
        })}
    </div>
    </>)
}

export default Collapse;