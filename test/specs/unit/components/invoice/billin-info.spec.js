import React from 'react';
import { render } from '@testing-library/react'
import BillinInfo from '../../../../../src/components/invoice/billin-info';

describe('<BillinInfo />', () => {
  it('should mount empty component', () => {
    const { asFragment } = render(<BillinInfo />);
    
    expect(asFragment()).toMatchSnapshot();
  })

  it('should mount with items', () => {
    const { asFragment } = render(<BillinInfo items={[
      {
        title: 'testTitle',
        info: 'testInfo'
      }
    ]}/>);
    
    expect(asFragment()).toMatchSnapshot();
  })
})
