import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Basic React Tests - <Header />', function() {
	it('Should render without crashing', () => {
		const wrapper = shallow(<Header />);
		expect(wrapper.exists()).toBeTruthy();
	});

	it('Should render img tag', () => {
		const wrapper = shallow(<Header />);
		expect(wrapper.find('.Header img').exists()).toEqual(true);
	});

	it('Should render h1 tag', () => {
		const wrapper = shallow(<Header />);
		expect(wrapper.find('.Header h1').exists()).toEqual(true);
	});
});
