// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// jsdom には crypto.randomUUID がないため Node の実装を使う
import { randomUUID } from 'crypto';
Object.defineProperty(globalThis, 'crypto', {
  value: { randomUUID },
});
