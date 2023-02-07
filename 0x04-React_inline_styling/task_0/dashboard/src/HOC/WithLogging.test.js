import React from "react";
import { shallow, mount } from 'enzyme';
import WithLogging from "./WithLogging";
import Login from '../Login/Login';

describe('Basic React Tests - <WithLogging />', function() {
	it('When the wrapped element is pure html - Should check that console.log was called on mount and on unmount with Component', () => {
		console.log = jest.fn();
		const Hoc = WithLogging(() => <p />);
		const wrapper = mount(<Hoc />);

		expect(wrapper.exists()).toEqual(true);
		expect(console.log).toHaveBeenNthCalledWith(1, 'Component Component is mounted');
    wrapper.unmount();
    expect(console.log).toHaveBeenNthCalledWith(2, 'Component Component is going to unmount');

    jest.restoreAllMocks();
  });

	it('When the wrapped element is the Login component - Should check that console.log was called on mount and on unmount with the name of the component', () => {
		console.log = jest.fn();
    const Hoc = WithLogging(Login);
    const wrapper = mount(<Hoc />);

		expect(wrapper.exists()).toEqual(true);
    expect(console.log).toHaveBeenNthCalledWith(1, 'Component Login is mounted');
    wrapper.unmount();
    expect(console.log).toHaveBeenNthCalledWith(2, 'Component Login is going to unmount');

    jest.restoreAllMocks();
  });
});
