import styled from "styled-components/native";

import { StatusBar } from "react-native";

export const statusBarHeight = StatusBar.currentHeight
  ? `${StatusBar.currentHeight + 22}px`
  : `${64}px`;

export const Container = styled.View`
  padding-top: ${statusBarHeight};
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 40px;
  background-color: #8080ff;
`;

export const Content = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const Username = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;
