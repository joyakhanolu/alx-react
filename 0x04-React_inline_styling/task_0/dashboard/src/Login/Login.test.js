import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Basic React Tests - <Login />', function() {
	it('Should render without crashing', () => {
		const wrapper = shallow(<Login />);
		expect(wrapper.exists()).toBeTruthy();
	});

	it('Should render 2 input tags', () => {
		const wrapper = shallow(<Login />);
		expect(wrapper.find('.Login input')).toHaveLength(2);
	});

	it('Should render 2 label tags', () => {
		const wrapper = shallow(<Login />);
		expect(wrapper.find('.Login label')).toHaveLength(2);
	});
});
