import React, { useState } from 'react';
import './FormNewItem.css';
function FormNewItem (){
    const [quest, setQuests] = useState({});
    const handleChange = (e) => {
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
                        Titulo da tarefa
                        <input type="text" className='formInput' id='questTitle' value={quest.questName} onChange={handleChange}/>
                    </label>
                </div>
            </form>
        </>
    )
}

export default FormNewItem;