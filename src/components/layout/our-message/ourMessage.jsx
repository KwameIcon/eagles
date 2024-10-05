import { OurMessageContainer, Title, Section, BibleQuote, QuoteSource } from "./ourMessage.styled";

const OurMessage = () => {
  return (
    <OurMessageContainer>
      <Title>Our Message</Title>

      <Section>
        At Cape Coast Christ Charismatic Center (CCC), we believe in sharing the message of hope, love, and salvation that is found in Jesus Christ. Our focus is to help individuals experience the transformative power of God in every aspect of their lives.
      </Section>

      <BibleQuote>
        "For I know the plans I have for you,” declares the Lord, “plans to prosper you and not to harm you, plans to give you hope and a future." 
      </BibleQuote>
      <QuoteSource>– Jeremiah 29:11 (NIV)</QuoteSource>

      <Section>
        Our message is centered on God’s love for humanity, the promise of salvation through Jesus, and the power of the Holy Spirit to guide us in our daily walk. We are committed to reaching out to people from all walks of life, bringing them into a life-changing relationship with Jesus Christ.
      </Section>

      <Section>
        Join us in this journey of faith as we grow together, live out the Gospel, and share God’s message of hope with the world.
      </Section>
    </OurMessageContainer>
  );
};

export default OurMessage;
