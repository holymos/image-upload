import { screen } from '@testing-library/react';
import { vi } from 'vitest';

import { AvatarUpload } from '.';
import { renderWithTheme } from '../../../__test__/renderWithTheme';
import * as hooks from '../../contexts/user';

const useUserSpy = vi.spyOn(hooks, 'useUser').mockImplementation(() => ({
  user: {
    image: '',
  },
  saveUserImage: vi.fn(),
}));

vi.mock('../AvatarImage', () => ({
  AvatarImage: () => <div data-testid="AvatarImage" />,
}));

const mockErrorHandler = vi.fn();
const mockSetInitialImage = vi.fn();

describe('<AvatarUpload />', () => {
  it('should render image uploader without image', () => {
    renderWithTheme(
      <AvatarUpload
        errorHandler={mockErrorHandler}
        setInitialImage={mockSetInitialImage}
      />
    );

    expect(
      screen.getByRole('heading', { name: /organization logo/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/drop the image here or click to browse./i)
    ).toBeInTheDocument();
    expect(screen.queryByTestId('AvatarImage')).not.toBeInTheDocument();
  });

  it('should render image uploader with image', () => {
    useUserSpy.mockImplementationOnce(() => ({
      user: {
        image: '/image',
      },
      saveUserImage: vi.fn(),
    }));

    renderWithTheme(
      <AvatarUpload
        errorHandler={mockErrorHandler}
        setInitialImage={mockSetInitialImage}
      />
    );

    expect(
      screen.getByRole('heading', { name: /organization logo/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/drop the image here or click to browse./i)
    ).toBeInTheDocument();
    expect(screen.queryByTestId('AvatarImage')).toBeInTheDocument();
  });
});
