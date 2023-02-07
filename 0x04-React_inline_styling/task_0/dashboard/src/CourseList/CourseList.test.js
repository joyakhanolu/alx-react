import React from "react";
import { shallow } from 'enzyme';
import CourseList from "./CourseList";

describe('Basic React Tests - <CourseList />', function() {
	const listCourses = [
    {id: 1, name: 'ES6', credit: 60},
    {id: 2, name: 'Webpack', credit: 20},
    {id: 3, name: 'React', credit: 40}
  ];

	it('Should render without crashing', () => {
		const wrapper = shallow(<CourseList />);
		expect(wrapper.exists()).toBeTruthy();
	});

	it('Should render the 5 different rows', () => {
		const wrapper = shallow(<CourseList listCourses={listCourses} />);
		expect(wrapper.find('CourseListRow')).toHaveLength(5);
	});

	it ('Should check that CourseList render correctly if pass an empty array', () => {
		const newArray = [];
    const wrapper = shallow(<CourseList listCourses={newArray} />);
    expect(wrapper.find('CourseListRow')).toHaveLength(3);
	});

	it('Should check that CourseList render correctly if don’t pass the listCourses property', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find('CourseListRow')).toHaveLength(3);
  });
});
