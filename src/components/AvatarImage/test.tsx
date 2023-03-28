import { AvatarImage } from '.';
import { renderWithTheme } from '../../../__test__/renderWithTheme';

describe('<Avatar Image/>', () => {
  it('should render correctly with background image', () => {
    const { container } = renderWithTheme(<AvatarImage image="/image" />);

    expect(container.querySelector('div div')).toHaveStyleRule(
      'background',
      'url(/image)'
    );
  });

  it('should render component without background image', () => {
    const { container } = renderWithTheme(<AvatarImage />);

    expect(container.querySelector('div div')).not.toHaveStyleRule(
      'background',
      'url(/image)'
    );
  });
});
