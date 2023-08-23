import styled from "styled-components/native";

interface Props {
  registerSchema: boolean;
}

export const Container = styled.View`
  gap: 16px;

  align-items: center;
`;

export const LinkText = styled.Text`
  margin-top: ${({ registerSchema }: Props) =>
    registerSchema ? "40px" : "12px"};

  margin-bottom: 12px;

  font-size: 18px;

  color: #110d8c;
`;
