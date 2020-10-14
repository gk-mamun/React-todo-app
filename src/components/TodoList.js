import React from 'react';
import Todo from './Todo';

function TodoList(props) {
    
    return (
        <div className="todo-box">
            <ul className="todo-list">
                {props.todos.map(todo => (
                    <Todo 
                        text={todo.text} 
                        key={todo.id} 
                        setTodos={props.setTodos} 
                        todos={props.todos}
                        todo={todo}
                    />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;