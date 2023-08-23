import styled from "styled-components/native";

export const StyledLogo = styled.Text`
  font-size: 40px;
  font-weight: bold;

  text-align: center;

  margin-bottom: 64px;

  color: ${(props: { blueSchema: boolean }) =>
    props.blueSchema ? "#110D8C" : "#FE5B52"};
`;
