import React from 'react';
import {ShowcaseHeader, ShowcaseHeaderContainer} from '../events/event.styled'
import Header from '../../components/header/header';
import AppFooter from '../../components/footer/footer';
import ShowcaseImage from '../../assets/interior images/post_2.jpg'
import Layout from '../../components/layout/layout';


const AboutPage = () => {


  const returnShowcaseHeader = () => {
    return (
      <ShowcaseHeaderContainer>
        <ShowcaseHeader>
          About Us
        </ShowcaseHeader>
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
