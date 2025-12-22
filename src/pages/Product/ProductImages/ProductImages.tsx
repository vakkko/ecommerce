import { useEffect, useState } from "react";
import {
  CoverImage,
  Images,
  ImagesContainer,
  OtherImages,
} from "./productImages.styled";
import type { ProductImagesProps } from "./productImages.types";

export default function ProductImages({
  images,
  description,
}: ProductImagesProps) {
  const [productImages, setProductImages] = useState<
    ProductImagesProps["images"]
  >([]);

  useEffect(() => {
    setProductImages(images);
  }, [images]);

  const handleImgDetect = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLImageElement;
    const currentImg = target.currentSrc;
    if (currentImg) {
      const updateCollection = productImages.map((img) => {
        if (img.image === currentImg) {
          return { ...img, spotlight: true };
        } else {
          return { ...img, spotlight: false };
        }
      });
      setProductImages(updateCollection);
    }
  };

  return (
    <ImagesContainer>
      <h4>Listing / Product</h4>
      <Images onClick={handleImgDetect}>
        <OtherImages>
          {productImages?.map(
            (img) =>
              !img.spotlight && (
                <img key={img.id} src={img.image} alt={description} />
              )
          )}
        </OtherImages>
        <CoverImage>
          {productImages?.map(
            (img) =>
              img.spotlight && (
                <img key={img.id} src={img.image} alt={description} />
              )
          )}
        </CoverImage>
      </Images>
    </ImagesContainer>
  );
}
