import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

test('year output', function () {
  expect(getFullYear()).toBe(2021);
});
test('getfootercopy with false input', function () {
  expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});
test('getfootercopy with true input', function () {
  expect(getFooterCopy(true)).toBe('Holberton School');
});
test('getlastesnotification output', function () {
  expect(getLatestNotification()).toBe(
    '<strong>Urgent requirement</strong> - complete by EOD'
  );
});
