import { useEffect, useRef, useState } from 'react';
import AvatarEditor from 'react-avatar-editor';

import { useUser } from '../../contexts/user';
import { CloseIcon } from '../Icons/CloseIcon';
import * as S from './styles';

type AvatarRepositionImageProps = {
  initialImage: string;
  discardImageHandler: () => void;
  errorHandler: (isError: boolean) => void;
};

export const AvatarRepositionImage: React.FC<AvatarRepositionImageProps> = ({
  initialImage,
  errorHandler,
  discardImageHandler,
}) => {
  const [imageZoom, setImageZoom] = useState(1);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    setViewportWidth(window.innerWidth);
  }, [window.innerWidth]);

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

      discardImageHandler();
    } catch (error) {
      console.log(error);
      errorHandler(true);
      discardImageHandler();
    }
  };

  return (
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
