# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

*Note: this is a one-way operation. Once you `eject`, you can't go back!*

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


















<!-- steps -->

<!-- React Project

Steps:

->	Create a folder with name ‘TODO’
->	Type ‘Cd TODO’ in cmd 
->	Type  ‘npx create-react-app react-todo’ in cmd
->  Type 'cd react-todo' in cmd
->	Open react-todo in vs code (type 'code .' in cmd)
->	Inside the 'App.js' file, remove everything inside <div className="App"></div>
->  Choose 'javascript react' option in select language mode in vs code
    (bottom right corner when you open App.js file)
->  Remove "import logo from './logo.svg';" from App.js file 
->  Remove 'logo.svg' image, 'App.test.js' file from project directory
->  Remove all the code in 'App.css' file in the project directory
->  Remove 'setupTests.js' file from the project folder directory
->  Open Terminal(cmd) and go to the project directory and type 'npm start'
->  Open the browser to check the output at 'http://localhost:3000/'
    (You will be automatically redirected)
->  Go to "App.css" file in the project directory, and add styling given in the file 
->  Create a new folder called 'components' in the src folder of our project directory. 
->  Now, Go to the App.js file in the project directory and edit the code as shown below:
     Inside  <div className="App"></div>
        [
            <header>
                <h1>React Todo List App</h1>
            </header>
        ]
->  Inside the components folder, create a new file called 'Form.js'
->  Again Inside the components folder, create another new file called 'TodoList.js'
->  Write code in the 'Form.js' file as shown below:
    [
        import React from "react";
        
    ]
->  Now, Let's create a component in the Form.js file as shown below:
    [
        const Form = () => {
            return(

            );
        }
    ]
-> Now, Add the form as html code inside this component that you have just now created as shown below:
    [
          <form>
            <input type="text" className="todo-input" />
            <button className="todo-button" type="submit">
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
    ]
->  Next we need to export this "Form" component to use it.
    So, add the below line of code to the "Form.js" file at last
    [
        export default Form;
    ]
->  Now import the component in the "App.js" file as shown below
    [
        import React from 'react';
        import Form from './components/Form';
    ]
->  After importing the "Form" component in the "App.js" file, we can use it in the "App.js" file, 
    as shown below
    [
        <Form/>
    ]
->  Add the below links inside the head section of "index.html" file in the "public" folder 
    [
         <link
      href="https://fonts.googleapis.com/css?family=Poppins&display=swap"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css"
      integrity="sha256-mmgLkCYLUQbXn0B1SRqzHar6dCnv9oZFPEC1g1cwlkk="
      crossorigin="anonymous"
    />
    ]
->  Now, Let's create a component in the "TodoList.js" file as shown below 
    [
        const TodoList = () => {
        return(
        
        );
        }
    ]
->  Let's add some ToDoList Items in the "TodoList.js" file as shown below
    [
         <div className="todo-container">
            <ul className="todo-list"></ul>
        </div>
    ]
->  Next we need to export this component to use it.
    So, add the below line of code to the "TodoList.js" file at last
    [
        export default TodoList;
    ]
->  Now import the "TodoList" component in the "App.js" file as shown below
    [
        import TodoList from './components/TodoList';
    ]
->  After importing the "TodoList" component in the "App.js" file, we can use it in the "App.js" file, 
    as shown below
    [
        <TodoList/>
    ]

->  Now, the file structure is ready. So, now let's create a state 
====================================================================================================================================================================================================================

->  To implement state, we need to import state in the "App.js" file as shown below
    [
        import React, {useState} from 'react';
    ]
->  Now, Let's create a state inside the App() function as shown below
    [
          const [inputText, setInputText] = useState("");
    ]
->  Let's create a function inside the Form component of "Forms.js" file that will update the state as shown below
    [
        const inputTextHandler = (e) => {
            console.log(e.target.value);
        }
    ]
-> Furthermore, to the input tag in the form of "Forms.js" file, add "onChange" parameter the below code
    [
         <input onChange={inputTextHandler} type="text" className="todo-input" />
    ]
->  Goto the "App.js" file, and change the rendering of the Form component as shown below
    [
        <Form setInputText={setInputText}/>
    ]
