import React from 'react';
import { getLatestNotification, getFullYear, getFooterCopy } from './utils';

describe('Test Utils.js', () => {
  it('Function getFullYear', (done) => {
    expect(getFullYear()).toBe(new Date().getFullYear());
    done();
  });

  it('Function getFooterCopy', (done) => {
    expect(getFooterCopy(true)).toBe('Holberton School');
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
    done();
  });

  it('Function getLatestNotification', (done) => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
    done();
  });
});
