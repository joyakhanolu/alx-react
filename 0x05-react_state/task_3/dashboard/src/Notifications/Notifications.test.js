import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import Notifications from './Notifications';
import { getLatestNotification } from '../utils/utils';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('Basic React Tests - <Notifications />', function() {
	const listNotifications = [
		{id: 1, type: 'default', value: 'New course available'},
		{id: 2, type: 'urgent', value: 'New resume available'},
		{id: 3, type: 'urgent', html: { __html: getLatestNotification() }}
	];

	it('Should render without crashing', () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.exists()).toBeTruthy();
	});

	it('Should render NotificationItem elements', () => {
		const wrapper = shallow(<Notifications displayDrawer={true} />);
		expect(wrapper.find('NotificationItem')).toBeTruthy();
	});

	it('When displayDrawer is false - Should check that the menu item is being displayed', () => {
		const wrapper = shallow(<Notifications displayDrawer={false} />);
		expect(wrapper.find('.menuItem')).toBeTruthy();
	});

	it('When displayDrawer is false - Should check that the div.Notifications is not being displayed', () => {
		const wrapper = shallow(<Notifications displayDrawer={false} />);
		expect(wrapper.find('div.Notifications')).toHaveLength(0);
	});

	it('When displayDrawer is true - Should check that the menu item is being displayed', () => {
		const wrapper = shallow(<Notifications displayDrawer={true} />);
		expect(wrapper.find('.menuItem')).toBeTruthy();
	});

});

describe('Basic React Tests - <Notifications list />', function() {
	const listNotifications = [
		{id: 1, type: 'default', value: 'New course available'},
		{id: 2, type: 'urgent', value: 'New resume available'},
		{id: 3, type: 'urgent', html: { __html: getLatestNotification() }}
	];

	it('When pass list of notifications - Should check that renders it correctly and with the right number of NotificationItem', () => {
		const wrapper = shallow(<Notifications displayDrawer listNotifications={listNotifications} />);
		expect(wrapper.find('NotificationItem')).toHaveLength(3);
	});

	it('When listNotifications is empty, Should check not renders the message "Here is the list of notifications"', () => {
		const newArray = [];
		const wrapper = shallow(<Notifications displayDrawer listNotifications={newArray} />);
		expect(wrapper.find('NotificationItem').html()).not.toEqual('<li data-notification-type="default">Here is the list of notifications</li>');
	});

	it('Should check that clicking on the menu item calls handleDisplayDrawer', () => {
		const handleDisplayDrawer = jest.fn();
		const handleHideDrawer = jest.fn();
		const wrapper = shallow(
			<Notifications
			handleDisplayDrawer={handleDisplayDrawer}
			handleHideDrawer={handleHideDrawer}
			/>
		);

		wrapper.find('#menuItem').simulate('click');
		expect(handleDisplayDrawer).toHaveBeenCalled();
		expect(handleHideDrawer).not.toHaveBeenCalled();

		jest.restoreAllMocks();
	});

	it('Should check clicking on the button calls handleHideDrawer', () => {
		const handleDisplayDrawer = jest.fn();
		const handleHideDrawer = jest.fn();
		const wrapper = shallow(
			<Notifications
			displayDrawer
			handleDisplayDrawer={handleDisplayDrawer}
			handleHideDrawer={handleHideDrawer}
			/>
		);

		wrapper.find('#closeButton').simulate('click');
		expect(handleDisplayDrawer).not.toHaveBeenCalled();
		expect(handleHideDrawer).toHaveBeenCalled();

		jest.restoreAllMocks();
	});
});