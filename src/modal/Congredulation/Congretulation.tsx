import { useNavigate } from "react-router";

import Button from "../../components/Button/Button";
import HeadingText from "../../components/HeadingText/HeadingText";

import { CongratsContainer, CongratsMessage } from "./congretulation.styles";

export default function Congredulation() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/products");
  };

  return (
    <CongratsContainer>
      <button onClick={handleNavigate}>
        <img src="/images/close.svg" alt="close" />
      </button>
      <CongratsMessage>
        <img src="/images/verified.png" alt="verified" />
        <div>
          <HeadingText text="Congrats!" />
          <p>Your order is placed successfully!</p>
        </div>
        <Button handleSubmit={handleNavigate}>Continue shopping</Button>
      </CongratsMessage>
    </CongratsContainer>
  );
}
