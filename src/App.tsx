import { useState } from 'react';

import { AvatarRepositionImage } from './components/AvatarRepositionImage';
import { AvatarUpload } from './components/AvatarUpload';
import { UploadError } from './components/UploadError';

function App() {
  const [initialImage, setInitialImage] = useState('');
  const [hasError, setHasError] = useState(false);

  const discardImageHandler = () => setInitialImage('');
  const errorHandler = (isError: boolean) => setHasError(isError);

  if (initialImage)
    return (
      <AvatarRepositionImage
        initialImage={initialImage}
        discardImageHandler={discardImageHandler}
        errorHandler={errorHandler}
      />
    );

  if (hasError) return <UploadError errorHandler={errorHandler} />;

  return (
    <AvatarUpload
      setInitialImage={setInitialImage}
      errorHandler={errorHandler}
    />
  );
}

export default App;
