import React from 'react'
import AppTitle from './AppTitle'

//Task 6
const list=[
  {
    "teacherName": "Jan Nowak",
    "teacherAge": 36,
    "active": true,
    "students": [
      {
        "name": "Maciej Janosz",
        "age": 12
      },
      {
        "name": "Wojciech Kowalski",
        "age": 15
      },
      {
        "name": "Wioletta PoznaĹska",
        "age": 1000000
      }
    ]
  },
  {
    "teacherName": "Mariusz Flasinski",
    "teacherAge": 56,
    "active": true,
    "students": [
      {
        "name": "Jan Kot",
        "age": 12
      },
      {
        "name": "Jan Ziobro",
        "age": 15
      },
      {
        "name": "Adam Malysz",
        "age": 41
      }
    ]
  },
  {
    "teacherName": "Wojciech Kuzak",
    "teacherAge": 44,
    "active": false,
    "students": [
      {
        "name": "Janina Wronska",
        "age": 22
      },
      {
        "name": "John Dover",
        "age": 7
      },
      {
        "name": "Emil Petterson",
        "age": 46
      }
    ]
  }
]

/*
const App = () => (
  <h1>Minimal React DenisGUCJ
    <p id="output">Bundle size: X bytes, Load time of the bundle: Y ms, Last commit SHA1: Z</p>
    <span>
      <a href={"AppTitle"}></a>
      sasi i ne prosi ${AppTitle}
    </span>
  </h1>
    
)*/

//Task 7
class ListButtons extends React.Component {
  constructor(){
    super();
    this.state = {
    anEventHandler: [],
  }
}
  //Task 7.1
  ListStudents = () => {
    this.setState({
      anEventHandler: <TheList>
        {list.map(x=>
        <TheListDisplay x={x}/>)}
      </TheList>
    });
  }
  //Task 7.2
  ListStudentsSorted = () => {
    this.setState({
      anEventHandler: <TheList>
        <TheListDisplaySortedByAge/>
      </TheList>
    });
  }
  //Task 7.3
  ListStudentsOld = () => {
    this.setState({
      anEventHandler: <TheList>
      {list.filter(item=>item.active==true).map(x=>
      <TheListDisplayOld x={x}/>)}
      </TheList>
    });
  }

  render() {
    return(
      <div>
      <button onClick={this.ListStudents}>List students</button>
      <button onClick={this.ListStudentsSorted}>List sorted students</button>
      <button onClick={this.ListStudentsOld}>List sold students(>20)</button>
      {this.state.anEventHandler}
      </div>

    );
  }

}

class TheList extends React.Component{
  render(){
    const {children}=this.props;
    return (
      <div>{children}</div>
    )
  }
}

const TheListDisplay=({x})=>
  <div>{x.students.map(student=><StudentsDisplay student={student}/>)}</div>;

//Extra sort by Name of students
//const TheListDisplaySortedByName=()=>
//  <div>{SortedListByName().map(student=><StudentsDisplay student={student}/>)}</div>;

const TheListDisplaySortedByAge=()=>
  <div>{SortedListByAge().map(student=><StudentsDisplay student={student}/>)}</div>;
  
const TheListDisplayOld=({x})=>
  <div>{x.students.filter(item=>item.age>15).map(student=><StudentsDisplay student={student}/>)}</div>;

const StudentsDisplay=({student})=><div>{student.name} {student.age}</div>

const SortedListByName=()=>{
  var temp=[];
  for(var i=0;i<list.length;i++)
      list[i].students.map(x=>temp.push(x));
  return temp.sort((a,b)=>(a.name>b.name)?1:-1);
}

const SortedListByAge=()=>{
  var temp=[];
  for(var i=0;i<list.length;i++)
      list[i].students.map(x=>temp.push(x));
  return temp.sort((a,b)=>a.age-b.age);
} 


class App extends React.Component{
  constructor(){
    super();
    this.state={anPrintEvent:[]};
  }
  render(){
    return <body>
    <h1>Minimal React DenisGUCJ</h1>
    Bundle size: X bytes, Load time of the bundle: Y ms, Last commit SHA1: Y
    <h2>Task 1</h2><AppTitle></AppTitle>
    <h2>Task 2</h2>{generateArray(15).toString()}
    <h2>Task 3</h2>{generateRandArray(15).toString()}
    <h2>Task 4</h2>{printConstArrayComparison()}
    <h2>Task 5</h2>{printConstArraySqr()}
    <h2>Task 6</h2>See the code behind
    <h2>Task 7.(1-3)</h2><ListButtons/>
  </body>;
  }
}

//Task 2
const generateArray = (n)=>{ return Array.from(Array(n), (_,x) => x+1);}
//Task 3
const generateRandArray = (n)=>{ return Array.from(Array(n), ()=>Math.floor(Math.random() * 25)+1);}
//Task 4
const printConstArrayComparison=()=>{
  return  <body><div>Original array :{[2, 56, 23, 88, 17, 4].toString()}</div>
  <div>The resulting array : {[2, 56, 23, 88, 17, 4].filter(x=>x>5).toString()}</div></body>;
}
//Task 5
const printConstArraySqr=()=>{
  return  <body><div>Original array :{[2, 5, 8, 10].toString()}</div>
  <div>The resulting array : {[2, 5, 8, 10].map(x=>(Math.sqrt(x).toFixed(3))).toString()}</div></body>; 
}

export default App