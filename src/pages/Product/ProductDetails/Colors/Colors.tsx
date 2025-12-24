import { ColorBox, ColorCircle } from "./colors.styled";
import { stringToColor } from "string-to-color-gradient";
export default function Colors({ colors }: { colors: string[] | undefined }) {
  const colorHashes = colors?.map((color) =>
    stringToColor(color.toLowerCase())
  );

  return (
    <ColorBox>
      <span>Color</span>
      <div>
        {colorHashes?.map((color, index) => (
          <ColorCircle $color={color} key={index}></ColorCircle>
        ))}
      </div>
    </ColorBox>
  );
}
