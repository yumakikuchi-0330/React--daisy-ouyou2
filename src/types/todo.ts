export const STATUSES = ['todo', 'in_progress', 'done'] as const;
export type Status = (typeof STATUSES)[number];

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
