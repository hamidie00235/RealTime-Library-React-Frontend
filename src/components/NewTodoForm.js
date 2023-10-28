import React from 'react';

function NewTodoForm(){
    return (

        <div className='mt-5'>
            <form>
               <div className='mb-3'>
                <lab className='form-label'>Assigned</lab>
                <input type="text" className='form-control' required></input>
                </div> 
                <div className='mb-3'>
                    <label className='form-label'>Description</label>
                    <textarea type='text' className='form-control' rows={3} required></textarea>

                </div>
                <button type='button' className='btn btn-primary mt-3'>Add Todo</button>
               </form>
               
        </div>
    )
}
export default NewTodoForm