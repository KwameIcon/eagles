import React, { useState } from 'react';
import {
  GalleryContainer,
  GallerySection,
  SectionTitle,
  GalleryGrid,
  GalleryItem,
  GalleryImage,
  GalleryDescription,
} from './gallery.styled'; // Import styled components for styling
import Header from '../../components/header/header';
import AppFooter from '../../components/footer/footer';
import Modal from '../../components/UIComponents/modal/displayGallleryModal';

import recentImage1 from '../../assets/interior images/church_interior_image1.jpg';
import recentImage2 from '../../assets/interior images/church_interior.jpg';
import oldImage1 from '../../assets/others/christian-church-africa-6746558.webp';
import oldImage2 from '../../assets/others/christian-church-africa-6746558.webp';
import { ShowcaseHeader, ShowcaseHeaderContainer } from '../events/event.styled';

const GalleryPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({ src: '', alt: '' });

  const recentGalleryItems = [
    { id: 1, src: recentImage1, description: 'Recent Image 1' },
    { id: 2, src: recentImage2, description: 'Recent Image 2' },
  ];

  const oldGalleryItems = [
    { id: 1, src: oldImage1, description: 'Old Image 1' },
    { id: 2, src: oldImage2, description: 'Old Image 2' },
  ];

  const openModal = (src, alt) => {
    setSelectedImage({ src, alt });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };


  const returnShowcaseHeader = () => {
    return (
      <ShowcaseHeaderContainer>
        <ShowcaseHeader>Gallery</ShowcaseHeader>
      </ShowcaseHeaderContainer>
    );
  }

  return (
    <div>
      <Header textChildren={returnShowcaseHeader()} imageChildren={recentImage2} isZoomingOut={false} />

      <GalleryContainer>
        <GallerySection>
          <SectionTitle>Recent</SectionTitle>
          <GalleryGrid>
            {recentGalleryItems.map(item => (
              <GalleryItem key={item.id} onClick={() => openModal(item.src, item.description)}>
                <GalleryImage src={item.src} alt={item.description} />
                <GalleryDescription>{item.description}</GalleryDescription>
              </GalleryItem>
            ))}
          </GalleryGrid>
        </GallerySection>

        <GallerySection>
          <SectionTitle>Old</SectionTitle>
          <GalleryGrid>
            {oldGalleryItems.map(item => (
              <GalleryItem key={item.id} onClick={() => openModal(item.src, item.description)}>
                <GalleryImage src={item.src} alt={item.description} />
                <GalleryDescription>{item.description}</GalleryDescription>
              </GalleryItem>
            ))}
          </GalleryGrid>
        </GallerySection>
      </GalleryContainer>

      <AppFooter />

      {/* Modal for displaying larger images */}
      <Modal isOpen={isModalOpen} onClose={closeModal} imageSrc={selectedImage.src} imageAlt={selectedImage.alt} />
    </div>
  );
};

export default GalleryPage;
