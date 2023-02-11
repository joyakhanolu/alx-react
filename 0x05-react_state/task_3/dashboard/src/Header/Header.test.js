import React from 'react';
import { shallow, mount } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import Header from './Header';
import { user, logOut } from '../App/AppContext';
import AppContext from '../App/AppContext.js';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('Basic React Tests - <Header />', function() {
  it('Should render without crashing', () => {
      const wrapper = mount(
          <AppContext.Provider value={{ user, logOut }}>
              <Header />
          </AppContext.Provider>
      );
      expect(wrapper.exists()).toBeTruthy();
  });

  it('Should check that the logoutSection is not created with a default context value', () => {
      const wrapper = mount(
          <AppContext.Provider value={{ user, logOut }}>
              <Header />
          </AppContext.Provider>
      );
      expect(wrapper.find('#logoutSection').exists()).not.toBeTruthy();
  });

  it('Should check that the logoutSection is created with a user defined', () => {
      const newUser = {
          email: 'mnortiz.ortiz@gmail.com',
          password: '012345',
          isLoggedIn: true
      };

      const wrapper = mount(
          <AppContext.Provider value={{ user: newUser, logOut }}>
              <Header />
          </AppContext.Provider>
      );
      expect(wrapper.find('#logoutSection').exists()).toBeTruthy();
  });

  it('Should check that clicking on the link is calling the spy with a user defined', () => {
      const spy = jest.fn();
      const newUser = {
          email: 'mnortiz.ortiz@gmail.com',
          password: '012345',
          isLoggedIn: true
      };

      const wrapper = mount(
          <AppContext.Provider value={{ user: newUser, logOut: spy }}>
              <Header />
          </AppContext.Provider>
      );
      expect(wrapper.find('#logoutSection').exists()).toBeTruthy();
      wrapper.find('#logoutSection span').simulate('click');
      expect(spy).toHaveBeenCalled();

      jest.restoreAllMocks();
  });
});