->  Add a parameter to the Forms component as { setInputText } in the "Forms.js" file as shown below 
    [
        const Form = ({ setInputText }) => {
    ]
->  In Addition, set the setInputText to e.target.value  in the "Forms.js" file as shown below
    [
        setInputText(e.target.value);
    ]
->  Now, Let's go ahead and store the todo's. Goto "App.js" file and add teh below line of code 
    [
        const [todos, setTodos] = useState([]);
    ]
->  In the "Forms.js" file, let's crete an object and submit the data of todos  as shown below
    [
        const submitTodoHandler = (e) => {
        e.preventDefault(); // so that you dont reload your page everytime you clcik on '+'
    }
    ]
->  Let's add this submitTodoHandler to the  onSubmit button as shown below 
    [
        <button onClick={submitTodoHandler} className="todo-button" type="submit">
    ]
->  Now, let's create a new object that we are going to add in the todolist, 
    In the "App.js" file, add todos, setTodos to the Form as shown below
    [
         <Form todos={todos} setTodos={setTodos}  setInputText={setInputText}/>
    ]
    setTodos is currently empty
->  Now, Let's import these todos, setTodos in the "Forms.js" file as shown below
    [
        const Form = ({ setInputText, todos, setTodos }) => {
    ]
->  Inside the submitTodoHandler in the "Forms.js", add the following code 
    [
        setTodos([
            ...todos, // display already(prevoiusly) existing todos
            {text: inputText, completed: false, id: Math.random() *1000 }
        ])
    ]
->  'inputText' is not recognised, so add it in the <Form> of "App.js" file,
    [
        <Form inputText={inputText} todos={todos} setTodos={setTodos}  setInputText={setInputText}/>

    ]
->  Add 'inputText' in the "Forms.js" as shown below
    [
        const Form = ({ setInputText, todos, setTodos, inputText }) => {
    ]
->  Now, after adding a todolist item, we have remove it from the input element, 
    In the "Forms.js" file, add 'setInputText' to 'submitTodoHandler' as shown below
    [
          setInputText('');
    ]
->  In the "Forms.js" file, add 'inputText'  to <input> as shown below
    [
        <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
    ]
->  Now, Let's display the todo list items added into the front end ui,
->  For acheiving this,  Let's create a new file in the components folder and call it as "Todo.js"
->  Goto "TodoList.js" file, and import the "Todo" component as shown below 
    [
        import Todo from "./Todo";
    ]
->  Now, Goto "Todo.js" file, and add the below line of code
    [
                    const Todo = () => {
                return (
                    <div className="todo">
                        <li className="todo-item">React</li>
                        <button className="complete-btn">
                            <i className="fas fa-check"></i>
                            </button>
                        <button className="trash-btn">
                            <i className="fas fa-trash"></i>
                            </button>
                    </div>
                );
            }
    ]
->  Let's pass 'todos' data in the "App.js" file, as shown below
    [
        <TodoList todos={todos}/>
    ]
->  Goto the "TodoList.js" file, change it as shown below
    [
        const TodoList = ({ todos }) => {
        return(
        <div className="todo-container">
            <ul className="todo-list">
            {todos.map(todo => (
                <Todo text={todo.text} />
            ))}
            </ul>
        </div>
            );
        }
    ]
->  Goto the "Todo.js" file, change it as shown below
    [
                const Todo = ({text}) => {
            return (
                <div className="todo">
                    <li className="todo-item">{text}</li>
                    <button className="complete-btn">
                        <i className="fas fa-check"></i>
                        </button>
                    <button className="trash-btn">
                        <i className="fas fa-trash"></i>
                        </button>
                </div>
            );
        }
    ]
->  Goto the "TodoList.js" file, change 'Todo' as shown below
        [
            <Todo key={todo.id} text={todo.text} />
        ]
->  Goto the "Todo.js" file, Let's add Events in it as shown below
    [
            const deleteHandler = () => {
            
        }
    ]
->  Goto the "App.js" file, change 'TodoList' as shown below
    [
         <TodoList setTodos={setTodos} todos={todos}/>
    ]
->  Goto the "TodoList.js" file, change 'Todo' as shown below
    [
         <Todo setTodos={setTodos} todos={todos} key={todo.id} text={todo.text} />
    ]



    
->    Goto the "Todo.js" file, change 'Todo' as shown below
    [
        const Todo = ({text, todo, todos, setTodos}) => {
    ]
->  Goto the "TodoList.js" file, change 'TodoList' as shown below
    [
        const TodoList = ({ todos, setTodos }) => {
    ]
->  Goto the "Todo.js" file, change 'deleteHandler' as shown below
    [
            const deleteHandler = () => {
            setTodos(todos.filter(el => el.id !== todo.id))
        }
    ]
->  Goto "TodoList.js" file, change  'TodoList' as shown below TO DELETE THE TODO LIST ITEMS ON CLICK 
        OF DELETE FUNCTION
    [
            const TodoList = ({ todos, setTodos }) => {
            return(
                <div className="todo-container">
                    <ul className="todo-list">
                    {todos.map((todo) => (
                        <Todo setTodos={setTodos} todos={todos} key={todo.id} todo={todo} text={todo.text} />
                    ))}
                    </ul>
                </div>
                    );
                }

    ]
->  Goto the "Todo.js" file, add the completeHandler as shown below 
    [
        const completeHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;


        }));

        }
    ]
->  Goto the "Todo.js" file, add the completeHandler as shown below  to button, as shown below 
    [
        return (
        <div className="todo">
            <li className="todo-item">{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
        );
    ]
->   Goto the "Todo.js" file, change <li> as shown below
    [
              <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
    ]
->  We need to add the filter functionality, firstly, goto the "App.js" file, 
    add a state as shown below
    [
        const [status, setStatus] = useState('all')
    ]
->  Add the 'setStatus' in the <Form> of "App.js" file as shown below 
    [
         <Form inputText={inputText} todos={todos} setTodos={setTodos}  setInputText={setInputText} setStatus={setStatus} />
    ]
->  Now, Goto "Forms.py" file, add 'statusHandler' as shown below 
    [
            const statusHandler = (e) => {
            console.log(e);
        }
    ]
->  Also, change the <select> element in the "Forms.py" file as shown below 
    [
          <select onChange={statusHandler} name="todos" className="filter-todo">
    ]
->  Again in the "Formsjs" file, add the 'setStatus' as shown below
    [
        const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
    ]
->  In the same "Forms.js" file, change 'statusHandler' as shown below
    [
        const statusHandler = (e) => {
        setStatus(e.target.value)
        }
    ]
->  Now, Goto "App.js", and add a filter state as shown below
    [
        const [filteredTodos, setFilteredTodos] = useState([]);
    ]
->  In the same "App.js" file, let's crate a function 'filteredHandler' as shown below 
    [
                const filterHandler = ()  => {
            switch(status){
            case 'completed':
                setFilteredTodos(todos.filter(todo => todo.completed === true));
                break;
            case 'uncompleted':
                setFilteredTodos(todos.filter(todo => todo.completed === false));
                break;
            default:
                setFilteredTodos(todos);
                break;    
            }
        };
    ]
->  Goto "App.js" file, import 'useEffect' as shown below
    [
        import React, {useState, useEffect} from 'react';
    ]
->  Create a function in "App.js" file for using the 'useEffect' as shown below 
    [
                useEffect(() => {
            filterHandler();
        }, [todos, status]);
    ]
->  In the "App.js" file, add 'filteredTodos' to <TodoList> as shown below 
    [
              <TodoList filteredTodos={filteredTodos} setTodos={setTodos} todos={todos}/>
    ]
-> Also add the 'filteredTodos' to TodoList in the "TodoList.js" file as shown below
    [
        const TodoList = ({ todos, setTodos, filteredTodos }) => {
    ]
->  change map as below in the "TodoList.js"
    [
         {filteredTodos.map((todo) => (
    ]
----------------------------------------------------------------------------------------------------

->  In the "App.js" file, add 'saveLocalTodos' as shown below 
    [
        const saveLocalTodos = () => {
            localStorage.setItem("todos",JSON.stringify(todos));
        };
    ]
->  In the "App.js" file, add 'getLocalTodos' as shown below  
    [
        const getLocalTodos = () => {
            if (localStorage.getItem("todos") === null){
            localStorage.setItem("todos",JSON.stringify([]));
            } else {
            let todoLocal = JSON.parse(localStorage.getItem('todos'))
            setTodos(todoLocal);
            }
        }
    ]
->  TO RUN USE EFFECT WHEN THE APP STARTS, 
    [
            useEffect(() => {
                getLocalTodos();
            }, []);
    ] 
->  Add 'saveLocalTodos();' inside 'useEffect(()' function of "App.js" file, as shown below
    [
                    useEffect(() => {
                
                filterHandler();
                saveLocalTodos();
            }, [todos, status]);
    ] 
    -->