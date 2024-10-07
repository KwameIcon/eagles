import { CardContainer } from "./card.styled";


const Card = ({children, className}) => (
    <CardContainer className= {className}>
        {children}
    </CardContainer>
)

export default Card;