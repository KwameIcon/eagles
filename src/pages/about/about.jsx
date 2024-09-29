import React from 'react';
import {
  AboutContainer,
  AboutSection,
  SectionTitle,
  SectionContent,
  TeamContainer,
  TeamMember,
  MemberImage,
  MemberName,
  MemberRole,
} from './about.styled'; // Import your styled components
import Header from '../../components/header/header';
import AppFooter from '../../components/footer/footer';
import ShowcaseImage from '../../assets/interior images/post_2.jpg'

const AboutPage = () => {
  const teamMembers = [
    { id: 1, name: 'John Doe', role: 'Pastor', image: '/path/to/pastor_image.jpg' },
    { id: 2, name: 'Jane Smith', role: 'Youth Leader', image: '/path/to/youth_leader_image.jpg' },
    { id: 3, name: 'Alice Johnson', role: 'Worship Leader', image: '/path/to/worship_leader_image.jpg' },
  ];

  return (
    <div>
      <Header textChildren="About Us" imageChildren= {ShowcaseImage} isZoomingOut={false} />

      <AboutContainer>
        <AboutSection>
          <SectionTitle>Our Mission</SectionTitle>
          <SectionContent>
            <p>
              We are committed to sharing the gospel and making disciples. Our mission is to be a Christ-centered
              community that serves others and reflects the love of Jesus Christ in everything we do.
            </p>
          </SectionContent>
        </AboutSection>

        <AboutSection>
          <SectionTitle>Our History</SectionTitle>
          <SectionContent>
            <p>
              Founded in 1995, Calvary Charismatic Centre has grown from a small gathering to a vibrant community
              of believers committed to worship, service, and outreach.
            </p>
          </SectionContent>
        </AboutSection>

        <AboutSection>
          <SectionTitle>Our Values</SectionTitle>
          <SectionContent>
            <ul>
              <li>Faith</li>
              <li>Community</li>
              <li>Service</li>
              <li>Growth</li>
              <li>Outreach</li>
            </ul>
          </SectionContent>
        </AboutSection>

        <AboutSection>
          <SectionTitle>Our Team</SectionTitle>
          <TeamContainer>
            {teamMembers.map(member => (
              <TeamMember key={member.id}>
                <MemberImage src={member.image} alt={member.name} />
                <MemberName>{member.name}</MemberName>
                <MemberRole>{member.role}</MemberRole>
              </TeamMember>
            ))}
          </TeamContainer>
        </AboutSection>
      </AboutContainer>

      <AppFooter />
    </div>
  );
};

export default AboutPage;
