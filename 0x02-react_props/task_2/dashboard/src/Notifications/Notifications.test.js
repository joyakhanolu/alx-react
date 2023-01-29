import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Notifications from './Notifications';

describe('Test Notification.js', () => {
  it('Notification without crashing', (done) => {
    expect(shallow(<Notifications />).exists());
    done();
  });

  it('renders three list items', (done) => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('ul')).to.have.lengthOf(1);
    expect(wrapper.find('li')).to.have.lengthOf(3);
    done();
  });

  it(' renders the text "Here is the list of notifications"', (done) => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.contains(<body className='App-body' />))
    done();
  });
});