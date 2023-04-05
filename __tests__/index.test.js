import readlineSync from 'readline-sync';
import {
  afterEach, beforeEach, describe, expect, it, jest,
} from '@jest/globals';
import startGame from '../src/index.js';

describe('startGame', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
    jest.spyOn(readlineSync, 'question').mockReturnValue('User Name');
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
});
