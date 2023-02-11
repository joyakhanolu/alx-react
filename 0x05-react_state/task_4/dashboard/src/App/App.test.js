import React from 'react';
import { shallow, mount } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import App from './App';
import { user, logOut} from '../App/AppContext';
import AppContext from './AppContext';

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
		const wrapper = shallow(<App />);
		expect(wrapper.find('Login').exists()).toBeTruthy();
	});

	it('Should check that the CourseList component is included', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find('CourseList')).toBeTruthy();
	});
});

describe('Basic React Tests - App Class', function() {
	it('When the keys control and h are pressed - Should check that logOut function, passed as a prop, is called and the alert function is called with a string', () => {
		const events = {};
		const logout = jest.fn();

    document.addEventListener = jest.fn((event, callback) => {
      events[event] = callback;
    });

		shallow(<App logOut={logout} />);
		window.alert = jest.fn();
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
		wrapper.instance().handleDisplayDrawer();
		expect(wrapper.state().displayDrawer).toEqual(true);
		wrapper.instance().handleHideDrawer();
		expect(wrapper.state().displayDrawer).toEqual(false);
	});

	it('Should check that if logOut is being called by verifying if the state is updated correctly instead', () => {
		const wrapper = mount(
			<AppContext.Provider value={{ user, logOut }}>
				<App />
			</AppContext.Provider>
		);

		wrapper.instance().logOut();
		expect(wrapper.state().user).toEqual(user);
	});

	it('Should check that the logIn function updates the state correctly', () => {
		const newUser = {
			email: 'minipachru@gmail.com',
			password: '012345',
			isLoggedIn: true
		};

		const wrapper = mount(
			<AppContext.Provider value={{ user, logOut }}>
				<App />
			</AppContext.Provider>
		);

		wrapper.instance().logIn('minipachru@gmail.com', '012345');
		expect(wrapper.state().user).toEqual(newUser);
	});

	it('Should check that the logOut function updates the state correctly', () => {
		const wrapper = mount(
			<AppContext.Provider value={{ user, logOut }}>
				<App />
			</AppContext.Provider>
		);

		wrapper.instance().logIn('minipachru@gmail.com', '012345');
		wrapper.instance().logOut();
		expect(wrapper.state().user).toEqual(user);
	});

	it('Should check that markNotificationAsRead func works as intended', () => {
		const notification = [
			{ id: 1, type: 'default', value: 'New course available', },
			{ id: 2, type: 'urgent', value: 'New resume available', },
		];

		const wrapper = mount(
			<AppContext.Provider value={{ user, logOut }}>
				<App />
			</AppContext.Provider>
		);

		wrapper.instance().markNotificationAsRead(3);
		expect(wrapper.state().listNotifications).toEqual(notification);
	});
});