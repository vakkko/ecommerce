import { useState } from "react";
import {
  CoverImage,
  Images,
  ImagesContainer,
  SidebarImage,
  SidebarImages,
} from "./productImages.styled";
import type { ImageInterface, ProductImagesProps } from "./productImages.types";

export default function ProductImages({
  images,
  description,
}: ProductImagesProps) {
  const [activeImage, setActiveImage] = useState<ImageInterface | undefined>(
    () => {
      return images?.find((img) => img.spotlight) ?? images[0];
    }
  );

  const handleImageClick = (id: string) => {
    const selectedImage = images.find((img) => img.id === id);
    if (selectedImage) setActiveImage(selectedImage);
  };

  return (
    <ImagesContainer>
      <Images>
        <SidebarImages>
          {images?.map((img) => (
            <SidebarImage
              $active={activeImage?.id === img.id}
              onClick={() => handleImageClick(img.id)}
              key={img.id}
              src={img.image}
              alt={description}
            />
          ))}
        </SidebarImages>
        <CoverImage>
          {activeImage && (
            <img
              key={activeImage.id}
              src={activeImage.image}
              alt={description}
            />
          )}
        </CoverImage>
      </Images>
    </ImagesContainer>
  );
}
