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

	// it('Should render the right html into the first NotificationItem element', () => {
	// 	const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
	// 	expect(wrapper.find('NotificationItem').first().html()).toEqual(
	// 		'<li data-notification-type="default">New course available</li>'
	// 	);
	// });

	// it('Should render the correct string', () => {
	// 	const wrapper = shallow(<Notifications displayDrawer={true} />);
	// 	expect(wrapper.find('.Notifications p').text()).toEqual(
	// 		('Here is the list of notifications')
	// 	);
	// });

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

	// it('When displayDrawer is true - Should check that the div.Notifications is not being displayed', () => {
	// 	const wrapper = shallow(<Notifications displayDrawer={true} />);
	// 	expect(wrapper.find('div.Notifications')).toHaveLength(1);
	// });
});

describe('Basic React Tests - <Notifications list />', function() {
	const listNotifications = [
		{id: 1, type: 'default', value: 'New course available'},
		{id: 2, type: 'urgent', value: 'New resume available'},
		{id: 3, type: 'urgent', html: { __html: getLatestNotification() }}
	];

	// it('Should check that Notifications renders correctly if pass an empty array', () => {
	// 	const newArray = [];
	// 	const wrapper = shallow(<Notifications displayDrawer listNotifications={newArray} />);
	// 	expect(wrapper.find('NotificationItem').html()).toEqual('<li data-notification-type="default" class="blue_1tsdo2i">No new notification for now</li>');
	// });

	// it('Should check that Notifications renders correctly if don’t pass the listNotifications property', () => {
	// 	const wrapper = shallow(<Notifications displayDrawer={true} />);
	// 	expect(wrapper.find('NotificationItem').html()).toEqual('<li data-notification-type="default" class="blue_1tsdo2i">No new notification for now</li>');
	// });

	it('When pass list of notifications - Should check that renders it correctly and with the right number of NotificationItem', () => {
		const wrapper = shallow(<Notifications displayDrawer listNotifications={listNotifications} />);
		expect(wrapper.find('NotificationItem')).toHaveLength(3);
	});

	it('When listNotifications is empty, Should check not renders the message "Here is the list of notifications"', () => {
		const newArray = [];
		const wrapper = shallow(<Notifications displayDrawer listNotifications={newArray} />);
		expect(wrapper.find('NotificationItem').html()).not.toEqual('<li data-notification-type="default">Here is the list of notifications</li>');
	});

	it('When calling the function markAsRead on an instance of the component - Should check that the spy is being called with the right message', () => {
		const wrapper = shallow(<Notifications displayDrawer />);

		console.log = jest.fn();
		const newNote = wrapper.instance();
		const id = 2;
		newNote.markAsRead(id);
		expect(console.log).toHaveBeenCalledWith(`Notification ${id} has been marked as read`);
		jest.restoreAllMocks();
  });

	it("When updating the props of the component with the same list - Should check that the component doesn’t rerender", () => {
		const listNotifications = [
			{ id: 1, type: "default", value: "New course available" },
			{ id: 2, type: "urgent", value: "New resume available" },
		];

		const wrapper = shallow(<Notifications displayDrawer listNotifications={listNotifications} />);
		const shouldComponentUpdate = jest.spyOn(Notifications.prototype,"shouldComponentUpdate");

		wrapper.setProps({ listNotifications: listNotifications });
		expect(shouldComponentUpdate).toHaveBeenCalled();
		expect(shouldComponentUpdate).toHaveLastReturnedWith(false);

		jest.restoreAllMocks();
	});

	it("When updating the props of the component with a longer list - Should check that the component does rerender", () => {
		let listNotifications = [
			{ id: 1, type: "default", value: "New course available" },
			{ id: 2, type: "urgent", value: "New resume available" }
		];

		const newlistNotifications = [
			{ id: 1, type: "default", value: "New course available" },
			{ id: 2, type: "urgent", value: "New resume available" },
			{id: 3, type: 'urgent', html: { __html: getLatestNotification() }}
		];

		console.log(listNotifications);
		const wrapper = shallow(<Notifications displayDrawer listNotifications={listNotifications} />);
		const shouldComponentUpdate = jest.spyOn(Notifications.prototype,"shouldComponentUpdate");

		wrapper.setProps({ listNotifications: newlistNotifications });
		expect(shouldComponentUpdate).toHaveBeenCalled();
		expect(shouldComponentUpdate).toHaveLastReturnedWith(true);

		jest.restoreAllMocks();
	});
});
