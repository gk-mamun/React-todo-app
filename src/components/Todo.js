import React from 'react';

function Todo(props) {

    const deleteHandler = () => {
        props.setTodos(props.todos.filter(el => el.id !== props.todo.id));
    }

    const completeHandler = () => {
        props.setTodos(props.todos.map((item) => {
            if(item.id === props.todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }

    return (
        <div>
            <li className={`todo-item ${props.todo.completed ? "completed-todo" : ''}`}> 
                {props.text}
                <div className="todo-list-actions">
                    <span onClick={completeHandler} className="todo-action-btn checked-btn"><i className="fa fa-check-square"></i></span>
                    <span onClick={deleteHandler} className="todo-action-btn delete-btn"><i className="fa fa-times"></i></span>
                </div>
            </li>
        </div>
    );
}

export default Todo;