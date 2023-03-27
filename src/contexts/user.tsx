import { createContext, PropsWithChildren, useContext, useState } from 'react';

type UserContextData = {
  user: {
    image: string;
  };
  saveUserImage: (image: string) => void;
};

const UserContext = createContext({} as UserContextData);

export const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [userImage, setUserImage] = useState('');

  const saveUserImage = (image: string) => setUserImage(image);

  return (
    <UserContext.Provider
      value={{
        user: {
          image: userImage,
        },

        saveUserImage,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
