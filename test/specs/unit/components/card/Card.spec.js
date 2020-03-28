import React from 'react';
import { render } from '@testing-library/react'
import Card from '../../../../../src/components/card/card';

describe('<Card />', () => {
  it('should mount empty component', () => {
    const { asFragment } = render(<Card />);
    
    expect(asFragment()).toMatchSnapshot();
  })

  it('should mount component with title', () => {
    const { asFragment } = render(<Card title="Hello"/>);
    
    expect(asFragment()).toMatchSnapshot();
  })

  it('should mount component with title and body', () => {
    const { asFragment } = render(<Card title="Hello">Children</Card>);
    
    expect(asFragment()).toMatchSnapshot();
  })
})