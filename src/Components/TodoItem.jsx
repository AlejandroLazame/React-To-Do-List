import React, { useState } from 'react';
import './TodoItem.css';

function TodoItem(questData) {
    const [quest, setState] = useState(questData);
    const questDone = () => {
        if(quest.questStatus === 'Fazer'){
            setState({questName: quest.questName, questStatus: 'Feito'});
        }else if(quest.questStatus === 'Feito'){
            setState({questName: quest.questName, questStatus: 'Fazer'});
        }
    }

    return (
        <div className='TodoItemCard' onClick={questDone}>
            <section className='TodoItemContent'>
                <p className={'TodoItemText '+ quest.questStatus}>{quest.questName}</p>
            </section>
        </div>
    );
}

export default TodoItem;