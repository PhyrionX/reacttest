import React from 'react';
import { render } from '@testing-library/react'
import Total from '../../../../../src/components/invoice/total';

describe('<Total />', () => {
  it('should mount empty component', () => {
    const { asFragment } = render(<Total />);
    
    expect(asFragment()).toMatchSnapshot();
  })

  it('should mount with total value', () => {
    const { asFragment } = render(<Total total={ 248 }/>);
    
    expect(asFragment()).toMatchSnapshot();
  })
})
