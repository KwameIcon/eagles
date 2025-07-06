import styled from "styled-components";

export const HomescreenContainer = styled.main`
    width: 100%;
    height: auto;
`

export const ShowcaseContentContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`

export const ChurchNameContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 430px) {
        gap: 5px;
    }
`

export const Line = styled.div`
    width: 23%;
    height: 1px;
    background-color: gold;

    @media screen and (max-width: 430px) {
        width: 18%;
    }
`

export const ChurchName = styled.p`
    font-size: 14px;
    font-weight: 300;
    text-transform: uppercase;
    color: #fff;
    font-family: 'Raleway', sans-serif;

    @media screen and (max-width: 430px) {
        width: 64%;
        text-align: center;
    }
`

export const ShowcaseHeaderText = styled.h1`
    width: 100%;
    font-weight: 600;
    font-size: 60px;
    font-family: 'Merriweather', sans-serif;
    text-transform: uppercase;
    color: #fff;
    text-align: center;

    @media screen and (max-width: 430px) {
        font-size: 40px;
    }
`

export const ShowcaseSubText = styled.p`
    width: 80%;
    font-size: 15px;
    color: #fff;
    font-family: 'Oswald', sans-serif;
    text-align: center;

    @media screen and (max-width: 430px) {
        width: 85%;
        font-size: 14px;
    }
`

export const ActionsContainer = styled.div`
    width: 50%;
    margin: 20px 0;
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 430px) {
        width: 100%;
    }
`

export const BepartOfUsBtn = styled.div`
    padding: 10px 20px;
    background-color: gold;
    border-radius: 30px;
    color: #fff;
    cursor: pointer;
`

export const ReadMoreBtn = styled.div`
    padding: 10px 20px;
    border: 1px solid gold;
    border-radius: 30px;
    color: gold;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover{
        background-color: gold;
        color: #ffffff;
    }
`

// body
export const Body = styled.section`
    width: 100%;
    padding: 20px;
    color: rgba(0, 0, 0, 0.6);
    height: auto;
`

// short message
export const ShortMessage = styled.p`
    width: 100%;
    height: 100px;
    padding: 0px 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #abc;
    text-align: center;
    font-size: 18px;
    font-style: italic;

    @media screen and (max-width: 430px) {
        padding: 10px 20px 20px 20px;
        height: auto;
        line-height: 28px;
    }
`

export const ChurchInfoSection = styled.div`
    width: 100%;
    margin: 20px 0;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: first baseline;
    font-family: 'Roboto', sans-serif;
`

export const ChurchInfoSectionAbout = styled.div`
    max-width: 400px;
    overflow: hidden;
`

export const ChurchInfoSectionAboutHeaderText = styled.h2`
    font-size: 25px;
    margin-bottom: 20px 0;
    text-transform: capitalize;
`

export const ChurchInfoSectionAboutImageContainer = styled.div`
    width: 100%;
    margin: 15px 0;
    margin-top: 22px;
    height: 200px;
    overflow: hidden;
    box-sizing: border-box;
`

export const ChurchInfoSectionAboutImage = styled.img`
    width: 100%;
    height: 100%;
`

export const ChurchInfoSectionAboutText = styled.p`
line-height: 30px;
`

export const ChurchInfoSectionEvents = styled.div`
    width: 400px;

`

export const ChurchInfoSectionEventsHeader = styled.h2`
    width: 100%;
    font-size: 25px;
    margin-bottom: 20px 0;
    text-transform: capitalize;
    padding: 20px 0;
    border-bottom: 1px solid #ccc;
`

export const ChurchInfoSectionEventsEventsContainer = styled.ul`
    width: 100%;
    margin: 10px 0;
`

export const ChurchInfoSectionEventsEvent = styled.li`
    list-style-type: none;
    padding: 20px 0;
    border-bottom: 1px solid #ccc;
    line-height: 25px;
`

