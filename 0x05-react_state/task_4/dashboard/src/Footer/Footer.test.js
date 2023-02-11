import React from 'react';
import { shallow, mount } from 'enzyme';
import Footer from './Footer';
import { user, logOut } from '../App/AppContext';
import AppContext from '../App/AppContext';

describe('Basic React Tests - <Footer />', function() {
	it('Should render without crashing', () => {
		const wrapper = shallow(<Footer />);
		expect(wrapper.exists()).toBeTruthy();
	});

	it('Should render footer component and the text Copyright', () => {
		const wrapper = mount(<Footer />);
		expect(wrapper.find('.Footer')).toHaveLength(1);
		expect(wrapper.find('.Footer p').text()).toContain('Copyright');
	});

	it('Should check that the link is not displayed when the user is logged out within the contex', () => {
		const wrapper = mount(
			<AppContext.Provider value={{ user, logOut }}>
				<Footer />
			</AppContext.Provider>
		);
		expect(wrapper.find('a').exists()).not.toBeTruthy();
	});

	it('Should check that the link is displayed when the user is logged in within the context', () => {
		const newUser = {
			email: 'minipachru@gmail.com',
			password: '012345',
			isLoggedIn: true
		};
		const wrapper = mount(
			<AppContext.Provider value={{ user: newUser, logOut }}>
				<Footer />
			</AppContext.Provider>
		);
		expect(wrapper.find('a').exists()).toBeTruthy();
	});
});