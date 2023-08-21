import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;

  padding-top: 10px;
  padding-left: 18px;
  padding-right: 18px;
  padding-bottom: 10px;

  margin-top: -24px;
  margin-left: 14px;
  margin-right: 14px;

  background-color: #fff;
  border-radius: 4px;

  z-index: 99;
`;

export const Item = styled.View``;

export const Title = styled.Text`
  font-size: 20px;
  color: #8f8f8f;
`;

export const ContentCurrency = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CurrencySymbol = styled.Text`
  color: #8f8f8f;
  font-size: 18px;
  margin-right: 6px;
`;

export const BalanceValue = styled.Text`
  font-size: 22px;
  color: ${(props: { expenses: boolean }) =>
    props.expenses ? "#e74c3c" : "#138a44"};
`;
