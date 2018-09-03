import React from 'react';
import { App } from '../containers/App';
import { shallow } from 'enzyme';

describe('APP tests', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders the Card with the correct props', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
