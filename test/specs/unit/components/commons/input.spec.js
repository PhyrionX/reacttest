import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import Input from '../../../../../src/components/commons/input';

describe('<Input />', () => {
  it('should mount empty component', () => {
    const { asFragment } = render(<Input />);
    
    expect(asFragment()).toMatchSnapshot();
  })

  it('should mount without label, with type, id and placeholder', () => {
    const { asFragment } = render(<Input type="text"
        id="testId"
        placeholder="testPlaceholder" />);
    
    expect(asFragment()).toMatchSnapshot();
  })

  it('should mount with label, type, id and placeholder', () => {
    const { asFragment } = render(<Input label="testLabel"
        type="text"
        id="testId"
        placeholder="testPlaceholder" />);
    
    expect(asFragment()).toMatchSnapshot();
  })

  it('should mount with label, type, id, placeholder and error', () => {
    const { asFragment } = render(<Input label="testLabel"
        type="text"
        id="testId"
        error
        placeholder="testPlaceholder" />);
    
    expect(asFragment()).toMatchSnapshot();
  })

  it('should mount with value and onChange', () => {
    const { asFragment } = render(<Input label="testLabel"
        type="text"
        id="testId"
        error
        value="testValue"
        placeholder="testPlaceholder"
        onChange={() => {}} />);
    
    expect(asFragment()).toMatchSnapshot();
  })

  it('should mount without onKeyPress and fire event', () => {
    const mockFunctionOnKeyPress = jest.fn();
    const mockFunctionOnChange = jest.fn();
    const { getByLabelText } = render(<Input label="testLabel"
        type="text"
        id="testId"
        error
        value="testValue"
        placeholder="testPlaceholder"
        onChange={ mockFunctionOnChange } />);
    
    const input = getByLabelText("input");

    fireEvent.keyPress(input, {key: 'Enter', keyCode: 13 });
    expect(mockFunctionOnKeyPress).toHaveBeenCalledTimes(0); 
  })


  it('should mount onKeyPress and fire event', () => {
    const mockFunctionOnKeyPress = jest.fn();
    const mockFunctionOnChange = jest.fn();
    const { getByLabelText } = render(<Input label="testLabel"
        type="text"
        id="testId"
        error
        value="testValue"
        placeholder="testPlaceholder"
        onKeyPress={ mockFunctionOnKeyPress }
        onChange={ mockFunctionOnChange } />);
    
    const input = getByLabelText("input");

    fireEvent.keyPress(input, {key: 'Enter', keyCode: 13 });
    expect(mockFunctionOnKeyPress).toHaveBeenCalled(); 
  })
})