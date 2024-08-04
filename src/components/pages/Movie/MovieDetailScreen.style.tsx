import styled from "styled-components";

const MovieDetailWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const HeaderWrapper = styled.div`
  background-color: black;
  display: flex;
  align-items: center;
  border-top: 1px solid ${(props) => props.theme.colors.border};
  height: 320px;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: 0px;
    right: 0px;
    width: 30px;
    height: 30px;
    background-color: white;
    clip-path: polygon(100% 0, 100% 100%, 0 100%);
  }
  @media (max-width: ${(props) => props.theme.breakpoints.sd}) {
    height: auto;
  }
`;

const MainInfoWrapper = styled.div`
  @media (max-width: ${(props) => props.theme.breakpoints.sd}) {
    padding: 14px;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  max-width: 960px;
  margin: 0 auto;
  gap: 48px;
  padding-right: 48px;
  @media (max-width: ${(props) => props.theme.breakpoints.sd}) {
    flex-direction: column;
    padding-right: 0;
    gap: 28px;
  }
`;

const Poster = styled.img`
  width: 320px;
  height: 320px;
  object-fit: cover;
  @media (max-width: ${(props) => props.theme.breakpoints.sd}) {
    width: 100%;
    height: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const MainInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 48px;
  img {
    margin-top: 4px;
  }
`;

const Title = styled.h1`
  margin: 0;
  font-size: 40px;
  text-transform: uppercase;
  color: white;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 32px;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  padding-top: 14px;
  color:  white;
`;

const CompaniesWrapper = styled.div`
  flex-grow: 1;
  padding: 0 48px;
  cursor: grab;
  @media (max-width: ${(props) => props.theme.breakpoints.sd}) {
    padding: 0 14px;
  }
`;

const CompaniesContent = styled.div`
  max-width: 960px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
`;

const CompaniesTitle = styled.h2`
  font-size: 2rem;
  color: #000;
  text-transform: uppercase;
`;

const CompaniesGrid = styled.div`
  display: flex;
  gap: 45px;
  overflow-x: auto;
  padding-bottom: 60px;
  user-select: none;
  height: auto;

  &:active {
    cursor: grabbing;
  }
`;
const CompanyItem = styled.div`
  flex: 0 0 auto;
  height: 85px;
  text-align: center;
`;

const CompanyImage = styled.img`
  width: auto;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
  user-select: none;
`;

const CompanyTitle = styled.p`
  margin: 10px 0 5px;
  font-weight: 600;
  font-size: 0.875rem;
  color: #000;
`;

export {
	MovieDetailWrapper,
	HeaderWrapper,
	HeaderContent,
	Image,
	Title,
	Description,
	CompaniesWrapper,
	CompaniesTitle,
	CompaniesGrid,
	CompanyItem,
	CompanyImage,
	CompanyTitle,
	Poster,
	MainInfo,
	CompaniesContent,
	MainInfoWrapper,
};
