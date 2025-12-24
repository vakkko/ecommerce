import {
  CoverImage,
  Images,
  ImagesContainer,
  SidebarImage,
  SidebarImages,
} from "./productImages.styled";
import type { ProductImagesProps } from "./productImages.types";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../store/store";
import { setActiveImage } from "../../../store/slices/ActiveImgSlice/activeImageSlice";

export default function ProductImages({
  images,
  description,
}: ProductImagesProps) {
  const dispatch = useDispatch();
  const activeImageIndex = useSelector(
    (state: RootState) => state.activeImg.index
  );

  const handleImageClick = (i: number) => {
    dispatch(setActiveImage(i));
  };

  return (
    <ImagesContainer>
      <Images>
        <SidebarImages>
          {images?.map((img, index) => (
            <SidebarImage
              $active={activeImageIndex === index}
              onClick={() => handleImageClick(index)}
              key={index}
              src={img}
              alt={description}
            />
          ))}
        </SidebarImages>
        <CoverImage>
          {images?.[activeImageIndex] && (
            <img src={images?.[activeImageIndex]} alt={description} />
          )}
        </CoverImage>
      </Images>
    </ImagesContainer>
  );
}
