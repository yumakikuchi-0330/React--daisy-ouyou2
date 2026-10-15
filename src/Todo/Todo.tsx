import './Todo.css';
import Lane from '../components/Lane';
import React, { useState } from 'react';
import { Task, Status, LANE_TYPE, STATUS_LABEL } from '../types/todo';

function Todo() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const addTask = () => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      text: '',
      status: 'todo',
    };
    setTasks((prev) => [newTask, ...prev]);
  };
  const changeText = (id: string, text: string) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, text } : task)),
    );
  };
  const moveTask = (id: string, status: Status) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, status } : task)),
    );
  };
  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };
  return (
    <div className="main">
      <h1>TODO List</h1>
      <div className="lanes">
        {LANE_TYPE.map((status) => (
          <Lane
            key={status}
            title={STATUS_LABEL[status]}
            tasks={tasks.filter((t) => t.status === status)}
            onAddTask={status === 'todo' ? addTask : undefined}
            onInputText={changeText}
            onMoveTask={moveTask}
            onDeleteTask={deleteTask}
          />
        ))}
      </div>
    </div>
  );
}

export default Todo;
