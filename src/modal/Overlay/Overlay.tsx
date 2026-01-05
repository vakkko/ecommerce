import { OverlayContainer } from "./overlay.styled";
import type { OverlayProps } from "./overlay.types";

export default function Overlay({ handleClose }: OverlayProps) {
  return <OverlayContainer onClick={handleClose}></OverlayContainer>;
}