export const ChurchInfoSectionEventsTime = styled.p`
    font-size: 14px;
`

export const ChurchInfoSectionEventsType = styled.p`
    font-size: 20px;

    & a{
    color: #1ea2b1;
    transition: 0.3s ease-in-out;
    }

    & a:hover{
    color: gold;
    }
`

export const ChurchInfoSectionLocation = styled.div`
    max-width: 400px;
    padding: 20px 40px;
    background-color: #f4f4f4;
    overflow: hidden;
`

export const ChurchInfoSectionLocationHeader = styled.h2`
    width: 100%;
    font-size: 22px;
    margin-bottom: 20px 0;
    text-transform: capitalize;
    padding: 20px 0;
    color: #1ea2b1;
`

export const ChurchInfoSectionLocationText = styled.p`
    line-height: 30px;
    margin: 10px 0;

    & span{
        color: #1ea2b1;
        transition: 0.3s ease-in-out;
    }

    & span:hover{
        color: gold;
        cursor: pointer;
    }
`

export const ChurchInfoSectionLocationImageContainer = styled.div`
    width: 100%;
    margin: 10px auto;
    height: 180px;
    overflow: hidden;
    border: 1px solid #ccc;
`

export const ChurchInfoSectionLocationImage = styled.img`
    width: 100%; 
    height: 100%;
    object-fit: cover;
`

// church groups
export const ChurchGroupsContainer = styled.div`
    border-top: 1px solid #ccc;
`

export const ChurchGroupsHeaderText = styled.h2`
    font-size: 25px;
    margin-bottom: 20px 0;
    text-transform: capitalize;
    padding: 20px 0;
`

export const ChurchGroups = styled.ul`
    width: 100%;
    height: auto;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;

    @media screen and (max-width: 430px) {
        justify-content: center;
    }
`

export const ChurchGroup = styled.li`
    width: 300px;
    height: 200px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    cursor: pointer;

    &:hover img{
        scale: 1.05;
    }
`

export const ChurchGroupImageContainer = styled.div`
    width: 100%;
    height: 150px; 
    overflow: hidden;
    z-index: 0;
`

export const ChurchGroupImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.3s ease-in-out;
`

export const ChurchGroupName = styled.p`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 600;
  background-color: #1ea2b1;
  color: #fff;
  z-index: 10;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

// latest sermons
export const LatestSermonContainer = styled.div`
    width: 100%;
    height: auto;
    margin: 30px 0;
    padding: 50px 20px;
    background-color: #f4f4f4;
`

export const LatestSermonHeaderText = styled.h2`
    width: 100%;
    font-size: 25px;
    margin-bottom: 20px 0;
    text-transform: capitalize;
    padding: 20px 0;
    text-align: center;
`

export const LatestSermons = styled.ul`
    width: 100%;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    align-items: center;

    @media screen and (max-width: 430px) {
        justify-content: center;
    }
`

export const LatestSermon = styled.li`
    width: 300px;
    height: 350px;
    overflow: hidden;
    background-color: #ffffff;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    position: relative;

    & .LatestSermonListenIcon{
        position: absolute;
        top: 36%;
        left: 20px;
        width: 50px;
        height: 50px;
        padding: 10px;
        font-size: 25px;
        margin-left: 8px; 
        background-color: #fff;
        color: #1ea2b1;
        cursor: pointer; 
        transition: 0.3s ease-in-out;

        &:hover{
            cursor: pointer;
            color: #fff;
            background-color: #1ea2b1;
        }
    }

    @media screen and (max-width: 430px) {
        width: 90dvw;
        height: 300px;

        .LatestSermonListenIcon{
            top: 44%;
            width: 70px;
        }
    }
`

export const LatestSermonVideoThumpnailContainer = styled.div`
    width: 100%;
    height: 50%;
    background-color: #ccc;
    overflow: hidden;

    @media screen and (max-width: 430px) {
        height: 60%;
    }
`

