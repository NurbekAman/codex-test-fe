import React from 'react';
import { create, act } from 'react-test-renderer';

import App from './App';
import Error from './Error';

import CanvasForm from './CanvasForm';

describe('App', () => {
  it('should render correctly', () => {
    const wrapper = create(<App />);
    expect(wrapper.root.findByType(CanvasForm)).not.toBeNull();
  });
  it('should render error correctly', () => {
    fetch.mockReject();
    const wrapper = create(<App />);
    const form = wrapper.root.findByType(CanvasForm);

    act(() => {
      form.props.onSubmit();
    });
    expect(wrapper.root.findByType(Error)).not.toBeNull();
  });
});

