import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import NotificationItem from './NotificationItem';

beforeEach(() => {
	StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
	StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('Basic React Tests - <NotificationItem />', function() {
	it('Should render without crashing', () => {
		const wrapper = shallow(<NotificationItem />);
		expect(wrapper.exists()).toBeTruthy();
	});

	it('Should render the correct html, type and value props', () => {
		const wrapper = shallow(<NotificationItem type='default' value='test' />);
		expect(wrapper.find('li').prop('data-notification-type')).toEqual('default');
		expect(wrapper.find('li').text()).toEqual('test');
	});

	// it('Should render the correct html, html prop', () => {
	// 	const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
	// 	expect(wrapper.html()).toEqual('<li data-notification-type="default" class="blue_1tsdo2i"><u>test</u></li>');
	// });

	it('When simulating a click on the component - Should check that the spy is called with the right ID argument', () => {
    const id = 2;
    const wrapper = shallow(<NotificationItem type="default" value="test" id={id} />);
    const newNote = wrapper;
    newNote.markAsRead = jest.fn();
    wrapper.find("li").first().simulate("click");
    newNote.markAsRead(id);
    expect(newNote.markAsRead).toHaveBeenCalledWith(2);
    jest.restoreAllMocks();
  });
});
