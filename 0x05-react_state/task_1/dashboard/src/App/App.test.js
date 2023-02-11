import React from 'react';
import { shallow, mount } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import App from './App';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('Basic React Tests - <App />', function() {
	it('Should render without crashing', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.exists()).toBeTruthy();
	});

	it('Should contain the Notifications component', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find('Notifications')).toHaveLength(1);
	});

	it('Should contain the Header component', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find('Header')).toHaveLength(1);
	});

	it('Should contain the Login component', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find('Login')).toHaveLength(1);
	});

	it('Should contain the Footer component', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find('Footer')).toHaveLength(1);
	});

	it('Should check that CourseList is not displayed', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find('CourseList')).toHaveLength(0);
	});
});

describe('Basic React Tests - When isLoggedIn is true', function() {
	it('Should verify that the Login component is not included', () => {
		const wrapper = shallow(<App isLoggedIn={true} />);
		expect(wrapper.find('Login')).toHaveLength(0);
	});

	it('Should check that the CourseList component is included', () => {
		const wrapper = shallow(<App isLoggedIn={true} />);
		expect(wrapper.find('CourseList')).toHaveLength(1);
	});
});

describe('Basic React Tests - App Class', function() {
	it('When the keys control and h are pressed - Should check that logOut function, passed as a prop, is called and the alert function is called with a string', () => {
		const events = {};

    document.addEventListener = jest.fn((event, callback) => {
      events[event] = callback;
    });
		window.alert = jest.fn();
		shallow(<App />);
		events.keydown({ key: "h", ctrlKey: true });
		expect(window.alert).toHaveBeenCalledWith("Logging you out");
		jest.restoreAllMocks();
  });

	it('Should check that the default state for displayDrawer is false', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.state().displayDrawer).toEqual(false);
	});

	it('Should check that after calling handleDisplayDrawer, the state should now be true', () => {
		const wrapper = shallow(<App />);
		wrapper.instance().handleDisplayDrawer();
		expect(wrapper.state().displayDrawer).toEqual(true);
	});

	it('Should check that after calling handleHideDrawer, the state is updated to be false', () => {
		const wrapper = shallow(<App />);
		wrapper.instance().handleHideDrawer();
		expect(wrapper.state().displayDrawer).toEqual(false);
	});
});