
import  React,{useState} from 'react';
import './App.css';

import TodoTable from './components/TodoTable';

function App() {

  const [todos ,setTodos]=useState([
  {rowNumber:1,rowDescription:'Feed puppy',rowAssigned:'User one'},
  {rowNumber:2,rowDescription:'Water plants',rowAssigned:'User two'},
  {rowNumber:3,rowDescription:'Make dinner',rowAssigned:'User two'},
  {rowNumber:4,rowDescription:'Make dinner early',rowAssigned:'User two'}
  ])
 const addTodo =() =>{
  if(todos.length>0){
    const newTodo={rowNumber:todos.length+1,
      rowDescription:'new todo',
      rowAssigned:'User three'
    };
     setTodos(todos=>[...todos ,newTodo])

 }
}

  return (
    <div className='mt-5 container'>
      <div className='card'>
     <div className='card-header'> Your Todo's
      </div>   
      <div className='card-body'> 
  <TodoTable todos={todos}/> 
  <button className='btn btn-primary' onClick={addTodo}>Add new todo</button>
    
   </div>
   </div>
    </div>
  );
}

export default App;
