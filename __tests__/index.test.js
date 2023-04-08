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

  it('should greet the user and ask for their name', () => {
    startGame({ description: '', gameData: [] });
    expect(console.log).toHaveBeenCalledWith('Welcome to the Brain Games!');
    expect(console.log).toHaveBeenCalledWith('Hello, User Name!');
  });

  it('should display the game description and ask questions', () => {
    const gameConfig = {
      description: 'Description',
      gameData: [
        { question: 'Question1', rightAnswer: 'Answer1' },
        { question: 'Question2', rightAnswer: 'Answer2' },
        { question: 'Question3', rightAnswer: 'Answer3' },
      ],
    };
    startGame(gameConfig);
    expect(console.log).toHaveBeenCalledWith(gameConfig.description);
  });
});
