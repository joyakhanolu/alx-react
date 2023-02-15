import { Map } from 'immutable';
import printBestStudents from './8-seq';

const grades = {
  1: {
    score: 99,
    firstName: 'guillaume',
    lastName: 'salva',
  },
  2: {
    score: 79,
    firstName: 'larry',
    lastName: 'hudson',
  },
  3: {
    score: 59,
    firstName: 'larry',
    lastName: 'hudson',
  },
};

printBestStudents(grades);
