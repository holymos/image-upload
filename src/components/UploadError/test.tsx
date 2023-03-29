import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import { UploadError } from '.';
import { renderWithTheme } from '../../../__test__/renderWithTheme';

vi.mock('../Icons/FallbackIcon', () => ({
  FallbackIcon: () => <div data-testid="FallbackIcon" />,
}));

const mockErrorHandler = vi.fn();

describe('<UploadError />', () => {
  it('should render error message', () => {
    const { container } = renderWithTheme(
      <UploadError errorHandler={mockErrorHandler} />
    );

    expect(screen.queryByTestId('AvatarEditor')).not.toBeInTheDocument();
    expect(screen.queryByText(/crop/i)).not.toBeInTheDocument();
    expect(container.querySelector('input')).not.toBeInTheDocument();

    expect(screen.getByText('Sorry, the upload failed.')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /try again/i })
    ).toBeInTheDocument();
    expect(screen.getByTestId('FallbackIcon')).toBeInTheDocument();
  });

  it('should clear error message when user clicks on close button', async () => {
    renderWithTheme(<UploadError errorHandler={mockErrorHandler} />);

    const closeButton = screen.getByRole('button', { name: '' });

    await userEvent.click(closeButton);

    expect(mockErrorHandler).toHaveBeenCalledTimes(1);
    expect(mockErrorHandler).toHaveBeenCalledWith(false);
  });
});
