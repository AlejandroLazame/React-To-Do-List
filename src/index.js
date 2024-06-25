import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TodoList from './Components/TodoList';
import FormNewItem from './Components/FormNewItem';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <header className="TodoListHeader">
        <h4>To do</h4>
    </header>
    <FormNewItem></FormNewItem>
    <TodoList></TodoList>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
