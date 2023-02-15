import { getListObject, addElementToList } from './3-list';

const list = getListObject(['Amanda', 'Larry']);

console.log(getListObject(list));

console.log(addElementToList(list, 'Jason'));
