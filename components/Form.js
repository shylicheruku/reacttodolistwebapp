import React from "react";

const Form = ({ setInputText, todos, setTodos, inputText }) => {
    const inputTextHandler = (e) => {
        setInputText('');
    }
    const submitTodoHandler = (e) => {
        e.preventDefault(); // so that you dont reload your page everytime you clcik on '+'
    }
    setTodos([
        ...todos, // display already(prevoiusly) existing todos
        {text: inputText, completed: false, id: Math.random() *1000 }
    ])
    return(
        <form>
        <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
        <button onClick={submitTodoHandler} className="todo-button" type="submit">
            <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
            <select name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
    </form>
    );
}



export default Form;