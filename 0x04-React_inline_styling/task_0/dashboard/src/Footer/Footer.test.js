import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Basic React Tests - <Footer />', function() {
	it('Should render without crashing', () => {
		const wrapper = shallow(<Footer />);
		expect(wrapper.exists()).toBeTruthy();
	});

	it('Should render footer component and the text Copyright', () => {
		const wrapper = shallow(<Footer />);
		expect(wrapper.find('.Footer')).toHaveLength(1);
		expect(wrapper.find('.Footer').text()).toContain('Copyright');
	});
});
