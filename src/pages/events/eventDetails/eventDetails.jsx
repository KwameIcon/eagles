import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import {
  EventDetailsContainer,
  EventHero,
  EventContent,
  EventTitle,
  EventDescription,
  EventDate,
  EventLocation,
  EventSpeakers,
  EventGuests,
  SpeakerImage,
  GuestImage,
  BackButton,
  VideoContainer // Assuming you'll create a styled component for video
} from './eventDetails.styled'; // Assuming these styled components exist
import { EVENTSDATA } from '../../../services/EVENTSDATA'; // Event data source

const EventDetailsPage = () => {
  const { id } = useParams(); // Get event ID from URL
  const { state } = useLocation(); // Get event data if passed from the previous page
  const [eventData, setEventData] = useState(state?.event || null);

  useEffect(() => {
    // If event data is not passed through state, fetch it using the ID
    if (!eventData) {
      const event = EVENTSDATA.find(e => e.id === parseInt(id));
      if (event) setEventData(event);
    }
  }, [id, eventData]);

  if (!eventData) {
    return <div>No event data available.</div>;
  }

  return (
    <EventDetailsContainer>
      <EventHero src={eventData.thumbnail} alt={eventData.eventTitle} />
      <EventContent>
        <EventTitle>{eventData.eventTitle}</EventTitle>
        <EventDate>{eventData.date}</EventDate>
        <EventLocation>{eventData.location}</EventLocation>
        <EventDescription>{eventData.description}</EventDescription>
        
        {eventData.speakers && (
          <EventSpeakers>
            <strong>Speakers:</strong>
            <div>
              {eventData.speakers.map((speaker, index) => (
                <div key={index}>
                  <SpeakerImage src={speaker.image} alt={speaker.name} />
                  <span>{speaker.name}</span>
                </div>
              ))}
            </div>
          </EventSpeakers>
        )}
        
        {eventData.guests && eventData.guests.length > 0 && (
          <EventGuests>
            <strong>Guests:</strong>
            <div>
              {eventData.guests.map((guest, index) => (
                <div key={index}>
                  <GuestImage src={guest.image} alt={guest.name} />
                  <span>{guest.name}</span>
                </div>
              ))}
            </div>
          </EventGuests>
        )}

        {/* Conditional rendering for videos */}
        <VideoContainer>
          {eventData.videos?.jingle && (
            <video controls>
              <source src={eventData.videos.jingle} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          {eventData.videos?.passEvent && (
            <video controls>
              <source src={eventData.videos.passEvent} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </VideoContainer>
        
        <BackButton to="/eagles-ccc/events">Back to Events</BackButton>
      </EventContent>
    </EventDetailsContainer>
  );
};

export default EventDetailsPage;
