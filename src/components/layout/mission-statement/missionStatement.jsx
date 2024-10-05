import { MissionStatementContainer, Title, Section, BulletPointList, BulletPoint } from "./missionStatement.styled";

const MissionStatement = () => {
  return (
    <MissionStatementContainer>
      <Title>Our Mission Statement</Title>
      
      <Section>
        At Cape Coast Christ Charismatic Center (CCC), our mission is to impact lives and communities through the message of Jesus Christ. We are dedicated to spreading the Gospel and empowering believers to live out their faith.
      </Section>
      
      <Title>Our Core Values</Title>
      <BulletPointList>
        <BulletPoint>Faith: Trusting in God’s promises and guidance.</BulletPoint>
        <BulletPoint>Community: Fostering relationships and support among believers.</BulletPoint>
        <BulletPoint>Excellence: Striving to glorify God in everything we do.</BulletPoint>
        <BulletPoint>Service: Actively engaging in outreach and support for those in need.</BulletPoint>
        <BulletPoint>Discipleship: Committing to spiritual growth and education.</BulletPoint>
      </BulletPointList>
      
      <Section>
        Our vision is to see lives transformed by the power of the Holy Spirit, leading to a vibrant community where individuals are empowered to reach their full potential in Christ.
      </Section>

      <Title>Our Commitment</Title>
      <Section>
        We commit to:
      </Section>
      <BulletPointList>
        <BulletPoint>Preaching the Gospel with clarity and passion.</BulletPoint>
        <BulletPoint>Providing opportunities for growth through teaching and training.</BulletPoint>
        <BulletPoint>Engaging in compassionate outreach and service projects.</BulletPoint>
        <BulletPoint>Encouraging believers to share their faith in their communities.</BulletPoint>
      </BulletPointList>
    </MissionStatementContainer>
  );
};

export default MissionStatement;
