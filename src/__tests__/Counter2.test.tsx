import React, { useState } from 'react';
import Counter from 'components/counter/Counter';
import { mount } from 'enzyme';

jest.mock('react', () => {
  const originalReact = jest.requireActual('react');
  return {
    ...originalReact,
    useState: jest.fn(),
  };
});

describe('Conuter 2 test hook', (): void => {
  it('should increase from a specific initial number', () => {
    const initialValue = 3;
    const setStateMock = jest.fn();
    (useState as jest.Mock).mockReturnValueOnce([initialValue, setStateMock]);
    const wrapper = mount(<Counter />);
    wrapper.find('.counter__button').at(1).simulate('click');
    expect(setStateMock).toBeCalledWith(4);
    expect(setStateMock).toBeCalledTimes(1);
  });
});
