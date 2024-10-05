import { ChurchServiceContainer, Title, Section, ServiceList, ServiceItem } from "./churchService.styled";

const ChurchService = () => {
  return (
    <ChurchServiceContainer>
      <Title>Church Services</Title>

      <Section>
        We believe in the transformative power of worship and fellowship. Our services are designed to deepen your relationship with God and empower you to live a fulfilling Christian life.
      </Section>

      <Title>Service Schedule</Title>
      <ServiceList>
        <ServiceItem>Sunday Morning Service: 9:00 AM - 11:00 AM</ServiceItem>
        <ServiceItem>Wednesday Midweek Service: 6:00 PM - 8:00 PM</ServiceItem>
        <ServiceItem>Friday Night Vigil: 10:00 PM - 12:00 AM</ServiceItem>
        <ServiceItem>Youth Service: Every Saturday at 4:00 PM</ServiceItem>
        <ServiceItem>Children's Church: During Sunday services</ServiceItem>
      </ServiceList>

      <Title>What to Expect</Title>
      <Section>
        Our services typically include:
      </Section>
      <ServiceList>
        <ServiceItem>Inspirational Worship Music</ServiceItem>
        <ServiceItem>Life-Changing Sermons</ServiceItem>
        <ServiceItem>Prayer and Ministry Time</ServiceItem>
        <ServiceItem>Opportunities for Fellowship</ServiceItem>
        <ServiceItem>Children's Activities and Lessons</ServiceItem>
      </ServiceList>

      <Section>
        We invite you to join us as we gather in faith, grow in grace, and share the love of Christ within our community and beyond.
      </Section>
    </ChurchServiceContainer>
  );
};

export default ChurchService;
