import styled from "styled-components";

export const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 0;
  border-bottom: 1px solid black;
  width: 100%;
`;

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding: 8px;
  font-size: 16px;
  text-transform: uppercase;

  &::placeholder {
    color: ${({ theme }) => theme.colors.input_placeholder};
  }
`;

export const SearchButton = styled.button`
  background-color:  white;
  border: none;
  cursor: pointer;
  margin-top: 2px;
`;
