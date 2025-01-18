

export class SerialProcessor{
    constructor(txpin="",rxpin=""){
        this.tx=txpin
        this.rx=rxpin
        this.authtry = 0;
        this.auth=""
        this.users = {testuser:"nothing",guestuser:""}
        this.bootlogs=[
            ""
        ]
        this.baud = 115200
    }

    convertStringBaudRate(sourceString, sourceBaud, receiverBaud) {
         if(sourceBaud==receiverBaud){
            return sourceString
         }else{
            return "򉄅򣉯񒎼񓉩򅪒򳶗󭪖򈚴򝦜𼌢\n򉄅򣉯񒎼񓉩򅪒򳶗󭪖򈚴򝦜𼌢\n򉄅򣉯񒎼񓉩򅪒򳶗󭪖򈚴򝦜𼌢򉄅򣉯񒎼񓉩򅪒򳶗󭪖򈚴򝦜𼌢\n"
         }
    }
    
    sendOutput(output,baudrate){
        window.dispatchEvent(new CustomEvent("booting",{
            detail:{pin:this.tx}
        }))
        window.dispatchEvent(new CustomEvent("serialoutput",{
            detail:{
                output:this.convertStringBaudRate(output,this.baud,baudrate),
                pin:this.tx
            }
        }))
    }

    boot(baudrate){
        this.authtry=0;
        this.auth=""
        this.sendOutput(" ██████╗ ███████╗██╗  ██╗\n ██╔══██╗██╔════╝╚██╗██╔╝\n ██████╔╝█████╗   ╚███╔╝ \n ██╔═══╝ ██╔══╝   ██╔██╗ \n ██║     ███████╗██╔╝ ██╗\n ╚═╝     ╚══════╝╚═╝  ╚═╝\n[StranLinker 8-bit]\n'Connecting....'\nusername:",baudrate)
        window.dispatchEvent(new CustomEvent("booting",{detail:{
            pin:"uarttx"
        }}))
    }

    process(input,baudrate){
        input = this.convertStringBaudRate(input,this.baud,baudrate)
        console.log(input)
        if(this.authtry ==0){
            this.auth=input
            this.sendOutput("password:",baudrate)
            this.authtry=1
            return
        }
        if(this.authtry==1){
            if(this.users[this.auth]==input){
                this.sendOutput("Welcome to Starlinker!!\nStarlinker > ",baudrate)
                this.authtry=2
            }else{
                this.auth =""
                this.authtry=0
                this.sendOutput("[error] loginfailed!!\nuserid:",baudrate)
            }
            return
        }
        switch(input){
            case "ls":
                this.sendOutput("/var /lib /home /sys /bin /etc\nStarlinker>",baudrate)
                break;
            case "exit":
                this.sendOutput("bye\nlogin:",baudrate)
                this.authtry=0
                this.auth = ""
                break;
            default:
                this.sendOutput("unknown command..\nStarlinker>",baudrate)
        }
    }
}

export class SerialProcessor2{
    constructor(txpin="",rxpin=""){
        this.tx=txpin
        this.rx=rxpin
        this.authtry = 0;
        this.auth=""
        this.users = {testuser:"nothing",guestuser:""}
        this.bootlogs=[
            ""
        ]
        this.baud = 9600
    }

    convertStringBaudRate(sourceString, sourceBaud, receiverBaud) {
         if(sourceBaud==receiverBaud){
            return sourceString
         }else{
            return "򉄅򣉯񒎼񓉩򅪒򳶗󭪖򈚴򝦜𼌢\n򉄅򣉯񒎼񓉩򅪒򳶗󭪖򈚴򝦜𼌢\n򉄅򣉯񒎼񓉩򅪒򳶗󭪖򈚴򝦜𼌢򉄅򣉯񒎼񓉩򅪒򳶗󭪖򈚴򝦜𼌢\n"
         }
    }
    
    sendOutput(output,baudrate){
        window.dispatchEvent(new CustomEvent("booting",{
            detail:{pin:this.tx}
        }))
        window.dispatchEvent(new CustomEvent("serialoutput",{
            detail:{
                output:this.convertStringBaudRate(output,this.baud,baudrate),
                pin:this.tx
            }
        }))
    }

    boot(baudrate){
        this.authtry=0;
        this.auth=""
        this.sendOutput("UserName:testuser\nPassword:nothing",this.baud,baudrate)
        window.dispatchEvent(new CustomEvent("booting",{detail:{
            pin:"uarttx"
        }}))
    }

    process(input,baudrate){
        switch(input){
            default:
                this.sendOutput("User Name:testuser\nPassword:nothing",baudrate)
        }
    }
}

export class SystemProcessor{
    constructor(devices={}){
        this.devices=devices
    }
    idGen(){
        return Math.floor(Math.random()*65355).toString(16)
    }
    sendOutput(output){
        window.dispatchEvent(new CustomEvent("systemoutput",{
            detail:{
                output:output+"\ncircuitbreaker@js:~$ "
            }
        }))
    }
    process(input,props={}){
        switch(input){
            case "ls":
                this.sendOutput("")
                break;
            case "exit":
                this.sendOutput("")
                break;
            case "lsusb":
                var current=this.devices[props.uart.rx+props.uart.tx]
                this.sendOutput(current? "Bus 001 Device 001: ID "+this.idGen()+":"+this.idGen()+" "+current.man+" 3.0 root hub":"")
                break;
            case "":
                this.sendOutput("")
                break;
            default:
                this.sendOutput("unknown command..")
        }
    }
}