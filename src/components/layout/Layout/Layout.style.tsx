import styled from "styled-components";

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main<{ hide: boolean }>`  
  flex: 1;
  margin-top: ${({ hide, theme }) => (hide ? "0" : theme.layout.headerHeight)};
`;

export { LayoutWrapper, MainContent };
