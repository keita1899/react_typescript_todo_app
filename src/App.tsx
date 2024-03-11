import React, { useState } from 'react';
import { AddTodoForm } from './components/AddTodoForm';
import { Todo } from './components/Todo';
import { TodoProps } from './types/todo';

const App: React.VFC = () => {
  const [todo, setTodo] = useState<TodoProps>({
    id: 0,
    text: '',
    isCompleted: false,
    isEdit: false,
  })

  const hasTodo: boolean = todo.id !== 0

  const addTodo = (todoText: string): void => {
    if (hasTodo) return

    const newTodo: TodoProps = {
      id: Math.random(),
      text: todoText,
      isCompleted: false,
      isEdit: false,
    }

    setTodo(newTodo)
  }

  const deleteTodo = (): void => {
    if (!hasTodo) return 
    setTodo({
      id: 0,
      text: '',
      isCompleted: false,
      isEdit: false,
    })
  }

    const toggleEditTodo = (): void => {
    setTodo({
      ...todo,
      isEdit: !todo.isEdit
    })
  }

  const saveTodo = (todoText:string): void => {
    const newTodo: TodoProps = {
      ...todo,
      text: todoText,
      isEdit: false
    }

    setTodo(newTodo)
  }

  return (
    <div className="App">
      <button className="delete-button" onClick={deleteTodo} disabled={!hasTodo}>削除</button>
      {hasTodo && (
        <Todo todo={todo} onToggleEditTodo={toggleEditTodo} onSaveTodo={saveTodo} />
      )}
      <AddTodoForm onAddTodo={addTodo} disabled={hasTodo} />
    </div>
  );
}

export default App;
