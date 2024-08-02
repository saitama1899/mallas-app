import styled from "styled-components";

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: black;
  color: white;
  height: ${({ theme }) => theme.layout.headerHeight};
  text-align: center;
  display: flex;
  justify-content: space-between;
  padding: 0 48px;
  align-items: center;
  box-sizing: border-box;
`;

export default HeaderWrapper;
