import Counter from 'components/counter/Counter';
import { mount, shallow } from 'enzyme';

describe('Counter Test', (): void => {
  it('should render all components', () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper.hasClass('counter__wrapper')).toBeTruthy();
    expect(wrapper.find('.counter__heading')).toHaveLength(1);
    expect(wrapper.find('.counter__button')).toHaveLength(2);
  });

  it('should display intial value', () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper.find('.counter__heading').text()).toEqual('0');
  });

  it('should increase 1', () => {
    const wrapper = mount(<Counter />);
    wrapper.find('.counter__button').at(1).simulate('click');
    expect(wrapper.find('.counter__heading').text()).toEqual('1');
  });

  it('should display decrement button', () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper.find('.counter__button.decrement')).toHaveLength(1);
    expect(wrapper.find('.counter__button.decrement').text()).toEqual(
      'Decrement'
    );
  });

  it('should keep 0 as minimun value on "decrement"', () => {
    const wrapper = shallow(<Counter />);
    wrapper.find('.counter__button').at(0).simulate('click');
    expect(wrapper.find('.counter__heading').text()).toEqual('0');
  });

  it('should decrement 1', () => {
    const wrapper = shallow(<Counter />);
    wrapper.find('.counter__button').at(1).simulate('click');
    wrapper.find('.counter__button').at(1).simulate('click');
    wrapper.find('.counter__button').at(0).simulate('click');
    expect(wrapper.find('.counter__heading').text()).toEqual('1');
  });
});
