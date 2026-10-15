export type Status = 'todo' | 'in_progress' | 'done';
export const LANE_TYPE: readonly Status[] = ['todo', 'in_progress', 'done'];

export const STATUS_LABEL: Record<Status, string> = {
  todo: 'ToDo',
  in_progress: 'In Progress',
  done: 'Done',
};

export interface Task {
  id: string;
  text: string;
  status: Status;
}
