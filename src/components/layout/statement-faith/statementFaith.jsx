import { StatementFaithContainer, Title, FaithPoint, Description } from "./statementFaith.styled";

const StatementFaith = () => {
  return (
    <StatementFaithContainer>
      <Title>Our Statement of Faith</Title>
      
      <FaithPoint>1. The Scriptures</FaithPoint>
      <Description>
        We believe that the Bible is the inspired, infallible, and authoritative Word of God. It is the foundation of our faith and the guide for our daily lives.
      </Description>
      
      <FaithPoint>2. The Trinity</FaithPoint>
      <Description>
        We believe in one God, eternally existent in three persons: Father, Son, and Holy Spirit. Each plays a distinct role in the salvation and sanctification of believers.
      </Description>

      <FaithPoint>3. Salvation</FaithPoint>
      <Description>
        We believe that salvation is a gift from God, received by faith in Jesus Christ alone, who died for our sins and rose again, providing us with eternal life.
      </Description>
      
      <FaithPoint>4. The Church</FaithPoint>
      <Description>
        We believe that the Church is the body of Christ, comprised of all believers. Its purpose is to spread the Gospel and equip the saints for the work of the ministry.
      </Description>

      <FaithPoint>5. The Second Coming</FaithPoint>
      <Description>
        We believe in the imminent return of Jesus Christ to gather His people and establish His Kingdom. This gives us hope and urgency in our mission.
      </Description>
      
      <FaithPoint>6. The Holy Spirit</FaithPoint>
      <Description>
        We believe that the Holy Spirit is active in the world today, empowering believers for service, convicting the world of sin, and guiding us into all truth.
      </Description>
    </StatementFaithContainer>
  );
};

export default StatementFaith;
