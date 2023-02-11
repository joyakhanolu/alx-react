import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import CourseListRow from './CourseListRow';

beforeEach(() => {
	StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
	StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});;

describe('Basic React Tests - <CourseListRow />', function() {
	it('Should render without crashing', () => {
		const wrapper = shallow(<CourseListRow textFirstCell='start' />);
		expect(wrapper.exists()).toBeTruthy();
	});

	it('When isHeader is true - Should render one cell with colspan = 2 when textSecondCell does not exist', function() {
		const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='start' />);
		expect(wrapper.find('th').prop('colSpan')).toEqual('2');
	});

	it('When isHeader is true - Should render two cells when textSecondCell is present', function() {
		const wrapper = shallow
		(
			<CourseListRow
				isHeader={true}
				textFirstCell='start'
				textSecondCell='build'
			/>
		);
		expect(wrapper.find('th')).toHaveLength(2);
	});

	it('When isHeader is false - Should render correctly two td elements within a tr element', function(){
		const wrapper = shallow
		(
			<CourseListRow
				isHeader={false}
				textFirstCell='Txt1'
				textSecondCell='Txt2'
			/>
		);
		expect(wrapper.find('tr').children('td')).toHaveLength(2);
	});
});