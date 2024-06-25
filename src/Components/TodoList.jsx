import React, { useState, useEffect } from "react";
import axios from 'axios';
import TodoItem from './TodoItem';
import './TodoList.css';

function TodoList() {
    const [tasks, setTask] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3000/api/tasks')
                .then((res)=>{
                    setTask(res.data);
                })
                .catch((error)=>{
                    console.log(error);
                })
    },[]);

    return (
        <div className="TodoContent">
            <section className="TodoListSection">
                <ul className="TodoList">
                    {tasks.map((task) => {
                        return (
                        <>
                            <TodoItem questName={task.descricao} questStatus={task.status} />
                        </>
                        )
                    })}
                </ul>
            </section>
        </div>
    );
}

export default TodoList;
