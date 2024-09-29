import styled from 'styled-components';

export const GalleryContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

export const PageTitle = styled.h1`
  font-size: 7rem;
  color: #fff;
`

export const GallerySection = styled.section`
  margin-bottom: 40px;
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
`;

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
`;

export const GalleryItem = styled.div`
  background: #f9f9f9;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s;
  
  &:hover {
    transform: scale(1.05);
  }
`;

export const GalleryImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

export const GalleryDescription = styled.p`
  padding: 10px;
  font-size: 1rem;
  color: #666;
`;
