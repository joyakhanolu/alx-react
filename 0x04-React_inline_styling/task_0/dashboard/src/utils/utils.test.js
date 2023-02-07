import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

describe('Basic Test For Functions', function() {
	describe('Test-1 getFullYear', function() {
		it('Should return the correct year', () => {
			expect(getFullYear()).toBe(new Date().getFullYear());
		});
	});
	describe('Test-2 getFooterCopy', function() {
		it('Should return the correct string when the arg is true', () => {
			expect(getFooterCopy(true)).toBe('Holberton School');
		});
		it('Should return the correct string when the arg is false', () => {
			expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
		});
	});
	describe('Test-3 getLatestNotification', function() {
		it('Should return the correct string', () => {
			expect(getLatestNotification()).toBe(
				'<strong>Urgent requirement</strong> - complete by EOD'
			);
		});
	});
});
