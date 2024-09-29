import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/header";
import AppFooter from "../../components/footer/footer";
import showcaseImage from '../../assets/members/children.jpg'; // Update with your image

import { FaCalendarAlt } from "react-icons/fa";
import {
  EventPageContainer,
  ShowcaseHeaderContainer,
  ShowcaseHeader,
  ContentContainer,
  EventHeaderContainer,
  EventHeaderService,
  Bar,
  EventHeaderServiceText,
  EventSubHeader,
  EventsContainer,
  Events,
  Event,
  EventImageContainer,
  EventImage,
  Overlay,
  EventImageTextContainer,
  EventImageText,
  EventImageTextPlaceholder,
  EventImageTextLocation,
  EventImageTextActions,
  EventImageTextActionBtn,
  EventTextContainer,
  EventTextTitle,
  EventTextDate,
  PaginationContainer
} from "./event.styled";

import { EVENTSDATA } from "../../services/EVENTSDATA"; // Replace with your event data

const EventPage = () => {
  const [currentUpcomingPage, setCurrentUpcomingPage] = useState(1);
  const [currentPastPage, setCurrentPastPage] = useState(1);
  const itemsPerPage = 8;

  // Get today's date
  const today = new Date().toISOString().split("T")[0];

  // Separate upcoming and past events
  const upcomingEvents = EVENTSDATA.filter(event => event.date >= today);
  const pastEvents = EVENTSDATA.filter(event => event.date < today);

  // Pagination for upcoming events
  const totalUpcomingPages = Math.ceil(upcomingEvents.length / itemsPerPage);
  const currentUpcomingEvents = upcomingEvents.slice(
    (currentUpcomingPage - 1) * itemsPerPage,
    currentUpcomingPage * itemsPerPage
  );

  // Pagination for past events
  const totalPastPages = Math.ceil(pastEvents.length / itemsPerPage);
  const currentPastEvents = pastEvents.slice(
    (currentPastPage - 1) * itemsPerPage,
    currentPastPage * itemsPerPage
  );

  const handleUpcomingPageChange = (pageNumber) => {
    setCurrentUpcomingPage(pageNumber);
  };

  const handlePastPageChange = (pageNumber) => {
    setCurrentPastPage(pageNumber);
  };

  const showcaseHeaderText = () => {
    return (
      <ShowcaseHeaderContainer>
        <ShowcaseHeader>Events</ShowcaseHeader>
      </ShowcaseHeaderContainer>
    );
  };

  return (
    <EventPageContainer>
      <Header imageChildren={showcaseImage} textChildren={showcaseHeaderText()} />
      <ContentContainer>

        {/* Upcoming Events Section */}
        <EventHeaderContainer>
          <EventHeaderService>
            <Bar />
            <EventHeaderServiceText>Upcoming Events</EventHeaderServiceText>
            <Bar />
          </EventHeaderService>
          <EventSubHeader>Don’t miss out on the latest upcoming events happening soon.</EventSubHeader>
        </EventHeaderContainer>

        <EventsContainer>
          <Events>
            {currentUpcomingEvents.map((event) => (
              <Event key={event.id}>
                <EventImageContainer>
                  <EventImage src={event.thumbnail} alt="Event" />
                  <Overlay />
                  <EventImageTextContainer>
                    <EventImageText>
                      <EventImageTextPlaceholder>
                        Location:
                      </EventImageTextPlaceholder>
                      <EventImageTextLocation>
                        {event.location}
                      </EventImageTextLocation>
                    </EventImageText>
                    <EventImageTextActions>
                      <EventImageTextActionBtn>
                        <FaCalendarAlt />
                        <Link to={`/eagles-ccc/event-details/${event.id}`} state={{ event }} style={{ color: '#ccc' }}>
                          <p>Details</p>
                        </Link>
                      </EventImageTextActionBtn>
                    </EventImageTextActions>
                  </EventImageTextContainer>
                </EventImageContainer>
                <EventTextContainer>
                  <EventTextTitle>{event.eventTitle}</EventTextTitle>
                  <EventTextDate>{event.date}</EventTextDate>
                </EventTextContainer>
              </Event>
            ))}
          </Events>
        </EventsContainer>

        <PaginationContainer>
          {Array.from({ length: totalUpcomingPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handleUpcomingPageChange(index + 1)}
              disabled={currentUpcomingPage === index + 1}
            >
              {index + 1}
            </button>
          ))}
        </PaginationContainer>

        {/* Past Events Section */}
        <EventHeaderContainer>
          <EventHeaderService>
            <Bar />
            <EventHeaderServiceText>Past Events</EventHeaderServiceText>
            <Bar />
          </EventHeaderService>
          <EventSubHeader>Look back at some of the memorable past events.</EventSubHeader>
        </EventHeaderContainer>

        <EventsContainer>
          <Events>
            {currentPastEvents.map((event) => (
              <Event key={event.id}>
                <EventImageContainer>
                  <EventImage src={event.thumbnail} alt="Event" />
                  <Overlay />
                  <EventImageTextContainer>
                    <EventImageText>
                      <EventImageTextPlaceholder>
                        Location:
                      </EventImageTextPlaceholder>
                      <EventImageTextLocation>
                        {event.location}
                      </EventImageTextLocation>
                    </EventImageText>
                    <EventImageTextActions>
                      <EventImageTextActionBtn>
                        <FaCalendarAlt />
                        <Link to={`/eagles-ccc/event-details/${event.id}`} state={{ event }} style={{ color: '#ccc' }}>
                          <p>Details</p>
                        </Link>
                      </EventImageTextActionBtn>
                    </EventImageTextActions>
                  </EventImageTextContainer>
                </EventImageContainer>
                <EventTextContainer>
                  <EventTextTitle>{event.eventTitle}</EventTextTitle>
                  <EventTextDate>{event.date}</EventTextDate>
                </EventTextContainer>
              </Event>
            ))}
          </Events>
        </EventsContainer>

        <PaginationContainer>
          {Array.from({ length: totalPastPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePastPageChange(index + 1)}
              disabled={currentPastPage === index + 1}
            >
              {index + 1}
            </button>
          ))}
        </PaginationContainer>

      </ContentContainer>
      <AppFooter />
    </EventPageContainer>
  );
};

export default EventPage;
