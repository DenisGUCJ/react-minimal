import React from 'react'

let count=0;

class MyApp2 extends React.Component {
    constructor(){
        super();
        this.state={
            a:0,
            b:0,
            arr:[]
        };
    }
    ShowNumberA=(event)=>{
        count++;
        this.setState({
            a:event.target.value
        });
        console.log("A value is :",event.target.value);
    }
    ShowNumberB=(event)=>{
        count++;
        this.setState({
            b:event.target.value,
        });
       console.log("B value is :",event.target.value);
    }
    ProcessArray=()=>{
        count++;
        this.setState({
            arr:generateArray(this.state.a,this.state.b).map(x=>(Math.sqrt(x).toFixed(3)))
        });
      }
    render(){
        return(
        <body>
            {console.time("render "+count)}
            <h1>Lab2</h1>
            <div>
                <input type="number" onChange={this.ShowNumberA} value={this.state.a}></input>
                <input type="number" onChange={this.ShowNumberB} value={this.state.b}></input>
            </div>
            <div>
                <p>Generated Array:</p>
                {generateArray(this.state.a,this.state.b).toString()}
            </div>
            <div>   
                <button onClick={this.ProcessArray}>Procces Array</button>
                <p>{this.state.arr.toString()}</p>
            </div>
            {console.timeEnd("render "+count)}
        </body>
        )
    }
}

const generateArray = (a,b)=>{
    if(Number(a)<0 || Number(a)>Number(b))
        return "Incorrect inputs, try again!!!"
    else{
        return Array.from(Array(b-a+1), (_,x) => x+Number(a));
    }
}


export default MyApp2