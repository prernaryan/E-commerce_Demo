import React, {createContext, useContext, useState} from 'react';

type ImageData = {
  path: string;
  mime: string;
  // add other fields from image-crop-picker result if needed
};

type ImageContextType = {
  showImages: ImageData[];
  setShowImages: (images: ImageData[]) => void;
};

const ImageContext = createContext<ImageContextType | undefined>(undefined);

export const ImageProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [showImages, setShowImages] = useState<ImageData[]>([]);

  return (
    <ImageContext.Provider value={{showImages, setShowImages}}>
      {children}
    </ImageContext.Provider>
  );
};

export const useImageContext = () => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error('useImageContext must be used within an ImageProvider');
  }
  return context;
};
