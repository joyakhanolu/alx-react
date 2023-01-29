import { shallow } from 'enzyme';
import Notification from './Notifications';

describe('Test Notification.js', () => {
  it('Notification without crashing', (done) => {
    expect(shallow(<Notification />).exists());
    done();
  });

  it('renders three list items', (done) => {
    const wrapper = shallow(<Notification />);
    expect(wrapper.find('ul')).to.have.lengthOf(1);
    expect(wrapper.find('li')).to.have.lengthOf(3);
    done();
  });

  it('renders the text "Here is the list of notifications"', (done) => {
    const wrapper = shallow(<Notification />);
    expect(wrapper.contains(<body className='App-body' />))
    done();
  });
});
