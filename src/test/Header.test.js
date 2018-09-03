import React from 'react';
import { Header } from '../components/Header';
import { shallow } from 'enzyme';

describe('Header tests', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it('renders the Card with the correct props', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
