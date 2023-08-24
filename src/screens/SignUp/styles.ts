import styled from "styled-components/native";

import { statusBarHeight } from "../../components/Header/styles";

export const Container = styled.View`
  justify-content: center;

  padding-top: ${statusBarHeight};
  padding-left: 16px;
  padding-right: 16px;
`;
