import React from 'react'

let count=0;

class MyApp2 extends React.Component {
    constructor(){
        super();
        this.state={
            a:0,
            b:0,
            arr:"No generation was occurred yet"
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
            arr:this.generateArray(this.state.a,this.state.b).map(x=>(Math.sqrt(x).toFixed(3)))
        });
      }

    generateArray = (a,b)=>{
        if(Number(a)<0 || Number(a)>Number(b)){
            return "Incorrect inputs, try again!!!"
        }
        else{
            return Array.from(Array(b-a+1), (_,x) => x+Number(a));
        }
    }

    render(){
        return(
        <div>
            {console.time("render "+count)}
            <h1>Lab2</h1>
            <h2>The code generates array in range [a,b] in real time</h2>
            <div>
                <p>Input value for "a" : </p>
                <input type="number" onChange={this.ShowNumberA} value={this.state.a}></input>
                <p>Input value for "b" : </p>
                <input type="number" onChange={this.ShowNumberB} value={this.state.b}></input>
            </div>
            <div>
                <p>Generated Array:</p>
                {this.generateArray(this.state.a,this.state.b).toString()}
            </div>
            <div>
                <h2>The button below processes the generated array by computing sqr of each element</h2>   
                <button onClick={this.ProcessArray}>Procces Array</button>
                <p>The processed array :</p>
                <p>{this.state.arr.toString()}</p>
            </div>
            {console.timeEnd("render "+count)}
        </div>
        ) 
    }
}

export default MyApp2