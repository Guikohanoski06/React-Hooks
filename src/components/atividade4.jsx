import React, { useState, useCallback } from 'react';

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = useCallback(() => {
    if (task.trim()) {
      setTasks((prevTasks) => [...prevTasks, task]);
      setTask('');
    }
  }, [task]);

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Digite uma nova tarefa"
      />
      <button onClick={addTask}>Adicionar Tarefa</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
