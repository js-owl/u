import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from '1_shared/libs/tests/componentRender/componentRender';
import { Sidebar } from './Sidebar';

describe('sidebar', () => {
  test('toBeInTheDocument', () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
  test('toHaveClass', () => {
    componentRender(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
