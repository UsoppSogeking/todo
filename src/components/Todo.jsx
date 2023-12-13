import React from 'react'

const Todo = ({ todo, removeTodo, completeTodo }) => { //passamos para os parentes a prop que nosso componente vai precisar para renderizar na tela, desestruturamos ele como todo, assim temos acesso aos dados do useState todos
    return (
        <div className="todo" style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
            <div className="content">
                <p>{todo.text}</p> {/*No react para imprimir textos, no caso o texto que esta no todo, acessamos a propriedade com a notação de ponto e colocamos entre chaves, parecido com interpolçao de texto `${todo.text}` */}
                <p className='category'>({todo.category})</p> {/*O '()' nessa caso será impresso no navegador, não tem nava a ver com notação da lib */}
            </div>
            <div>
                <button className='complete' onClick={() => completeTodo(todo.id)}>Completar</button>
                <button className='remove' onClick={() => removeTodo(todo.id)}>x</button>
            </div>
        </div>
    )
}

export default Todo