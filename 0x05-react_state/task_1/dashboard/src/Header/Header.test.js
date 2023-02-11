import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import Header from './Header';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('Basic React Tests - <Header />', function() {
	it('Should render without crashing', () => {
		const wrapper = shallow(<Header />);
		expect(wrapper.exists()).toBeTruthy();
	});

	// it('Should render img tag', () => {
	// 	const wrapper = shallow(<Header />);
	// 	expect(wrapper.find('.Header img').exists()).toEqual(true);
	// });

	// it('Should render h1 tag', () => {
	// 	const wrapper = shallow(<Header />);
	// 	expect(wrapper.find('.Header h1').exists()).toEqual(true);
	// });
});
