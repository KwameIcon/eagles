// Contact.js
import { ContactContainer, ContactForm, ContactInfo, InputField, TextArea, SubmitButton, ContactDetails, Container } from "./contact.styled";
import Header from "../../components/header/header";
import AppFooter from "../../components/footer/footer"
import { ShowcaseHeader, ShowcaseHeaderContainer } from "../events/event.styled";

// images
import ContactImage from '../../assets/others/contact-us.png';

const Contact = () => {

  const returnContactUsHeader = () => {
    return (
      <ShowcaseHeaderContainer>
        <ShowcaseHeader>
          Contact Us
        </ShowcaseHeader>
      </ShowcaseHeaderContainer>
    );
  }


    return (
        <Container>
            <Header imageChildren={ContactImage} textChildren={returnContactUsHeader()}/>
            <ContactContainer>
                <ContactInfo>
                    <h1>Contact Us</h1>
                    <ContactDetails>
                        <p>Email: info@ccc.com</p>
                        <p>Phone: +233 123 456 789</p>
                        <p>Address: Cape Coast, Ghana</p>
                    </ContactDetails>
                </ContactInfo>

                <ContactForm>
                    <h2>Send Us a Message</h2>
                    <form>
                        <InputField type="text" placeholder="Your Name" />
                        <InputField type="email" placeholder="Your Email" />
                        <TextArea rows="5" placeholder="Your Message"></TextArea>
                        <SubmitButton type="submit">Submit</SubmitButton>
                    </form>
                </ContactForm>
            </ContactContainer>
            <AppFooter/>
        </Container>
    );
};

export default Contact;
