import { ChurchVisionContainer, Title, VisionStatement, ScriptureReference } from "./churchVision.styledd";

const ChurchVision = () => {
  return (
    <ChurchVisionContainer>
      <Title>Our Church Vision</Title>
      <VisionStatement>
        "At Cape Coast Christ Charismatic Center, our vision is to empower individuals and families to experience a transformative relationship with Christ. We aim to cultivate a community grounded in faith, love, and service, where every member is equipped to fulfill their God-given purpose. We strive to reach out to our local and global communities, sharing the message of hope and salvation, while nurturing spiritual growth and development through dynamic worship, impactful teaching, and community engagement."
      </VisionStatement>
      <ScriptureReference>
        "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future." - Jeremiah 29:11
      </ScriptureReference>
    </ChurchVisionContainer>
  );
};

export default ChurchVision;
