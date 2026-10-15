import React from 'react';
import { Task, Status, STATUSES } from '../types/todo';
import './Card.css';

export type CardProps = {
  task: Task;
  onInputText: (id: string, text: string) => void;
  onMove: (id: string, status: Status) => void;
  onDelete: (id: string) => void;
};

const Card = ({ task, onInputText, onMove, onDelete }: CardProps) => {
  const currentIndex = STATUSES.indexOf(task.status);
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === STATUSES.length - 1;
  const moveLeft = () => {
    if (!isFirst) onMove(task.id, STATUSES[currentIndex - 1]);
  };
  const moveRight = () => {
    if (!isLast) onMove(task.id, STATUSES[currentIndex + 1]);
  };
  return (
    <div className="card">
      <button className="card-delete" onClick={() => onDelete(task.id)}>
        ×
      </button>
      <input
        type="text"
        value={task.text}
        onChange={(e) => onInputText(task.id, e.target.value)}
        placeholder="やること"
        className="card-text"
      />
      <div className="card-actions">
        <button onClick={moveLeft} disabled={isFirst}>
          ←
        </button>
        <button onClick={moveRight} disabled={isLast}>
          →
        </button>
      </div>
    </div>
  );
};

export default Card;
