import styled from "styled-components/native";

import { FlatList } from "react-native";
import { IlistBalanceProps } from "../../@types/movements";

export const Container = styled.View`
  flex: 1;
  background-color: #dddbdb;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;

  margin: 14px;
`;

export const ListBalance = styled(
  FlatList as new () => FlatList<IlistBalanceProps>
)``;
