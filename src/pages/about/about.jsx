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
} from './about.styled'; 
import {ShowcaseHeader, ShowcaseHeaderContainer} from '../events/event.styled'
import Header from '../../components/header/header';
import AppFooter from '../../components/footer/footer';
import ShowcaseImage from '../../assets/interior images/post_2.jpg'
import Layout from '../../components/layout/layout';

const AboutPage = () => {
  const teamMembers = [
    { id: 1, name: 'John Doe', role: 'Pastor', image: '/path/to/pastor_image.jpg' },
    { id: 2, name: 'Jane Smith', role: 'Youth Leader', image: '/path/to/youth_leader_image.jpg' },
    { id: 3, name: 'Alice Johnson', role: 'Worship Leader', image: '/path/to/worship_leader_image.jpg' },
  ];



  const returnShowcaseHeader = () => {
    return (
      <ShowcaseHeaderContainer>
        <ShowcaseHeader>About Us</ShowcaseHeader>
      </ShowcaseHeaderContainer>
    );
  }


  return (
    <div>
      <Header textChildren={returnShowcaseHeader()} imageChildren= {ShowcaseImage} isZoomingOut={false} />

      <Layout/>
      <AppFooter/>
    </div>
  );
};

export default AboutPage;