export const LatestSermonVideo = styled.video`
    width: 100%;
    height: 100%;
    object-fit: scale-down;
`

export const LatestSermonVideoThumpnail = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.3s ease-in-out;

    &:hover{
        scale: 1.05;
    }
`

export const LatestSermonTextContainer = styled.div`
    width: 100%;
    height: 50%;
    padding: 15px 10px 10px 22px;
    font-family: 'Roboto', sans-serif;
    display: flex;
    gap: 15px;
    flex-direction: column;

    @media screen and (max-width: 430px) {
        height: 40%;
    }
`

export const LatestSermonTextDate = styled.p`
    color: rgba(0, 0, 0, 0.6);
`

export const LatestSermonTextBibleQuote = styled.h3`
    font-size: 25px;
`

export const LatestSermonTextPreacher = styled.p`
    color: rgba(0, 0, 0, 0.6);
`
export const SermonPageLink = styled.div`
    width: 100%;
    margin: 30px 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

// Church leaders
export const ChurchLeadersContainer = styled.div`
    width: 100%;
    height: auto;
    position: relative;
`

export const ChurchLeaderHeaderContainer = styled.div`
    width: 100%;
    align-items: center;
`

export const ChurchLeadersHeaderText = styled.h2`
    width: 100%;
    font-size: 25px;
    margin-bottom: 20px 0;
    text-transform: capitalize;
    padding: 20px 0;
    text-align: center;

    @media screen and (max-width: 430px) {
        width: 70%;
        text-align: left;
    }
`

export const ChurchLeaderHeaderActions = styled.div`
    

    & > .arrow{
        position: absolute;
        width: 50px;
        height: 50px;
        background-color: #1ea2b1;
        border-radius: 100%;
        top: 50%;
        font-size: 24px;
        font-weight: 300;
        color: #ffffff;
        user-select: none;

        &.left{
            left: 3%;
        }

        &.right{
            left: 95%;
        }

        &:hover{
            color: goldenrod;
            cursor: pointer;
        }
    }

    @media screen and (max-width: 430px) {
        .arrow{
            top: 5%;
            width: 30px;
            height: 30px;

            &.left{
                left: 75%;
            }

            &.right{
                left: 90%;
            }
        }
    }
`

export const Wrapper = styled.div`
    width: 82%;
    margin: auto;
    overflow-x: scroll;
    scroll-behavior: smooth;

    @media screen and (max-width: 430px) {
        width: 100%;
    }
`

export const ChurchLeaders = styled.ul`
    width: fit-content;
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: flex-start;
`

export const ChurchLeader = styled.li`
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 300px;
    overflow: hidden;

    @media screen and (max-width: 430px) {
        width: 150px;
        height: 230px;
    }
`

export const ChurchLeaderImageContainer = styled.div`
    width: 100%;
    height: 70%;
    flex-shrink: none;
    position: relative;
    overflow: hidden;
`

export const ChurchLeaderImageContainerBg = styled.div`
    position: absolute;
    top: 30%;
    width: 100%;
    height: 70%;
    background-color: goldenrod;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    z-index: 0;

    @media screen and (max-width: 430px) {
        height: 100%;
    }
`

export const ChurchLeaderImage = styled.img`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
`

export const ChurchLeaderTextContainer = styled.div`
    width: 100%;
    height: 30%;
    padding: 20px 0;
    display: flex;
    gap: 15px;
    flex-direction: column;
    align-items: flex-start;

    @media screen and (max-width: 430px) {
        padding: 5px 0;
        gap: 5px;
    }
`

export const ChurchLeaderTextName = styled.p`
    text-transform: uppercase;
    font-size: 20px;
    color: #000;

    @media screen and (max-width: 430px) {
        font-size: 16px;
        font-weight: 800;
    }
`

export const ChurchLeaderTextPosition = styled.p`
    font-size: 14px;
    text-transform: capitalize;
`
