import React, { useState } from 'react';
import {
  Container,
  Navbar,
  NavItem,
  TitleSection,
  ContentSection,
  Section1TextBackground,
  Section1TextContainer,
  Image,
  TextContainer,
  StyledList,
  ParagraphImage,
  Paragraph,
  FloatingDiscordButton,
  Footer,
  Title,
  HamburgerButton,
  HamburgerIcon,
  MobileMenu
} from './StyledComponents';
import Modal from './Modal'; // import the Modal component

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState('');

  const toggleModal = (src) => {
    setModalImageSrc(src);
    setModalOpen(!isModalOpen);
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <Container>
      <HamburgerButton onClick={toggleMenu}>
        <HamburgerIcon isOpen={menuOpen} />
        <HamburgerIcon isOpen={menuOpen} />
        <HamburgerIcon isOpen={menuOpen} />
      </HamburgerButton>

      <MobileMenu isOpen={menuOpen}>
        <NavItem href="#section1" onClick={toggleMenu}>Introduction</NavItem>
        <NavItem href="#section3" onClick={toggleMenu}>Key Features</NavItem>
        <NavItem href="#section4" onClick={toggleMenu}>Gameplay</NavItem>
        <NavItem href="#section5" onClick={toggleMenu}>Development Status</NavItem>
        <NavItem href="#section6" onClick={toggleMenu}>Join Us</NavItem>
      </MobileMenu>

      <Navbar>
        <NavItem href="#section1">Introduction</NavItem>
        <NavItem href="#section3">Key Features</NavItem>
        <NavItem href="#section4">Gameplay</NavItem>
        <NavItem href="#section5">Development Status</NavItem>
        <NavItem href="#section6">Join Us</NavItem>
      </Navbar>

      <TitleSection id="section1">
        <Title>Independent Skies</Title>
        <Image src="https://via.placeholder.com/600x300" alt="Game Image Placeholder" onClick={() => toggleModal("https://via.placeholder.com/600x300")} />
        <Section1TextBackground>
          <Section1TextContainer>
            <p>Embark on a journey to forge your destiny in <b>Independent Skies</b>. This upcoming sci-fi city builder is designed to test your survival instincts, strategic thinking, and willpower as you strive for independence from an ever-evolving Earth government.</p>
            <p>Leave behind the safety of Earth to establish a new colony in a distant world. You’ll need to <b>build</b>, <b>manufacture</b>, and <b>adapt</b> to alien conditions while working towards complete self-sufficiency. When the time is right, you’ll have the chance to declare independence and reshape your future under your own terms.</p>
            <p><b>Independent Skies</b> is currently in the early stages of development, with test builds already in the works. This is your chance to contribute to something extraordinary—join us now and be part of this project!</p>
          </Section1TextContainer>
        </Section1TextBackground>
      </TitleSection>

      <ContentSection id="section3">
        <TextContainer>
          <ParagraphImage src="https://via.placeholder.com/150" alt="Paragraph Image Placeholder" onClick={() => toggleModal("https://via.placeholder.com/150")} />
          <Paragraph>Key Features</Paragraph>
          <StyledList>
            <li>Build and develop your city at your own pace, with the flexibility to adjust the challenge level.</li>
            <li>Play to optimize your logistics or simply enjoy the unfolding story—there’s no wrong way to play.</li>
            <li>Choose from a variety of starting planets and moons, ensuring each run feels fresh and unique.</li>
            <li>Pursue a singular goal, but keep playing as long as you want—the journey is yours to define.</li>
          </StyledList>
        </TextContainer>
      </ContentSection>

      <ContentSection id="section4">
        <TextContainer>
          <ParagraphImage src="https://via.placeholder.com/150" alt="Paragraph Image Placeholder"  onClick={() => toggleModal("https://via.placeholder.com/150")}/>
          <Paragraph>Gameplay</Paragraph>
          <StyledList>
            <li>Leverage drones to manage basic industries and expand your colony.</li>
            <li>Explore and secure new territories to grow your influence.</li>
            <li>Obtain advanced resources from Earth via rockets and other transport methods.</li>
            <li>Prepare your environment for human habitation with essential services and life support.</li>
            <li>Welcome humans to your colony and protect them as they thrive in their new home.</li>
            <li>Unlock advanced production and industries, including research, with the help of human settlers.</li>
            <li>Foster revolutionary sentiment in your colony and declare independence when the time is right.</li>
            <li>Face the challenges Earth will throw at you to prevent your colony from gaining its independence!</li>
          </StyledList>
        </TextContainer>
      </ContentSection>

      <ContentSection id="section5">
        <TextContainer>
          <ParagraphImage src="https://via.placeholder.com/150" alt="Paragraph Image Placeholder"  onClick={() => toggleModal("https://via.placeholder.com/150")}/>
          <Paragraph>Development Status</Paragraph>
          <StyledList>
            <li>Basic prototype developed, featuring resource handling, logistics (drones + manual transports), and Earth/colony resource exchange.</li>
            <li>Still to come: 2D/3D art (currently using placeholders), UI/UX polish, music and SFX, research tree, random events, independence mechanics, and end-game triggers.</li>
          </StyledList>
        </TextContainer>
      </ContentSection>

      <ContentSection id="section6">
        <Section1TextBackground>
          <Section1TextContainer>
            <p>Interested in shaping the future of <b>Independent Skies</b>? Join our Discord to apply for testing, share feedback, and stay updated on development progress. We need your feedback to bring the project to life!</p>
          </Section1TextContainer>
        </Section1TextBackground>
      </ContentSection>

      {isModalOpen && <Modal src={modalImageSrc} onClose={toggleModal}  onClick={() => toggleModal("https://via.placeholder.com/150")}/>}

      <FloatingDiscordButton href="https://discord.gg/aF989Kkf64" target="_blank" rel="noopener noreferrer">
        Join our Discord to apply for testing!
      </FloatingDiscordButton>

      <Footer>
        &copy; 2024 All rights reserved.
      </Footer>
    </Container>
  );
}

export default App;
