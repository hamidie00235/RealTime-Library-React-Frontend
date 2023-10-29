import React,{useState} from 'react';

function NewTodoForm(){
    const [description,setDescription] =useState('');
    const [assigned ,setAssigned] = useState('');

    // const descriptionChange =(event) => {
    //     console.log('description',event.target.value)
    //     setDescription(event.target.value)

    // }
    // const assignedChange =(event) => {
    //     console.log('assigned',event.target.value)
    //     setAssigned(event.target.value)
    // }

    return (

        <div className='mt-5'>
            <form>
               <div className='mb-3'>
                <lab className='form-label'>Assigned</lab>
                <input
                 type="text" 
                 className='form-control'
                  required
                  onChange={e=>setAssigned(e.target.value)}
                  value={assigned}
                  ></input>
                </div> 
                <div className='mb-3'>
                    <label className='form-label'>Description</label>
                    <textarea 
                    type='text' 
                    className='form-control'
                     rows={3} 
                     required
                     onChange={e=>setDescription(e.target.value)} 
                     value={description}
                     ></textarea>

                </div>
                <button type='button' className='btn btn-primary mt-3'>Add Todo</button>
               </form>
               
        </div>
    )
}
export default NewTodoForm