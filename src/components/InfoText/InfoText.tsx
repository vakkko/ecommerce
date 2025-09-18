import { Link } from "react-router";
import { StyledText } from "./infoTect.styled";
import type { InfoTextProps } from "../../types";

export default function InfoText({ text, link, url }: InfoTextProps) {
  return (
    <StyledText>
      <p>{text}</p>
      <Link to={url}>{link}</Link>
    </StyledText>
  );
}
