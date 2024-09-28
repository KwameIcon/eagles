import { Footer, FooterBottom, FooterColumn, FooterColumnHeading, FooterColumnItem, FooterColumnLink, FooterColumnList, FooterContent, FooterLinks, FooterText, SocialIcons, SocialIconLink } from "./footer.styled";
import { FaAngleRight, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function AppFooter() {
  return (
    <Footer>
      <FooterContent>
        <FooterText>
          <FooterColumnHeading className="churchName">
            <span>Calvary</span> Charismatic Centre
          </FooterColumnHeading>
          <p>
             We are a Christ-centered community, committed to sharing the gospel and making disciples. Join us for worship, prayer, and fellowship as we grow together in faith and service.
          </p>

          {/* Social Media Icons */}
          <SocialIcons>
            <SocialIconLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </SocialIconLink>
            <SocialIconLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </SocialIconLink>
          </SocialIcons>
        </FooterText>

        <FooterLinks>
          <FooterColumn>
            <FooterColumnHeading>About</FooterColumnHeading>
            <FooterColumnList>
              <FooterColumnItem>
                <FooterColumnLink href="#"><FaAngleRight /> Staff</FooterColumnLink>
              </FooterColumnItem>
              <FooterColumnItem>
                <FooterColumnLink href="#"><FaAngleRight /> Beliefs</FooterColumnLink>
              </FooterColumnItem>
              <FooterColumnItem>
                <FooterColumnLink href="#"><FaAngleRight /> History</FooterColumnLink>
              </FooterColumnItem>
              <FooterColumnItem>
                <FooterColumnLink href="#"><FaAngleRight /> Mission</FooterColumnLink>
              </FooterColumnItem>
              <FooterColumnItem>
                <FooterColumnLink href="#"><FaAngleRight /> Wedding & Funerals</FooterColumnLink>
              </FooterColumnItem>
              <FooterColumnItem>
                <FooterColumnLink href="#"><FaAngleRight /> Jobs & Internship</FooterColumnLink>
              </FooterColumnItem>
              <FooterColumnItem>
                <FooterColumnLink href="#"><FaAngleRight /> Fellowships</FooterColumnLink>
              </FooterColumnItem>
            </FooterColumnList>
          </FooterColumn>

          <FooterColumn>
            <FooterColumnHeading>Connect</FooterColumnHeading>
            <FooterColumnList>
              <FooterColumnItem>
                <FooterColumnLink href="#"><FaAngleRight /> Home Groups</FooterColumnLink>
              </FooterColumnItem>
              <FooterColumnItem>
                <FooterColumnLink href="#"><FaAngleRight /> Recovery Groups</FooterColumnLink>
              </FooterColumnItem>
              <FooterColumnItem>
                <FooterColumnLink href="#"><FaAngleRight /> Memberships</FooterColumnLink>
              </FooterColumnItem>
              <FooterColumnItem>
                <FooterColumnLink href="#"><FaAngleRight /> Children & Students</FooterColumnLink>
              </FooterColumnItem>
              <FooterColumnItem>
                <FooterColumnLink href="#"><FaAngleRight /> Volunteer</FooterColumnLink>
              </FooterColumnItem>
              <FooterColumnItem>
                <FooterColumnLink href="#"><FaAngleRight /> Counseling</FooterColumnLink>
              </FooterColumnItem>
              <FooterColumnItem>
                <FooterColumnLink href="#"><FaAngleRight /> Assistance</FooterColumnLink>
              </FooterColumnItem>
            </FooterColumnList>
          </FooterColumn>

          <FooterColumn className="service">
            <FooterColumnHeading>Services</FooterColumnHeading>
            <FooterColumnList>
              <FooterColumnItem style={{color: "#cccccc"}}>Saturday Prayer Meeting</FooterColumnItem>
              <FooterColumnItem style={{color: "#c8a816", fontSize: "25px"}}>10:00 am to 11:30 am</FooterColumnItem>
              <FooterColumnItem style={{color: "#cccccc"}}>Sunday Service</FooterColumnItem>
              <FooterColumnItem style={{color: "#c8a816", fontSize: "25px"}}> 8:30 am to 11:30 am</FooterColumnItem>
            </FooterColumnList>
          </FooterColumn>
        </FooterLinks>
      </FooterContent>
      
      <FooterBottom>
        <p>Copyright ©2024 All rights reserved | Calvary Charismatic Centre ❤</p>
      </FooterBottom>
    </Footer>
  );
}

export default AppFooter;
