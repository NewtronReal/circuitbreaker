import "./Circuit.css"
import Myimage from "./assets/circuit.svg"
import Pin from "./Pin"

function Circuit(){
    const pins = [
        {x:148,y:442,v:5,osc:"VCC.svg",name:"vcc",size:15},
        {x:148,y:463,v:0,osc:"GND.svg",name:"gnd",size:15},
        {x:400,y:192,v:0,osc:"",name:"pin1",size:15},
        {x:400,y:214,v:0,osc:"",name:"pin2",size:15},
        {x:400,y:236,v:0,osc:"",name:"pin3",size:15},
        {x:400,y:258,v:0,osc:"",name:"pin4",size:15},
        {x:424,y:192,v:0,osc:"",name:"pin5",size:15},
        {x:424,y:214,v:0,osc:"",name:"pin6",size:15},
        {x:424,y:236,v:0,osc:"",name:"pin7",size:15},
        {x:424,y:258,v:0,osc:"",name:"pin8",size:15},
        {x:787,y:134,v:0,osc:"VCC.svg",name:"pin9",size:15},
        {x:787,y:168,v:0,osc:"GND.svg",name:"pin10",size:15},
        {x:803,y:151,v:0,osc:"TX.svg",name:"pin11",size:15},
        {x:770,y:151,v:0,osc:"TX.svg",name:"pin12",size:15},
        {x:797,y:364,v:0,osc:"VCC.svg",name:"vcc1",size:15},
        {x:797,y:383,v:0,osc:"TX.svg",name:"uartrx",size:15},
        {x:797,y:403,v:0,osc:"TX.svg",name:"uarttx",size:15},
        {x:797,y:423,v:0,osc:"GND.svg",name:"gnd1",size:15},
    ]

    return (<>
        <div style={{width:"max-content",height:"max-content"}}>
            <img src={Myimage}>
            </img>
            {pins.map(function(item,index){
                return <Pin data={item} key={index}/>
            })}
        </div>
    </>)
}

export default Circuit;