import { Logo, LogoContainer, LogoText } from "./logo.styled";

import churchLogo from '../../../../assets/logo/logo.png';
import blaze from '../../../../assets/others/blaze.gif';


const ChurchLogo = ({isHeaderFix, className, logoText}) => {

    return(
        <LogoContainer className= {className}>
          <Logo src={churchLogo} alt="CCC" />
          <LogoText className= {logoText} isHeaderFix = {isHeaderFix}><span style={{ backgroundImage: `url(${blaze})` }}> Calvary </span> Charismatic Centre </LogoText>
        </LogoContainer>
    )
}

export default ChurchLogo;