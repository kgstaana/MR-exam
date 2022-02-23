import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from './App';

describe('<App />', () => {
  it('should display the two components', () => {
    render(<App />);
    const inputCard = screen.getByTestId(/input-card/i);
    const outputCard = screen.getByTestId(/output-card/i);
    expect(inputCard).toBeInTheDocument();
    expect(outputCard).toBeInTheDocument();
  });
});
