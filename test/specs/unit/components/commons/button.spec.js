import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import Button from '../../../../../src/components/commons/button';

describe('<Button />', () => {
  it('should mount empty component', () => {
    const { asFragment } = render(<Button />);
    
    expect(asFragment()).toMatchSnapshot();
  })

  it('should mount component', () => {
    const mockClick = jest.fn();
    const { asFragment, getByLabelText } = render(<Button text="testText" onClick={ mockClick }/>);
    const button = getByLabelText('button');
    
    fireEvent.click(button);
    
    expect(asFragment()).toMatchSnapshot();
    expect(mockClick).toHaveBeenCalled();
  })

})