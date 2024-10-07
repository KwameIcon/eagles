import React from "react";
import {
  GiveContainer,
  GivingHeader,
  GivingInfo,
  MobileMoneyOptions,
  Option,
  FooterNote,
  Container,
} from "./donation.styled";

// images
import MTN from "../../assets/others/mtn-momo.png";
import Telecel from "../../assets/others/TELE.webp";
import AirtelTigo from "../../assets/others/airtel-tigo.png";
import MOMO from '../../assets/others/momo.jpg'


import Header from "../../components/header/header";
import AppFooter from "../../components/footer/footer";
import { ShowcaseHeader, ShowcaseHeaderContainer } from "../events/event.styled";

const Donation = () => {

  const returnDonationHeader = () => {
    return (
      <ShowcaseHeaderContainer>
        <ShowcaseHeader>
          Donate
        </ShowcaseHeader>
      </ShowcaseHeaderContainer>
    );
  }


  return (
    <Container>
        <Header imageChildren={MOMO} textChildren={returnDonationHeader()}/>
        <GiveContainer>
          <GivingHeader>Support Our Mission with Mobile Money</GivingHeader>
          <GivingInfo>
              Your generous donations help us spread the word of God and support our
              community outreach programs. Every contribution, large or small, makes a
              difference. You can securely donate using the mobile money options
              below:
          </GivingInfo>
          <MobileMoneyOptions>
              <Option>
                <img src={MTN} alt="MTN Mobile Money" />
                <span>MTN Mobile Money</span>
                <p>Send your donation to: +233 24 123 4567</p>
                <p>Registered Name: Christ Charismatic Center</p>
              </Option>
              <Option>
                <img src={Telecel} alt="Telecel Mobile Money" />
                <span>Telecel Mobile Money</span>
                <p>Send your donation to: +233 20 987 6543</p>
                <p>Registered Name: CCC Cape Coast</p>
              </Option>
              <Option>
                <img src={AirtelTigo} alt="AirtelTigo Mobile Money" />
                <span>AirtelTigo Money</span>
                <p>Send your donation to: +233 26 543 2100</p>
                <p>Registered Name: Christ Charismatic Center</p>
              </Option>
          </MobileMoneyOptions>
          <FooterNote>
              Once you send your donation, please ensure the registered name matches to confirm you're sending to the right recipient.
              Thank you for your generosity and for being a part of God's work at CCC Cape Coast.
          </FooterNote>
    </GiveContainer>
    <AppFooter/>
    </Container>
  );
};

export default Donation;
