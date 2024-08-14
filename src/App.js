import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100vh;
  font-family: 'Montserrat', sans-serif;
  background-color: #0A0A0A;
  color: #FFFFFF;
  position: relative;
`;

const Section = styled.section`
  scroll-snap-align: start;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  overflow: hidden;
`;

const Navbar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #0A0A0A;
  padding: 15px;
  display: flex;
  justify-content: space-around;
  z-index: 1000;
  border-bottom: 2px solid #00A3E0;
`;

const NavItem = styled.a`
  color: #FFFFFF;
  margin: 0 15px;
  text-decoration: none;
  font-size: 1.2rem;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #00A3E0;
  }
`;

const TitleSection = styled(Section)`
  flex-direction: column;
  background: url('https://via.placeholder.com/1920x1080') center center/cover no-repeat;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 20px;
  color: #FFFFFF;
  text-shadow: 2px 2px 15px rgba(0, 163, 224, 0.8);
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  color: #F5A623;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: 20px;
  border: 3px solid #00A3E0;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 163, 224, 0.7);
`;

const ContentSection = styled(Section)`
  flex-direction: column;
  text-align: center;
`;

const TextContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: justify;
  font-size: 1.2rem;
  line-height: 1.8;
  padding: 20px;
`;

const ParagraphImage = styled.img`
  width: 150px;
  height: auto;
  border-radius: 10px;
  float: right;
  margin: 0 0 10px 10px;
  box-shadow: 0 0 10px rgba(0, 163, 224, 0.5);
`;

const StyledList = styled.ul`
  margin: 20px 0;
  padding-left: 20px;
  list-style-type: disc;

  & > li {
    margin-bottom: 10px;
    color: #00A3E0;
    font-weight: bold;
    transition: color 0.3s ease;

    &:hover {
      color: #F5A623;
    }
  }
`;

const Footer = styled.footer`
  background-color: #0A0A0A;
  color: #FFFFFF;
  text-align: center;
  padding: 20px;
  border-top: 2px solid #00A3E0;
  width: 100%;
`;

function App() {
  return (
    <Container>
      <Navbar>
        <NavItem href="#section1">Start</NavItem>
        <NavItem href="#section3">Main Features</NavItem>
        <NavItem href="#section4">Loop of a run</NavItem>
        <NavItem href="#section5">Development Status</NavItem>
        <NavItem href="#section6">Help us!</NavItem>
      </Navbar>

      <TitleSection id="section1">
        <Title>Independent Skies</Title>
        <Image src="https://via.placeholder.com/600x300" alt="Game Image Placeholder" />
        <TextContainer>
          <p>
            Upcoming sci-fi city builder with focus on surviving, developing, and getting independence from an ever changing Earth government.
          </p>
          <p>
            Embark on an adventure for autonomy and self sufficiency by leaving the cradle of humanity behind and start a new colony on a remote place. Build, manufacture and survive while enduring the unearthly conditions of the place, and when the sentiment is ready, declare independence.
          </p>
          <p>
            Independent skies is in a really early stage of development with some prototypes and builds for testing.
          </p>
        </TextContainer>
      </TitleSection>

      <ContentSection id="section3">
        <TextContainer>
          <ParagraphImage src="https://via.placeholder.com/150" alt="Paragraph Image Placeholder" />
          <p>Main Features:</p>
          <StyledList>
            <li>Focus on developing the city with a more slow chill pace. You can choose how challenging it is.</li>
            <li>Play to min-max your logistics or to just see the story through. There is no incorrect way of playing.</li>
            <li>Choose between several starting planets and moons to make each run different.</li>
            <li>One clear goal but you can play as long as you want.</li>
          </StyledList>
        </TextContainer>
      </ContentSection>

      <ContentSection id="section4">
        <TextContainer>
          <ParagraphImage src="https://via.placeholder.com/150" alt="Paragraph Image Placeholder" />
          <p>Loop of a run:</p>
          <StyledList>
            <li>Use drones for doing basic industry.</li>
            <li>Explore and expand.</li>
            <li>Get more complex resources from Earth through Rockets and alike.</li>
            <li>Prepare the terrain for humans with habitation, services and life support.</li>
            <li>Bring humans and watch them thrive. Protect them from the elements.</li>
            <li>With humans, unlock the more complex production and industries, like research.</li>
            <li>Develop revolutionary sentiment in the colony, and once they are ready, declare independence.</li>
            <li>Survive whatever Earth will throw you to stop you from becoming independent!</li>
          </StyledList>
        </TextContainer>
      </ContentSection>

      <ContentSection id="section5">
        <TextContainer>
          <ParagraphImage src="https://via.placeholder.com/150" alt="Paragraph Image Placeholder" />
          <p>Development status:</p>
          <StyledList>
            <li>Basic prototype developed, basic resource handling, basic logistics (drones + manual transports), Earth/Planet resource interchange, human behavior.</li>
            <li>Still missing: 2D/3D Art (using placeholders), UI/UX polish, Music and SFX, research tree, random events, independence mechanic and end game trigger.</li>
          </StyledList>
        </TextContainer>
      </ContentSection>

      <ContentSection id="section6">
        <TextContainer>
          <p>
            Do you want to be part of Independent Skies’ development? You are welcome to help testing and give feedback!
          </p>
          <p>
            Or maybe you just want to get news and updates of the development?
          </p>
          <p>
            Join our discord to know more: LINK
          </p>
        </TextContainer>
      </ContentSection>

      <Footer>
        &copy; 2024 All rights reserved.
      </Footer>
    </Container>
  );
}

export default App;
