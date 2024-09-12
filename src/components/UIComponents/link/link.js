import {  } from "react-icons/bs";
import { LinkContainer } from "./link.styled";
import { BiArrowToRight } from "react-icons/bi";

const TextLink = ({text}) =>{

    return(
        <LinkContainer>
        {text}
        <BiArrowToRight/>
        </LinkContainer>
    )
}

export default TextLink;