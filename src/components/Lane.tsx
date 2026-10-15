import React from 'react';
import { Task, Status } from '../types/todo';
import Card from './Card';
import './Lane.css';

type LaneProps = {
  title: string;
  tasks: Task[];
  onInputText: (id: string, text: string) => void;
  onMoveTask: (id: string, status: Status) => void;
  onDeleteTask: (id: string) => void;
  onAddTask?: () => void;
};

const Lane = ({
  title,
  tasks,
  onAddTask,
  onDeleteTask,
  onInputText,
  onMoveTask,
}: LaneProps) => {
  return (
    <div className="lane">
      <div className="lane-header">
        <h2>{title}</h2>
        <span className="task-count">({tasks.length}件)</span>
      </div>
      <div className="card-list">
        {onAddTask && (
          <button type="button" onClick={onAddTask} className="add-button">
            ＋
          </button>
        )}
        {tasks.map((task) => (
          <Card
            key={task.id}
            task={task}
            onInputText={onInputText}
            onMove={onMoveTask}
            onDelete={onDeleteTask}
          />
        ))}
      </div>
    </div>
  );
};

export default Lane;
