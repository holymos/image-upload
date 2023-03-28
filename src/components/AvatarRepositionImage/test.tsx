import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import { AvatarRepositionImage } from '.';
import { renderWithTheme } from '../../../__test__/renderWithTheme';
import * as hooks from '../../contexts/user';

vi.mock('react-avatar-editor', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="AvatarEditor" />;
  },
}));

vi.mock('../Icons/FallbackIcon', () => ({
  FallbackIcon: () => <div data-testid="FallbackIcon" />,
}));

vi.mock('../Icons/CloseIcon', () => ({
  CloseIcon: () => <div data-testid="CloseIcon" />,
}));

const mockSaveUserImage = vi.fn();
vi.spyOn(hooks, 'useUser').mockImplementation(() => ({
  user: {
    image: '',
  },
  saveUserImage: mockSaveUserImage,
}));

const mockDiscardImageHandler = vi.fn();
const mockErrorHandler = vi.fn();

describe('<AvatarRepositionImage>', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render initial image with controls', () => {
    const { container } = renderWithTheme(
      <AvatarRepositionImage
        initialImage=""
        hasError={false}
        errorHandler={mockErrorHandler}
        discardImageHandler={mockDiscardImageHandler}
      />
    );

    expect(screen.getByTestId('AvatarEditor')).toBeInTheDocument();
    expect(screen.getByText(/crop/i)).toBeInTheDocument();
    expect(container.querySelector('input')).toBeInTheDocument();
    expect(container.querySelector('input')).toHaveProperty('type', 'range');
    expect(screen.getByRole('button', { name: /save/i })).toBeInTheDocument();
  });

  it('should render error message', () => {
    const { container } = renderWithTheme(
      <AvatarRepositionImage
        initialImage=""
        hasError={true}
        errorHandler={mockErrorHandler}
        discardImageHandler={mockDiscardImageHandler}
      />
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
    renderWithTheme(
      <AvatarRepositionImage
        initialImage=""
        hasError={true}
        errorHandler={mockErrorHandler}
        discardImageHandler={mockDiscardImageHandler}
      />
    );

    const closeButton = screen.getByRole('button', { name: '' });

    await userEvent.click(closeButton);

    expect(mockErrorHandler).toHaveBeenCalledTimes(1);
    expect(mockErrorHandler).toHaveBeenCalledWith(false);
  });

  it('should discard image when user clicks on close button', async () => {
    renderWithTheme(
      <AvatarRepositionImage
        initialImage="/image"
        hasError={false}
        errorHandler={mockErrorHandler}
        discardImageHandler={mockDiscardImageHandler}
      />
    );

    const closeButton = screen.getByRole('button', { name: '' });

    await userEvent.click(closeButton);

    expect(mockDiscardImageHandler).toHaveBeenCalledTimes(1);
  });
});
