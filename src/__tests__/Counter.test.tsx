import Counter from 'components/counter/Counter';
import { mount, shallow } from 'enzyme';

describe('Counter Test', (): void => {
  it('should render all components', () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper.hasClass('counter__wrapper')).toBeTruthy();
    expect(wrapper.find('.counter__heading')).toHaveLength(1);
    expect(wrapper.find('.counter__button')).toHaveLength(1);
  });

  it('should display intial value', () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper.find('.counter__heading').text()).toEqual('0');
  });

  it('should increase 1', () => {
    const wrapper = mount(<Counter />);
    wrapper.find('.counter__button').simulate('click');
    expect(wrapper.find('.counter__heading').text()).toEqual('1');
  });
});
