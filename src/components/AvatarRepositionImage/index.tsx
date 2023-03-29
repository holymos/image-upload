import { useRef, useState } from 'react';
import AvatarEditor from 'react-avatar-editor';

import { useUser } from '../../contexts/user';
import { CloseIcon } from '../Icons/CloseIcon';
import { FallbackIcon } from '../Icons/FallbackIcon';
import * as S from './styles';

type AvatarRepositionImageProps = {
  initialImage: string;
  hasError: boolean;
  discardImageHandler: () => void;
  errorHandler: (isError: boolean) => void;
};

export const AvatarRepositionImage: React.FC<AvatarRepositionImageProps> = ({
  hasError,
  initialImage,
  errorHandler,
  discardImageHandler,
}) => {
  const [imageZoom, setImageZoom] = useState(1);

  const { saveUserImage } = useUser();

  const avatarEditor = useRef<AvatarEditor | null>(null);

  const onSaveImageHandler = () => {
    try {
      if (avatarEditor.current) {
        avatarEditor.current.getImage().toBlob((data) => {
          if (data) {
            const reader = new FileReader();
            reader.readAsDataURL(data);

            reader.onload = async () => {
              const base64 = reader.result?.toString();

              if (base64) saveUserImage(base64);
            };
          }
        }, 'image/jpeg');
      }
    } catch (error) {
      console.log(error);
      errorHandler(true);
      discardImageHandler();
    }
  };

  const viewportWidth = window.innerWidth;

  return hasError ? (
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
  ) : (
    <S.Container>
      <AvatarEditor
        border={0}
        width={viewportWidth > 800 ? 120 : 95}
        height={viewportWidth > 800 ? 120 : 95}
        scale={imageZoom}
        ref={avatarEditor}
        image={initialImage}
      />

      <S.Controls>
        <span>Crop</span>

        <S.Slider
          sliderValue={imageZoom}
          type="range"
          min={1}
          max={2}
          step={0.05}
          value={imageZoom}
          onChange={(e) => {
            setImageZoom(+e.target.value);
          }}
        />

        <button onClick={onSaveImageHandler}>Save</button>
      </S.Controls>

      <S.CloseButton onClick={discardImageHandler}>
        <CloseIcon />
      </S.CloseButton>
    </S.Container>
  );
};
