import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from '../App/App';
import Header from './Header'

describe('Test Header.js', () => {
  it('Header without crashing', (done) => {
    expect(shallow(<Header />).exists());
    done();
  });

  it('div with the class App-header', (done) => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<header className='App-header' />))
    done()
  });

  it('renders 1 img and 1 h1', (done) => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img')).to.have.lengthOf(1);
    expect(wrapper.find('h1')).to.have.lengthOf(1);
    done();
  });
});
