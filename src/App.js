import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
 const [toDo,setToDo] = useState('');
 const [toDos, setToDos]= useState([]);

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input type="text" onChange={(e)=>{setToDo(e.target.value)}} placeholder="🖊️ Add item..." />
        <i  onClick={(e)=>{setToDos([...toDos,{id:Date.now(),value:toDo,status:false}])}} className="fas fa-plus"></i>
      </div>

{

toDos.map((val)=>{
return(<div className="todos">
        <div className="todo">
          <div className="left">
            <input type="checkbox" onChange={(e)=>{
              console.log(e.target.checked);
              console.log(toDos)
setToDos(toDos.map((obj2)=>{
 if(obj2.id == val.id){
  obj2.status = e.target.checked
 }
 return obj2;
}))
            }} name="" id="" />
            <p>{val.value}</p>
          </div>
          <div className="right">
            <i  onClick={(e)=>{
              console.log('todooo', toDos, val.id)
              setToDos(toDos.filter((object1)=>{
                if(object1.id !== val.id){
                  return object1;
                }
              }
            ))
            }} className="fas fa-times"></i>
          </div>
        </div>
      </div>
)
})}
    </div>
  );
}

export default App;
