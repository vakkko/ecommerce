import styled from "styled-components";
import { buttonStyles } from "../../../../components/Button/button.styled";

export const PaymentContainer = styled.div<{ $checkout?: boolean }>`
  display: flex;
  flex-direction: column;

  & > dl {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  & > dl > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:not(:last-child) {
      color: var(--darkBlue2);
      font-size: 16px;
      line-height: 100%;
    }

    &:last-child {
      color: var(--darkBlue);
      font-family: Poppins;
      font-weight: 500;
      font-size: 20px;
      line-height: 100%;
    }
  }

  & > a,
  & > button {
    margin-top: ${(props) => (props.$checkout ? "81px" : "102px")};
  }

  & > a {
    ${buttonStyles}
  }
`;
