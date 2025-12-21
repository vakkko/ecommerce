import {
  CoverImage,
  Images,
  ImagesContainer,
  OtherImages,
} from "./productImages.styled";
import type { ProductImagesProps } from "./productImages.types";

export default function ProductImages({ images }: ProductImagesProps) {
  const { cover_image, otherImages, description } = images;
  return (
    <ImagesContainer>
      <h4>Listing / Product</h4>
      <Images>
        <OtherImages>
          {otherImages?.map((img) => (
            <img src={img} alt={description} />
          ))}
        </OtherImages>
        <CoverImage>
          <img src={cover_image} alt={description} />
        </CoverImage>
      </Images>
    </ImagesContainer>
  );
}
