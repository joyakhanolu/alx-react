import React from "react";
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

describe('Basic React Tests - <BodySectionWithMarginBottom />', function() {
	it('Should render without crashing', () => {
		const wrapper = shallow(<BodySectionWithMarginBottom />);
		expect(wrapper.exists()).toBeTruthy();
	});

	it('Should render correctly a BodySection component and that the props are passed correctly to the child component', () => {
		const wrapper = shallow(
			<BodySectionWithMarginBottom title='title' >
				<p>children</p>
			</BodySectionWithMarginBottom>
		);
		expect(wrapper.find("BodySection")).toHaveLength(1);
    expect(wrapper.find("BodySection").props().title).toEqual('title');
	});

	it("Should check that the CSS is correctly applied to BodySectionWithMarginBottom", () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="title">
        <p>children</p>
      </BodySectionWithMarginBottom>
    );
    expect(wrapper.find(".bodySectionWithMargin").first().exists()).toEqual(true);
  });
});
