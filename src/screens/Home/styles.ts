import styled, { css } from "styled-components/native";

import { StatusBar } from "react-native";

interface Props {
  formSchema: boolean;
}

export const statusBarHeight = StatusBar.currentHeight
  ? `${StatusBar.currentHeight + 64}px`
  : `${64}px`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  padding-left: 16px;
  padding-right: 16px;

  background-color: #f2f2f2;
`;

export const Title = styled.Text`
  font-size: 40px;

  margin-bottom: 64px;

  color: #110d8c;

  text-align: center;

  ${({ formSchema }: Props) =>
    formSchema &&
    css`
      font-weight: bold;
      color: #000;
    `}
`;

export const Subtitle = styled.Text`
  font-size: 26px;

  text-align: center;
`;

export const LittleText = styled.Text`
  font-size: 18px;

  margin-top: 10px;
  margin-bottom: 64px;

  text-align: center;
`;
