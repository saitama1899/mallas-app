import styled from "styled-components";

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 10px;
  text-align: center;
`;

export default HeaderWrapper;
