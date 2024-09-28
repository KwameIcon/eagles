import { useEffect, useState } from "react";
import { FiX } from 'react-icons/fi';
import {BgImage, CloseButton, Controllers, HeaderContainer, HeaderTop, Image, Logo, LogoContainer, LogoText, NavBarListContainer, NavbarsContainer, NavButton, OpenButton, Overlay, SearchButton, SearchContainer, SearchHeaderText, SearchInputField, SearchSubText, Showcase,} from "./header.styled";
import ChurchLogo from '../../assets/logo/logo.png';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";

const Header = ({ textChildren, imageChildren, isZoomingOut }) => {

  // states
  const [activeIndex, setActiveIndex] = useState("Home");
  const [searchVisible, setSearchVisible] = useState(false);
  const [isHeaderFix, setIsHeaderFix] = useState(false);
  const [isMobileNav, setIsMobileNav] = useState(false);


// navigation buttons array
  const navButtons = ["Home", "Sermons", "Events", "Gallery", "About Us", "Contact Us", "Giving"];


// handles current page
  const handleCurrentIndex = (button) => {
    setActiveIndex(button);
  };


  // handles window scroll
  const handleScroll = () =>{
    if(window.scrollY >= 200){
      setIsHeaderFix(true)
    }else{
      setIsHeaderFix(false)
    }
  }


  // handle scroll
  useEffect(() =>{
    window.addEventListener('scroll', handleScroll)

    return(() =>{
      window.removeEventListener('scroll', handleScroll);
    })
  })



  return (
    <HeaderContainer>
      <BgImage>
        <Image src={imageChildren} alt="interior Image" isZoomingOut={isZoomingOut} />
      </BgImage>
      <Overlay />

      <HeaderTop isHeaderFix = {isHeaderFix}>
        <LogoContainer>
          <Logo src={ChurchLogo} alt="CCC" />
          <LogoText isHeaderFix = {isHeaderFix}><span style={{ color: "gold" }}> Calvary </span> Charismatic Centre </LogoText>
        </LogoContainer>

        <NavbarsContainer isMobileNav = {isMobileNav} >
          <NavBarListContainer>
            {navButtons.map((button) => (
              <NavButton isHeaderFix = {isHeaderFix}
                key={button}
                className={activeIndex === button ? "active" : ""}
              >
                <Link 
                  to = {button === "Home" ? "/" : `/eagles-ccc/${button.toLowerCase()}/`}
                  onClick={() => handleCurrentIndex(button)}
                >
                  {button}
                </Link>
              </NavButton>
            ))}
          </NavBarListContainer>
        </NavbarsContainer>

        <SearchButton onClick={() => setSearchVisible(true)} isHeaderFix = {isHeaderFix}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            className="bi-search"
            viewBox="0 0 16 16"
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="20%" stopColor="gold" />
                <stop offset="80%" stopColor="#ffffff" />
              </linearGradient>
            </defs>
            <path
              d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
              fill="url(#gradient)"
            />
          </svg>
        </SearchButton>

        <SearchContainer visible={searchVisible}>
          <SearchHeaderText>Search</SearchHeaderText>
          <SearchSubText>Type your text, and hit enter to search:</SearchSubText>
          <SearchInputField type="text" placeholder="Search the site" />
          <FiX className="closeButton" onClick={() => setSearchVisible(false)} />
        </SearchContainer>

        {/* menu display on mobile view */}
        <Controllers isHeaderFix =  {isHeaderFix}>
          {!isMobileNav ? (
            <OpenButton onClick={() => setIsMobileNav(true)}>
              <FaBars/>
          </OpenButton>) : (
          <CloseButton onClick={() => setIsMobileNav(false)} >
            <FaTimes/>
          </CloseButton>)
          }
        </Controllers>
      </HeaderTop>
      <Showcase>{textChildren}</Showcase>
    </HeaderContainer>
  );
};

export default Header;
