import styled from "styled-components";

export const SermonPageContainer = styled.section`

`

export const ShowcaseHeaderContainer = styled.div`
    color: #fff;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.2);
`

export const ShowcaseHeader = styled.h1`
    font-size: 70px;
    text-align: center;
`

export const ContentContainer = styled.div`
    width: 100%;
    overflow: hidden;
    
    @media screen and (max-width: 480px) {
        padding: 10px;
    }
`

// page header text
export const SermonHeaderContainer = styled.div`
    width: 100%;
    height: auto;
    margin: 30px 0;
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: center;
`

export const SermonHeaderService = styled.div`
    width: 100;
    display: flex;
    gap: 5px;
    justify-content: center;
    align-items: center;
`

export const Bar = styled.div`
    width: 150px;
    height: 1px;
    background-color: #ccc;
`
export const SermonHeaderServiceText = styled.p`
    text-transform: uppercase;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.5);
    letter-spacing: 0.4rem;
`

export const SermonHeaderText = styled.h1`
    text-transform: capitalize;
    font-size: 50px;
    margin: 20px 0 0 0;
`

export const SermonSubHeader = styled.p`
    font-size: 16px;
    color: rgba(0, 0, 0, 0.5);
`

// sermons
export const SermonsContainer = styled.div`
    width: 100%;
    height: auto;
    overflow: hidden;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`


export const Sermons = styled.div`
    width: 100%;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;

`


export const Sermon = styled.div`
    width: 310px;
    height: 450px;
    overflow: hidden;


    &:hover img{
        scale: 1.05;
    }
`

export const SermonImageContainer = styled.div`
    width: 100%;
    height: 70%;
    overflow: hidden;
    position: relative;
    cursor: pointer;
`

export const SermonImage = styled.img`
    width: 100%;
    height: 100%;
    transition: 0.3s ease-in;
`

export const Overlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 5;
    background-color: rgba(0, 0, 0, 0.5);
`

export const SermonImageTextContainer = styled.div`
    position: absolute;
    top: 5%;
    left: 5%;
    width: 90%;
    height: 90%;
    margin: auto;
    z-index: 10;
    border: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #ccc;
`

export const SermonImageText = styled.div`
    line-height: 1.4rem;
    text-align: center;
    margin: 10px 0;
`

export const SermonImageTextPlaceholder = styled.p`
    font-weight: 300px;
    letter-spacing: 0.5rem;
    text-transform: uppercase;
    font-size: 14px;
`

export const SermonImageTextPastor = styled.p`
    font-family: 'Pacifico';
    letter-spacing: 0.1rem;
`

export const SermonImageTextActions = styled.div`
    width: 100%;
    margin: 10px 0;
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
`

export const SermonImageTextActionBtn = styled.div`
    width: 120px;
    padding: 10px 8px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    transition: 0.3s ease-in-out;

    &:hover{
        background-color: rgba(150, 150, 150, 1);
        cursor: pointer;
    }
`

export const SermonTextContainer = styled.div`
    height: 30%;
    width: 100%;
    padding-top: 15px;
    display: flex;
    flex-direction: column;
    justify-content: first baseline;
    align-items: center;
`

export const SermonTextTitle = styled.div`
    width: 100%;
    font-size: 25px;
    text-transform: capitalize;
    text-align: center;
`

export const SermonTextDate = styled.div`

`

export const PaginationContainer = styled.div`
    width: 100%;
    margin: 30px auto;
    padding: 20px 0;
    display: flex;
    gap: 5px;
    justify-content: center;
    align-items: center;
    border: 1px solid #1ea2b1;

    button{
        min-width: 30px;
    }
`