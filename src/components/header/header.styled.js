import styled, {keyframes} from 'styled-components';

export const HeaderContainer = styled.section`
    width: 100%;
    height: 650px;
    overflow: hidden;
    position: relative;
`;

export const BgImage = styled.div`
    position: absolute;
    inset: 0;
    width: 100%; 
    height: 100%;
    z-index: 0;
`;

// Keyframes for zoom in and zoom out animations
const zoomIn = keyframes`
  0% {
    transform: scale(0.9);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const zoomOut = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0.9);
    opacity: 0;
  }
`;


export const Image = styled.img`
    width: 100%; 
    height: 100%;
    object-fit: cover;
    transition: opacity 1s ease-in-out;
    animation: ${props => props.isZoomingOut ? zoomOut : zoomIn} 3s forwards;
`;

export const Overlay = styled.div`
    position: absolute;
    inset: 0;
    width: 100%; 
    height: 100%;
    background-color: rgba(50, 50, 50, 0.5);
    z-index: 1;
`;

export const HeaderTop = styled.header`
    position: ${({isHeaderFix}) => isHeaderFix ? "Fixed" : "relative"};
    width: 100%; 
    padding: 0 50px;
    height: 15.384615385%;
    background-color: ${({isHeaderFix}) => isHeaderFix ? "#ffffff" : "rgba(0, 0, 0, 0.2)"};
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* border-bottom: ${({isHeaderFix}) => isHeaderFix ? "1px solid #ccc" : "none"}; */
    box-shadow: ${({isHeaderFix}) => isHeaderFix ? 'rgba(33, 35, 38, 0.1) 0px 10px 10px -10px' : ''};
`;

export const LogoContainer = styled.div`
    width: 180px;
    height: 75px;
    display: flex;
    gap: 5px;
    justify-content: space-around;
    align-items: last baseline;
`;

export const Logo = styled.img`
    width: 60px;
    height: 80px;
`;

export const LogoText = styled.h2`
    font-size: 17px;
    color: ${({isHeaderFix}) => isHeaderFix ? "#000" : "#fff"};
    font-family: "Lobster";
    font-weight: 500;
`;

export const NavbarsContainer = styled.nav``;

export const NavBarListContainer = styled.ul`
    display: flex;
    gap: 25px;
    align-items: center;
`;

export const NavButton = styled.li`
    list-style: none;
    position: relative;
    font-weight: 400;
    font-family: "Poppins";
    font-size: 14px;
    text-transform: uppercase;
    cursor: pointer;

    & a{
        color: ${({isHeaderFix}) => isHeaderFix ?"#000" : "#fff"}; 
        text-decoration: none;
    }

    &::before{
        position: absolute;
        content: "";
        top: 100%;
        left: 50%;
        width: 0;
        height: 3px;
        background-color: gold;
        z-index: 100;
        transition: 0.3s ease-in;
    }
    &:hover::before{
        left: 0;
        width: 100%;
    }

    &.active{
        border-bottom: 3px solid white;
    }
`;

export const SearchButton = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 100px;
  background-color: ${({isHeaderFix}) => isHeaderFix ? "#ccc" : "none"};

  & .bi-search{
    cursor: pointer;
    transition: 0.3s ease-in-out;
  }

  & .bi-search:hover{
    transform: rotate(-30deg);
  }
`;

export const SearchContainer = styled.div`
  position: absolute;
  top: ${({ visible }) => (visible ? "0" : "-200px")}; /* Start from above the viewport */
  left: 0;
  background-color: #1ea2b1;
  width: 100%; 
  padding: 0 100px;
  height: 200px;
  display: flex;
  line-height: 1.7rem;
  flex-direction: column;
  justify-content: center;
  transition: top 0.4s ease-in-out; 
  
  .closeButton {
    position: absolute;
    left: 90%;  
    top: 20%;
    font-size: 40px;
    border: 3px solid #fff;
    color: #fff;
    border-radius: 100%;
    cursor: pointer;
    transition: border 0.3s ease-in-out;
  }

  .closeButton:hover {
    border-color: gold;
  }
`;


export const SearchHeaderText = styled.h1`
    font-size: 40px;
    font-weight: 400;
    line-height: 50px;
    color: #ffffff;
`;

export const SearchSubText = styled.p`
    color: #fff;
    font-weight: 300;
    font-size: 16px;
`;

export const SearchInputField = styled.input`
    width: 80%;
    height: 50px;
    border: none;
    outline: none;
    text-align: center;
    border-radius: 5px;
    font-size: 16px;
`;

export const Showcase = styled.div`
    position: relative;
    width: 100%;
    height: 84.615384615%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 100;
`;
