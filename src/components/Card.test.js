import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Card from './Card';

describe('<Card />', () => {
  let testProps;
  const handleChange = jest.fn();

  beforeEach(() => {
    testProps = {
      title: 'Input',
      subtitle: 'Array',
      isReadOnly: false,
      value: '3,4,5,6',
      onHandleChange: handleChange
    };
  });

  it('should display the components', () => {
    render(<Card {...testProps} />);
  
    const title = screen.getByTestId(/card-title/i);
    expect(title).toBeInTheDocument();

    const subtitle = screen.getByTestId(/card-subtitle/i);
    expect(subtitle).toBeInTheDocument();

    const textfield = screen.getByTestId(/card-textfield/i);
    expect(textfield).toBeInTheDocument();
  });

  it('should invoke onHandleChange when typing in textfield', () => {
    render(<Card {...testProps} />);

    const textfield = screen.getByTestId(/card-textfield/i);    
    fireEvent.change(textfield, { target: {value: '3,4,5,6,8' }});
    expect(handleChange).toBeCalledWith('3,4,5,6,8');
  });
});
