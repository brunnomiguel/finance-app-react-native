import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex: 1;

  margin-bottom: 24px;

  padding-left: 14px;
  padding-right: 14px;

  border-bottom-width: 1px;
  border-bottom-color: #9f9f9f;
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;

  margin-top: 2px;
  margin-bottom: 8px;
`;

export const TextDate = styled.Text`
  color: #8f8f8f;
  font-weight: bold;
`;

export const TextLabel = styled.Text`
  color: #000;

  font-size: 16px;
  font-weight: bold;
`;

export const TextValue = styled.Text`
  font-size: 16px;

  font-weight: 500;

  color: ${(props: { colorSchema: boolean }) =>
    props.colorSchema ? "#e74c3c" : "#138a44"};
`;

export const Skeleton = styled.View`
  width: 80px;
  height: 10px;

  border-radius: 6px;
  background-color: #9f9f9f;
`;
