import { PhilosophyContainer, Title, Description, BibleQuote, QuoteSource } from "./philosophy.styled";

const Philosophy = () => {
  return (
    <PhilosophyContainer>
      <Title>Our Philosophy</Title>

      <Description>
        At Cape Coast Christ Charismatic Center (CCC), we firmly believe that Christianity is a practical way of life, not just a belief system. The teachings of God's Word are intended to create tangible change when they are applied in daily life.
      </Description>

      <Description>
        Every individual is created in God's image and deserves to be treated with dignity and respect. Our actions should reflect our faith, ensuring that everything we do is done with excellence and integrity for the glory of God.
      </Description>

      <BibleQuote>
        "Those who have insight will shine like the bright expanse of the heavens, and those who lead many to righteousness, like the stars forever and ever." 
      </BibleQuote>
      <QuoteSource>– Daniel 12:3 (CSB)</QuoteSource>
      
      <Description>
        Our philosophy underscores the importance of living out our faith practically, respecting one another, and striving for excellence in all endeavors. It is our commitment to reflect God's love and truth in every aspect of our lives.
      </Description>
    </PhilosophyContainer>
  );
};

export default Philosophy;
