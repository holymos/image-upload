import { useState } from 'react';

import { AvatarRepositionImage } from './components/AvatarRepositionImage';
import { AvatarUpload } from './components/AvatarUpload';

function App() {
  const [initialImage, setInitialImage] = useState('');

  const discardImageHandler = () => setInitialImage('');

  return initialImage ? (
    <AvatarRepositionImage
      initialImage={initialImage}
      discardImageHandler={discardImageHandler}
    />
  ) : (
    <AvatarUpload setInitialImage={setInitialImage} />
  );
}

export default App;
