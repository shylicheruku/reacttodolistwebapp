import Todo from "./Todo";

const TodoList = ({ todos }) => {
    return(
    <div className="todo-container">
        <ul className="todo-list">
        {todos.map(todo => (
            <Todo text={todo.text} />
        ))}
        </ul>
        <Todo setTodos={setTodos} todos={todos} key={todo.id} text={todo.text} />
    </div>
        );
    }

export default TodoList;