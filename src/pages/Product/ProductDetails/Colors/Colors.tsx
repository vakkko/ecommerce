import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../../store/store";

import { stringToColor } from "string-to-color-gradient";

import { CircleWrapper, ColorBox, ColorCircle } from "./colors.styled";
import { setActiveImage } from "../../../../store/slices/ActiveImgSlice/activeImageSlice";
import type { ColorProps } from "./colors.types";
import { useEffect } from "react";

export default function Colors({ colors, setValue }: ColorProps) {
  const colorHashes = colors?.map((color) =>
    stringToColor(color.toLowerCase())
  );

  const dispatch = useDispatch();
  const activeImageIndex = useSelector(
    (state: RootState) => state.activeImg.index
  );

  useEffect(() => {
    if (colors?.length) {
      setValue("color", colors[0]);
    }
  }, [colors, setValue]);

  const handleColorClick = (index: number) => {
    dispatch(setActiveImage(index));
    setValue("color", colors![index]);
  };

  return (
    <ColorBox>
      <span>Color</span>
      <div>
        {colorHashes?.map((color, index) => (
          <CircleWrapper
            onClick={() => handleColorClick(index)}
            $active={activeImageIndex === index}
            key={index}
          >
            <ColorCircle $color={color}></ColorCircle>
          </CircleWrapper>
        ))}
      </div>
    </ColorBox>
  );
}
