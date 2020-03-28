import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import Table from '../../../../../src/components/commons/table';

console.error = (message) => {
  if (/(Failed prop type)/.test(message)) {
    throw new Error(message);
  }
};

describe('<Table />', () => {
  it('should not mount the component', () => {
    try {
      render(<Table />);
    } catch (e) {
      expect(e instanceof Error).toEqual(true);
    }
  })

  it('should mount the component', () => {
    const { asFragment } = render(<Table columns={ [
        {
          label: 'test1',
          key: 'test1'
        },
        {
          label: 'test2',
          key: 'test2',
          type: 'date'
        }
      ] }
      data={[
        { test1: 'a', test2: '2020-03-28T17:28:59.428Z' },
        { test1: 'b', test2: '2020-03-28T17:28:59.428Z' }
      ]} />);

    expect(asFragment()).toMatchSnapshot();
  })

  it('should not mount the component and row click', () => {
    const mockClick = jest.fn();
    const { container } = render(<Table columns={ [
        {
          label: 'test1',
          key: 'test1'
        },
        {
          label: 'test2',
          key: 'test2',
          type: 'date'
        }
      ] }
      data={[
        { test1: 'a', test2: '2020-03-28T17:28:59.428Z' },
        { test1: 'b', test2: '2020-03-28T17:28:59.428Z' }
      ]}
      onRowClick={ mockClick } />);
    const td = container.querySelector('.tfg-table__td--clickable');
    
    fireEvent.click(td);
    
    expect(mockClick).toHaveBeenCalled();
  })
})