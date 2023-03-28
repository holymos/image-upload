import { useState } from 'react';

import { AvatarRepositionImage } from './components/AvatarRepositionImage';
import { AvatarUpload } from './components/AvatarUpload';

function App() {
  const [initialImage, setInitialImage] = useState('');
  const [hasError, setHasError] = useState(false);

  const discardImageHandler = () => setInitialImage('');
  const errorHandler = (isError: boolean) => setHasError(isError);

  return initialImage || hasError ? (
    <AvatarRepositionImage
      hasError={hasError}
      initialImage={initialImage}
      discardImageHandler={discardImageHandler}
      errorHandler={errorHandler}
    />
  ) : (
    <AvatarUpload
      setInitialImage={setInitialImage}
      errorHandler={errorHandler}
    />
  );
}

export default App;
