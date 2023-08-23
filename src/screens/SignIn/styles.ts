import styled from "styled-components/native";

import { statusBarHeight } from "../../components/Header/styles";

interface Props {
  registerSchema: boolean;
}

export const Container = styled.View`
  justify-content: center;

  padding-top: ${statusBarHeight};
  padding-left: 16px;
  padding-right: 16px;
`;

export const ContainerForm = styled.View`
  gap: 16px;

  align-items: center;
`;
