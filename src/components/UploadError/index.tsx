import { CloseIcon } from '../Icons/CloseIcon';
import { FallbackIcon } from '../Icons/FallbackIcon';
import * as S from './styles';

type UploadErrorProps = {
  errorHandler: (isError: boolean) => void;
};

export const UploadError: React.FC<UploadErrorProps> = ({ errorHandler }) => {
  return (
    <S.Container>
      <S.FallbackImage>
        <FallbackIcon />
      </S.FallbackImage>

      <S.ErrorMessage>
        <span>Sorry, the upload failed.</span>

        <button onClick={() => errorHandler(false)}>Try again</button>
      </S.ErrorMessage>

      <S.CloseButton onClick={() => errorHandler(false)}>
        <CloseIcon />
      </S.CloseButton>
    </S.Container>
  );
};
