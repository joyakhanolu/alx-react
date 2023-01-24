import App from './App';
import { shallow } from 'enzyme';
import React from 'react';

const wrapper = shallow(<App />);

test('checkin crashing issue', function () {
  shallow(<App />);
});

test('checkin header', function () {
  expect(wrapper.find('header.App-header').exists()).toEqual(true);
});
test('checkin body', function () {
  expect(wrapper.find('body.App-body').exists()).toEqual(true);
});
test('checkin footer', function () {
  expect(wrapper.find('footer.App-footer').exists()).toEqual(true);
});
