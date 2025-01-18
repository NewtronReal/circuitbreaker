import Collapse from "./Collapse";
import Serial from "./Serial";
import OutOscill from "./OutOscill";

function Putty(props){
    function nullF(){
        return ""
    }
    return (<>
    <div className="system-elem">Putty</div>
    <div className='mainp'>
        <div className="system-elem pcontainer">
            <div className="psidepanel">
                <div>Category:</div>
                <Collapse name="Connection" items={[
                    {name:"Serial"},
                    {name:"Telnet"},
                    {name:"Rlogin"},
                    {name:"Data"},
                    {name:"Proxy"},
                ]}
                />
            </div>
            <div className="pcontent">
                <Serial></Serial>
            </div>
        </div>
        <div className="bottompanel">
            <input type="button" onChange={nullF} value="Open"></input>
            <input type="button" onChange={nullF} value="Cancel"></input>
        </div>
    </div>
    <OutOscill></OutOscill>
    </>)

}

export default Putty;

