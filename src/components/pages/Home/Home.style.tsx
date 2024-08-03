import styled from "styled-components";

export const HomeWrapper = styled.div`
  padding: 48px;
  @media (max-width: ${(props) => props.theme.breakpoints.sd}) {
    padding: 28px 14px;
  }
`;
