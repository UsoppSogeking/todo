import { useState } from 'react';

import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import Search from './components/Search';
import Filter from './components/Filter';

import './App.css';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir pra academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    }
  ]); //setTodos serve para colocar os dados, e para consultar os dados usamos o nome da variavel, nesse caso é 'todos'

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  const addTodo = (text, category) => {

    const newTodos = [...todos, { //newTodos será um array que armazena os todos ja criados e os novos todos que serão criados,
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false
    }];

    setTodos(newTodos)

  }

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter(todo => todo.id != id ? todo : null);
    setTodos(filteredTodos);
  }

  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo);
    setTodos(newTodos)
  }

  return (
    <div className='app'>
      <h1>List de tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <div className="todo-list">
        {/* Para usarmos Js no react colocamos nossos comando entre {} */}
        {todos
        .filter((todo) => filter === "All" ? true : filter === "Completed" ? todo.isCompleted : !todo.isCompleted)
        .filter((todo => todo.text.toLowerCase().includes(search.toLowerCase())))
        .sort((a, b) => sort === "Asc" ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text))
        .map((todo) => ( //para retornar um obj no react usamos '()' ao invés de '{}' como no Javascript
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />// A propriedade todo tem o valor todo, que é outro objeto
        ))}
      </div>
      <TodoForm addTodo={addTodo} /> {/*A função addTodo foi passada como prop para o componente TodoForm */}
    </div>
  )
}

export default App
