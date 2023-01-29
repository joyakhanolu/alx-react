import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import CourseList from './CourseList'
import CourseListRow from './CourseListRow'

describe('Test CourseList.js', () => {
  it('CourseList without crashing', (done) => {
    expect(shallow(<CourseList />).exists());
    done();
  });

  it('renders 5 diferent rows', (done) => {
    const wrapper = shallow(<CourseList />);

    expect(wrapper.find(CourseListRow)).to.have.lengthOf(5);
    done();
  });
});
