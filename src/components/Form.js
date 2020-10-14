import React from 'react';

function Form(props) {
    const inputTextHandler = (e) => {
        props.setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        // prevent default refreshing behaviour
        e.preventDefault();
        // Check input is not empty
        if(!props.inputText || /^\s*$/.test(props.inputText)) {
            return;
        }

        props.setTodos([
            ...props.todos, {text: props.inputText, completed: false, id: Math.random() * 1000}
        ]);
        props.setInputText("");
    }

    return (
        <div>
            <form>
                <input 
                    value={props.inputText}
                    onChange={inputTextHandler} 
                    type="text" 
                    className="todo-input"
                />
                <button onClick={submitTodoHandler} className="todo-input" type="submit">
                    <i className="fa fa-plus-square"></i>
                </button>
            </form>
        </div>
    );
}

export default Form;