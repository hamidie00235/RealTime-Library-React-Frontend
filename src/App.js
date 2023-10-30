
import  React,{useState} from 'react';
import './App.css';
import NewTodoForm from './components/NewTodoForm';

import TodoTable from './components/TodoTable';

function App() {

  const [todos ,setTodos]=useState([
  {rowNumber:1,rowDescription:'Feed puppy',rowAssigned:'User one'},
  {rowNumber:2,rowDescription:'Water plants',rowAssigned:'User two'},
  {rowNumber:3,rowDescription:'Make dinner',rowAssigned:'User two'},
  {rowNumber:4,rowDescription:'Make dinner early',rowAssigned:'User two'}
  ])
 const addTodo =(description,assigned) =>{
  let rowNumber=0;
  if(todos.length>0){
   rowNumber=todos[todos.length-1].rowNumber-1;
  }
   else
   {rowNumber=1;
  }
    const newTodo={
      rowNumber:rowNumber,
      rowDescription:description,
      rowAssigned:assigned
    };
     setTodos(todos=>[...todos ,newTodo])

 
}
 const deleteTodo=(deleteTodoRowNumber) =>{
  let filtered=todos.filter(function(value){
    return value.rowNumber!== deleteTodoRowNumber;

  });
  setTodos(filtered);}
  return (
    <div className='mt-5 container'>
      <div className='card'>
     <div className='card-header'> Your Todo's
      </div>   
      <div className='card-body'> 
  <TodoTable todos={todos} deleteTodo={deleteTodo}/> 
  <button className='btn btn-primary' >Add new todo</button>
    <NewTodoForm addTodo={addTodo}/>
   </div>
   </div>
    </div>
  );
}

export default App;
