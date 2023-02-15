import { concatElements, mergeElements } from './5-merge';

const array1 = ['Amanda', 'Larry'];
const array2 = ['Jason', 'Amanda'];

const object1 = {
  1: 'Liam',
  2: 'Noah',
  3: 'Elijah',
};
const object2 = {
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas',
};

const concated = concatElements(array1, array2);
console.log(concated);
console.log(concated.toJS());

const merged = mergeElements(object1, object2);
console.log(merged);
console.log(merged.toJS());
