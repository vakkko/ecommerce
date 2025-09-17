import { Link } from "react-router";
import { StyledText } from "./infoTect.styled";

export default function InfoText() {
  return (
    <StyledText>
      <p>Not a member?</p>
      <Link to={"register"}>Register</Link>
    </StyledText>
  );
}
