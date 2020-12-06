import React from 'react';
import { create, act } from 'react-test-renderer';

import { CanvasList } from './CanvasList';

describe('CanvasList', () => {
  it('should render two canvas correctly', () => {
    const canvasList = [
      [
        [0, 0, 0],
        [0, 0, 0]
      ],
      [
        [0, 'x', 'x'],
        [0, 'x', 'x']
      ]
    ];

    const wrapper = create(<CanvasList canvasList={canvasList} />);
    expect(wrapper.root.findAllByType('table').length).toBe(2);
  });
  it('should not render canvas correctly', () => {
    const wrapper = create(<CanvasList />);
    expect(wrapper.root.findAllByType('table').length).toBe(0);
  });
});