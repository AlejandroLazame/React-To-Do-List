import React, { useState } from 'react';
import './FormNewItem.css';
function FormNewItem (){
    const [quest, setQuests] = useState({});
    const handleChange = (e) => {
        e.preventDefault();
        setQuests(quest.questName = e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        
    }
    return (
        <>
            <form action='submit' className='FormNewItem' onSubmit={handleSubmit}>
                <div className='formGroup'>
                    <label htmlFor="questTitle">
                        <input type="text" className='formInput' id='questTitle' placeholder='Nova tarefa' value={quest.questName} onChange={handleChange}/>
                    </label>
                    <button type='submit' className='btn-primary' onClick={handleSubmit}>Add +</button>
                </div>
            </form>
        </>
    )
}

export default FormNewItem;