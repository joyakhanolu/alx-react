import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import Login from './Login';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('Basic React Tests - <Login />', function() {
	it('Should render without crashing', () => {
		const wrapper = shallow(<Login />);
		expect(wrapper.exists()).toBeTruthy();
	});

	it('Should check tha the submit button is disabled by default', () => {
		const wrapper = shallow(<Login />);
		expect(wrapper.find('input').at(2).props().disabled).toEqual(true);
	});

	it('Should check that after changing the value of the two inputs, the button is enabled', () => {
		const wrapper = shallow(<Login />);
		wrapper.find('input').at(0).simulate('change', { target: { name: 'email', value: 'mnortiz.ortiz@gmail.com'} });
		wrapper.find('input').at(1).simulate('change', { target: { name: 'password', value: '012345'} });
		expect(wrapper.find('input').at(2).props().disabled).toEqual(false);
	});
});
