import styled from "styled-components";

const GridContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 0;
  list-style: none;
`;

const GridItem = styled.li`
  background-color: black;
  overflow: hidden;
  transition: transform 0.2s;
  height: 340px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  user-select: none;
  cursor: pointer;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    right: -1px;
    width: 25px;
    height: 25px;
    background-color: white;
    clip-path: polygon(100% 0, 100% 100%, 0 100%);
  }

  &:hover {
    transform: translateY(-10px);
  }

`;

export { GridContainer, GridItem };
