import styled from "styled-components";

export const SizeFieldset = styled.fieldset`
  border: none;

  & > legend {
    margin-bottom: 16px;
  }
`;

export const SizeLabel = styled.label`
  width: 70px;
  height: 42px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid var(--grey2);
  cursor: pointer;

  &:has(input:checked) {
    border: 1px solid var(--darkBlue);
  }

  &:not(:last-child) {
    margin-right: 8px;
  }

  & > input {
    display: none;
  }
`;
