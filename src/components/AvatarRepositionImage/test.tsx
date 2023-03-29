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

  it('should discard image when user clicks on close button', async () => {
    renderWithTheme(
      <AvatarRepositionImage
        initialImage="/image"
        errorHandler={mockErrorHandler}
        discardImageHandler={mockDiscardImageHandler}
      />
    );

    const closeButton = screen.getByRole('button', { name: '' });

    await userEvent.click(closeButton);

    expect(mockDiscardImageHandler).toHaveBeenCalledTimes(1);
  });
});
