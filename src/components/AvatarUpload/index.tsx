import { ChangeEvent, DragEvent, useState } from 'react';

import { useUser } from '../../contexts/user';
import { AvatarImage } from '../AvatarImage';
import { ImageIcon } from '../Icons/ImageIcon';
import * as S from './styles';

type AvatarUploadProps = {
  errorHandler: (isError: boolean) => void;
  setInitialImage: (image: string) => void;
};

export const AvatarUpload: React.FC<AvatarUploadProps> = ({
  errorHandler,
  setInitialImage,
}) => {
  const [dragActive, setDragActive] = useState(false);
  const { user } = useUser();

  const handleDrag = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: DragEvent) => {
    const { files } = e.dataTransfer;
    const file = (files || [])[0];
    const fileType = file && files[0].name.split('.')[1];

    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (!fileType || !['png', 'jpeg', 'jpg', 'webp'].includes(fileType)) {
      return errorHandler(true);
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64 = reader.result?.toString();

      if (base64) setInitialImage(base64);
    };
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const { files } = e.target;
    const file = (files || [])[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = async () => {
        const base64 = reader.result?.toString();

        if (base64) setInitialImage(base64);
      };
    }
  };

  return (
    <S.Upload
      id="label-file-upload"
      htmlFor="input-file-upload"
      onDrop={handleDrop}
      onDragOver={handleDrag}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      isDragActive={dragActive}
    >
      <input
        type="file"
        id="input-file-upload"
        multiple={false}
        onChange={handleChange}
        accept="image/png, image/jpeg, image/jpg, image/webp"
      />

      {user.image && <AvatarImage image={user.image} />}

      <S.Wrapper>
        <S.TitleContainer>
          <ImageIcon />
          <h2>Organization Logo</h2>
        </S.TitleContainer>

        <p>Drop the image here or click to browse.</p>
      </S.Wrapper>
    </S.Upload>
  );
};
