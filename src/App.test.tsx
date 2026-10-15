import { render, screen, fireEvent, within } from '@testing-library/react';
import Todo from './Todo/Todo';

const lane = (title: string) =>
  screen.getByRole('heading', { name: title }).closest('.lane') as HTMLElement;

test('初期表示では各レーンが空', () => {
  render(<Todo />);
  expect(screen.queryAllByPlaceholderText('やること')).toHaveLength(0);
  expect(screen.getAllByText('(0件)')).toHaveLength(3);
});

test('＋で追加したタスクが一番上に来る', () => {
  render(<Todo />);
  fireEvent.click(screen.getByLabelText('タスクを追加'));
  fireEvent.change(screen.getByPlaceholderText('やること'), {
    target: { value: '1つ目' },
  });
  fireEvent.click(screen.getByLabelText('タスクを追加'));
  const inputs = screen.getAllByPlaceholderText(
    'やること',
  ) as HTMLInputElement[];
  expect(inputs.map((i) => i.value)).toEqual(['', '1つ目']);
});

test('←→で隣のレーンへ移動し、端では非活性になる', () => {
  render(<Todo />);
  fireEvent.click(screen.getByLabelText('タスクを追加'));
  expect(within(lane('ToDo')).getByText('←')).toBeDisabled();
  fireEvent.click(within(lane('ToDo')).getByText('→'));
  expect(
    within(lane('In Progress')).getAllByPlaceholderText('やること'),
  ).toHaveLength(1);
  fireEvent.click(within(lane('In Progress')).getByText('→'));
  expect(within(lane('Done')).getByText('→')).toBeDisabled();
  expect(within(lane('Done')).getByText('(1件)')).toBeInTheDocument();
});

test('×でタスクが削除される', () => {
  render(<Todo />);
  fireEvent.click(screen.getByLabelText('タスクを追加'));
  fireEvent.click(screen.getByText('×'));
  expect(screen.queryAllByPlaceholderText('やること')).toHaveLength(0);
});
