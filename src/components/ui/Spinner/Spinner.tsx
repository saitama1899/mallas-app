import type React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25vh;
`;

const SpinnerElement = styled.div`
  border: 8px solid ${(props) => props.theme.colors.input_placeholder};
  border-top: 8px solid ${(props) => props.theme.colors.primary};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} .5s linear infinite;
`;

const Spinner: React.FC = () => {
	return (
		<SpinnerWrapper>
			<SpinnerElement />
		</SpinnerWrapper>
	);
};

export default Spinner;
