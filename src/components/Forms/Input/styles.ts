import { TextInput } from "react-native";

import styled, { css } from "styled-components/native";

interface Props {
  inputColor: string;
}

export const Container = styled.View`
  margin-bottom: 8px;
  flex-direction: row;

  border-radius: 8px;

  background-color: #f5f5ff;
`;

export const IconContainer = styled.View`
  width: 55px;
  height: 56px;

  align-items: center;
  justify-content: center;

  background-color: #f5f5ff;

  border-radius: 8px 0 0 8px;

  border-bottom-width: ${({ inputColor }: Props) =>
    inputColor ? "2px" : "2px"};
  border-bottom-color: ${({ inputColor }: Props) =>
    inputColor === "default"
      ? "#4f4f4f"
      : inputColor === "error"
      ? "#dc1637"
      : inputColor === "focus"
      ? "#1a13e681"
      : "#10790d"};
`;

export const InputText = styled(TextInput)`
  flex: 1;

  color: #110d8c;
  background-color: #f5f5ff;

  font-size: 18px;

  padding: 0 16px;
  margin-left: 2px;

  border-radius: 0 8px 8px 0;

  border-bottom-width: ${({ inputColor }: Props) =>
    inputColor ? "2px" : "2px"};
  border-bottom-color: ${({ inputColor }: Props) =>
    inputColor === "default"
      ? "#4f4f4f"
      : inputColor === "error"
      ? "#dc1637"
      : inputColor === "focus"
      ? "#1a13e681"
      : "#10790d"};
`;
