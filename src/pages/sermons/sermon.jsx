import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import Header from "../../components/header/header";
import { Bar, ContentContainer, Overlay, PaginationContainer, Sermon, SermonHeaderContainer, SermonHeaderService, SermonHeaderServiceText, SermonHeaderText, SermonImage, SermonImageContainer, SermonImageText, SermonImageTextActionBtn, SermonImageTextActions, SermonImageTextContainer, SermonImageTextPastor, SermonImageTextPlaceholder, SermonPageContainer, Sermons, SermonsContainer, SermonSubHeader, SermonTextContainer, SermonTextDate, SermonTextTitle, ShowcaseHeader, ShowcaseHeaderContainer } from "./sermon.styled";

import { FaDownload, FaVideo } from "react-icons/fa";
import { SERMONSDATA } from "../../services/SERMONSDATA";
import showcaseImage from '../../assets/members/abb.jpg';
import AppFooter from "../../components/footer/footer";

const SermonPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(SERMONSDATA.length / itemsPerPage);

  const currentSermons = SERMONSDATA.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const showcaseHeaderText = () => {
    return (
      <ShowcaseHeaderContainer>
        <ShowcaseHeader>Watch or Listen Anytime</ShowcaseHeader>
      </ShowcaseHeaderContainer>
    );
  };

  return (
    <SermonPageContainer>
      <Header imageChildren={showcaseImage} textChildren={showcaseHeaderText()} />
      <ContentContainer>
        <SermonHeaderContainer>
          <SermonHeaderService>
            <Bar />
            <SermonHeaderServiceText>Services</SermonHeaderServiceText>
            <Bar />
          </SermonHeaderService>
          <SermonHeaderText>Teachings for the Soul’s Journey</SermonHeaderText>
          <SermonSubHeader>
            Delve into Profound Insights and Inspiring Messages Designed to
            Nurture Your Spirit, Illuminate Your Path, and Empower You in Your
            Everyday Life
          </SermonSubHeader>
        </SermonHeaderContainer>

        <SermonsContainer>
          <Sermons>
            {currentSermons.map((sermon) => (
              <Sermon key={sermon.id}>
                  {/* Passing sermon data as state */}
                  <SermonImageContainer>
                    <SermonImage src={sermon.thumbnail} alt="Sermon" />
                    <Overlay />
                    <SermonImageTextContainer>
                      <SermonImageText>
                        <SermonImageTextPlaceholder>
                          By {sermon.preacher.title}:
                        </SermonImageTextPlaceholder>
                        <SermonImageTextPastor>
                          {sermon.preacher.name}
                        </SermonImageTextPastor>
                      </SermonImageText>
                      <SermonImageTextActions>
                        <SermonImageTextActionBtn>
                          <FaVideo />
                          <Link 
                            to={`/eagles-ccc/sermons-details/${sermon.id}`} 
                            state={{ sermon }} 
                            style={{ color: '#ccc' }}
                          >
                            <p>Watch</p>
                          </Link>
                        </SermonImageTextActionBtn>
                        <SermonImageTextActionBtn>
                          <FaDownload />
                          <a 
                            href={sermon.video} download style={{ color: '#ccc', textDecoration: 'none' }}
                          >
                            <p>Download</p>
                          </a>
                        </SermonImageTextActionBtn>
                      </SermonImageTextActions>
                    </SermonImageTextContainer>
                  </SermonImageContainer>
                  <SermonTextContainer>
                    <SermonTextTitle>{sermon.sermonTitle}</SermonTextTitle>
                    <SermonTextDate>{sermon.date}</SermonTextDate>
                  </SermonTextContainer>
              </Sermon>
            ))}
          </Sermons>
        </SermonsContainer>

        <PaginationContainer>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              disabled={currentPage === index + 1}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </PaginationContainer>
      </ContentContainer>
      <AppFooter />
    </SermonPageContainer>
  );
};

export default SermonPage;
