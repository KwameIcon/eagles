import thum1 from '../assets/members/ll';
import thum2 from '../assets/members/children.jpg';
import thum3 from '../assets/comm/thump2.jpg';
import thum4 from '../assets/interior images/post_2.jpg';
import thum5 from '../assets/comm/thump4.webp';
import thum6 from '../assets/interior images/HowtoStudyTheBible.jpg';
import preacher from '../assets/members/TB_Joshua.png';

// Speaker and Guest Images
import speaker1 from '../assets/members/Chris_Oyakhilome.png'; // Replace with actual image paths
import speaker2 from '../assets/members/Cindy_Trimm.png';
import speaker3 from '../assets/members/Dag_Heward-Mills.png';
import speaker4 from '../assets/members/David_Oyedepo.png';
import guest1 from '../assets/members/TB_Joshua.png';
import guest2 from '../assets/members/Enoch_Adeboye.png';
import guest3 from '../assets/members/Mensah_Otabil.png';
import guest4 from '../assets/members/Joyce_Meyer.png';

// jingles and pass events videos
import Jingle from '../assets/others/h60ea0b9b_3053053.mov';
import PassEvent from '../assets/comm/bullet.mp4';

export const EVENTSDATA = [
  // Upcoming Events
  {
    id: 1,
    eventTitle: "Worship Night",
    date: "2024-10-05",
    location: "Eagles Arena",
    thumbnail: thum3,
    description: "Join us for an inspiring night of worship, where we come together to praise and experience the presence of God.",
    speakers: [
      { name: "John Doe", image: speaker1 },
      { name: "Jane Smith", image: speaker2 },
    ],
    guests: [
      { name: "TB Joshua", image: guest1 },
      { name: "Anna Taylor", image: guest2 },
    ],
    videos: {
      jingle: Jingle, // Only jingle for upcoming events
    }
  },
  {
    id: 2,
    eventTitle: "Youth Conference",
    date: "2024-11-12",
    location: "Youth Hall",
    thumbnail: thum2,
    description: "A powerful event for youth to connect, learn, and grow in their faith.",
    speakers: [
      { name: "Pastor Mike", image: speaker3 },
      { name: "Sarah Connor", image: speaker4 },
    ],
    guests: [
      { name: "Pastor Emily", image: guest3 },
      { name: "Jessica White", image: guest4 },
    ],
    videos: {
      jingle: Jingle,
    }
  },
  {
    id: 3,
    eventTitle: "Christmas Carol",
    date: "2024-12-24",
    location: "Main Auditorium",
    thumbnail: thum1,
    description: "Celebrate the Christmas season with us through beautiful carols and community fellowship.",
    speakers: [
      { name: "David Clark", image: speaker1 },
      { name: "Michelle Taylor", image: speaker2 },
    ],
    guests: [
      { name: "Laura King", image: guest1 },
      { name: "Tommy Lee", image: guest2 },
    ],
    videos: {
      jingle: Jingle,
    }
  },
  {
    id: 4,
    eventTitle: "New Year's Eve Service",
    date: "2024-12-31",
    location: "City Square",
    thumbnail: thum4,
    description: "Join us as we ring in the new year with prayer and celebration.",
    speakers: [
      { name: "Pastor Mark", image: speaker3 },
      { name: "Linda Adams", image: speaker4 },
    ],
    guests: [
      { name: "James Brown", image: guest3 },
      { name: "Sara Wilson", image: guest4 },
    ],
    videos: {
      jingle: Jingle,
    }
  },
  {
    id: 5,
    eventTitle: "Revival Week",
    date: "2024-10-15",
    location: "Revival Center",
    thumbnail: thum5,
    description: "Experience a week of spiritual renewal and revitalization with powerful teachings and worship.",
    speakers: [
      { name: "Bishop Allen", image: speaker1 },
      { name: "Rachel Green", image: speaker2 },
    ],
    guests: [
      { name: "Paul Martin", image: guest1 },
      { name: "Chloe Davis", image: guest2 },
    ],
    videos: {
      jingle: Jingle,
    }
  },

  // Past Events
  {
    id: 6,
    eventTitle: "Summer Outreach",
    date: "2023-08-10",
    location: "Community Park",
    thumbnail: thum1,
    description: "A community event filled with fun, food, and fellowship.",
    speakers: [
      { name: "Karen White", image: speaker3 },
    ],
    guests: [
      { name: "Eric Young", image: guest3 },
      { name: "Sophie Taylor", image: guest4 },
    ],
    videos: {
      passEvent: PassEvent,
    }
  },
  {
    id: 7,
    eventTitle: "Easter Service",
    date: "2024-04-07",
    location: "Main Hall",
    thumbnail: thum2,
    description: "Celebrate the resurrection of Jesus with us in a special service.",
    speakers: [
      { name: "David Johnson", image: speaker1 },
    ],
    guests: [
      { name: "Anna Marie", image: guest1 },
      { name: "Ben Nelson", image: guest2 },
    ],
    videos: {
      passEvent: PassEvent,
    }
  },
  {
    id: 8,
    eventTitle: "Leadership Summit",
    date: "2024-05-18",
    location: "Conference Room A",
    thumbnail: thum3,
    description: "A summit aimed at empowering church leaders with effective leadership skills.",
    speakers: [
      { name: "Lucy Hall", image: speaker4 },
      { name: "Michael Green", image: speaker3 },
    ],
    guests: [
      { name: "Anna Belle", image: guest3 },
      { name: "Oliver Roberts", image: guest4 },
    ],
    videos: {
      passEvent: PassEvent,
    }
  },
  {
    id: 9,
    eventTitle: "Youth Retreat",
    date: "2023-07-14",
    location: "Mountain Retreat Center",
    thumbnail: thum4,
    description: "A weekend retreat designed for youth to deepen their faith and build relationships.",
    speakers: [
      { name: "Matthew Davis", image: speaker1 },
    ],
    guests: [
      { name: "Sophia Turner", image: guest1 },
      { name: "Jackson Lee", image: guest2 },
    ],
    videos: {
      passEvent: PassEvent,
    }
  },
  {
    id: 10,
    eventTitle: "Thanksgiving Service",
    date: "2024-09-25",
    location: "Main Auditorium",
    thumbnail: thum5,
    description: "Join us for a special service of gratitude and thanksgiving.",
    speakers: [
      { name: "Chris Adams", image: speaker3 },
    ],
    guests: [
      { name: "Victoria Harris", image: guest3 },
      { name: "Ella Walker", image: guest4 },
    ],
    videos: {
      passEvent: PassEvent,
    }
  },
  {
    id: 11,
    eventTitle: "Back to School Drive",
    date: "2023-09-05",
    location: "City Plaza",
    thumbnail: thum6,
    description: "Help us support local students by donating school supplies and materials.",
    speakers: [
      { name: "Emily Johnson", image: speaker2 },
    ],
    guests: [
      { name: "James Smith", image: guest1 },
      { name: "Linda Brown", image: guest2 },
    ],
    videos: {
      passEvent: PassEvent,
    }
  },
  {
    id: 12,
    eventTitle: "Prayer and Fasting Week",
    date: "2024-01-10",
    location: "Prayer Hall",
    thumbnail: preacher,
    description: "Join us for a week dedicated to prayer and fasting for spiritual renewal.",
    speakers: [
      { name: "Bishop Timothy", image: speaker1 },
    ],
    guests: [
      { name: "Rebecca Evans", image: guest3 },
      { name: "Adam Clark", image: guest4 },
    ],
    videos: {
      passEvent: PassEvent,
    }
  },
  {
    id: 13,
    eventTitle: "Church Anniversary",
    date: "2024-03-25",
    location: "Main Hall",
    thumbnail: thum1,
    description: "Celebrate our church anniversary with a special service and fellowship.",
    speakers: [
      { name: "Pastor John", image: speaker2 },
    ],
    guests: [
      { name: "Grace Thompson", image: guest1 },
      { name: "Samuel Robinson", image: guest2 },
    ],
    videos: {
      passEvent: PassEvent,
    }
  },
  {
    id: 14,
    eventTitle: "Family Fun Day",
    date: "2023-05-20",
    location: "Church Grounds",
    thumbnail: thum2,
    description: "A day of fun activities for the whole family.",
    speakers: [
      { name: "Anna Lee", image: speaker3 },
    ],
    guests: [
      { name: "Philip Martin", image: guest3 },
      { name: "Megan Johnson", image: guest4 },
    ],
    videos: {
      passEvent: PassEvent,
    }
  },
  {
    id: 15,
    eventTitle: "Volunteer Appreciation Night",
    date: "2024-06-15",
    location: "Community Hall",
    thumbnail: thum3,
    description: "A special night to honor and appreciate our dedicated volunteers.",
    speakers: [
      { name: "Sarah Parker", image: speaker4 },
    ],
    guests: [
      { name: "Thomas Young", image: guest3 },
      { name: "Rachel Adams", image: guest4 },
    ],
    videos: {
      passEvent: PassEvent,
    }
  },
];

