import styled from "styled-components";
export const MovieWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const Poster = styled.img`
  width: 100%;
  height: 250px;  
  object-fit: cover;
  border-bottom: 5px ${(props) => props.theme.colors.primary} solid;
`;

export const MovieInfo = styled.div`
  padding: 20px;  
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  position: relative;
`;

export const MovieTitle = styled.h2`
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;
  color: white;
  margin: 0;
  max-width: 125px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
