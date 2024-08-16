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
  GallerySection,
  GalleryGrid,
  GalleryItem,
  HamburgerButton,
  HamburgerIcon,
  MobileMenu,
  MobileNavItem
} from './StyledComponents';
import Modal from './Modal'; // import the Modal component
import anim1 from './assets/images/anim1.gif';
import anim2 from './assets/images/anim2.gif';
import anim3 from './assets/images/anim3.gif';
import anim4 from './assets/images/anim4.gif';
import anim5 from './assets/images/anim5.gif';
import screen01 from './assets/images/screen1.png';
import screen02 from './assets/images/screen2.png';
import screen1 from './assets/images/screen001.png';
import screen2 from './assets/images/screen002.png';
import screen3 from './assets/images/screen003.png';
import screen4 from './assets/images/screen004.png';
import screen5 from './assets/images/screen005.png';
import screen6 from './assets/images/screen006.png';
import screen7 from './assets/images/screen007.png';
import screen8 from './assets/images/screen008.png';
import screen9 from './assets/images/screen009.png';
import screen10 from './assets/images/screen010.png';
import screen11 from './assets/images/screen011.png';
import screen12 from './assets/images/screen012.png';
import screen13 from './assets/images/screen013.png';
import screen14 from './assets/images/screen014.png';

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
      <Navbar>
        <NavItem href="#title">Introduction</NavItem>
        <NavItem href="#features">Key Features</NavItem>
        <NavItem href="#gameplay">Gameplay</NavItem>
        <NavItem href="#status">Development Status</NavItem>
        <NavItem href="#gallery">Gallery</NavItem>
        <NavItem href="#cta">Join Us</NavItem>
      </Navbar>

      <HamburgerButton onClick={toggleMenu}>
        <HamburgerIcon isOpen={menuOpen} />
        <HamburgerIcon isOpen={menuOpen} />
        <HamburgerIcon isOpen={menuOpen} />
      </HamburgerButton>

      <MobileMenu isOpen={menuOpen}>
        <MobileNavItem href="#title" onClick={toggleMenu}>Introduction</MobileNavItem>
        <MobileNavItem href="#features" onClick={toggleMenu}>Key Features</MobileNavItem>
        <MobileNavItem href="#gameplay" onClick={toggleMenu}>Gameplay</MobileNavItem>
        <MobileNavItem href="#status" onClick={toggleMenu}>Development Status</MobileNavItem>
        <MobileNavItem href="#gallery" onClick={toggleMenu}>Gallery</MobileNavItem>
        <MobileNavItem href="#cta" onClick={toggleMenu}>Join Us</MobileNavItem>
      </MobileMenu>

      <TitleSection id="title">
        <Title>Independent Skies</Title>
        <Image src={screen13} alt="Game Image Placeholder" onClick={() => toggleModal(screen13)} />
        <Section1TextBackground>
          <Section1TextContainer>
            <p>Embark on a journey to forge your destiny in <b>Independent Skies</b>. This upcoming sci-fi city builder is designed to test your survival instincts, strategic thinking, and willpower as you strive for independence from an ever-evolving Earth government.</p>
            <p>Leave behind the safety of Earth to establish a new colony in a distant world. You’ll need to <b>build</b>, <b>manufacture</b>, and <b>adapt</b> to alien conditions while working towards complete self-sufficiency. When the time is right, you’ll have the chance to declare independence and reshape your future under your own terms.</p>
            <p><b>Independent Skies</b> is currently in the early stages of development, with test builds already in the works. This is your chance to contribute to something extraordinary—join us now and be part of this project!</p>
          </Section1TextContainer>
        </Section1TextBackground>
      </TitleSection>

      <ContentSection id="features">
        <TextContainer>
          <ParagraphImage src={screen12} alt="Paragraph Image Placeholder" onClick={() => toggleModal(screen12)} />
          <Paragraph>Key Features</Paragraph>
          <StyledList>
            <li>Build and develop your city at your own pace, with the flexibility to adjust the challenge level.</li>
            <li>Play to optimize your logistics or simply enjoy the unfolding story—there’s no wrong way to play.</li>
            <li>Choose from a variety of starting planets and moons, ensuring each run feels fresh and unique.</li>
            <li>Pursue a singular goal, but keep playing as long as you want—the journey is yours to define.</li>
          </StyledList>
        </TextContainer>
      </ContentSection>

      <ContentSection id="gameplay">
        <TextContainer>
          <ParagraphImage src={screen3} alt="Paragraph Image Placeholder" onClick={() => toggleModal(screen3)} />
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

      <ContentSection id="status">
        <TextContainer>
          <ParagraphImage src={screen11} alt="Paragraph Image Placeholder"  onClick={() => toggleModal(screen11)}/>
          <Paragraph>Development Status</Paragraph>
          <StyledList>
            <li>Basic prototype developed, featuring resource handling, logistics (drones + manual transports), and Earth/colony resource exchange.</li>
            <li>Still to come: 2D/3D art (currently using placeholders), UI/UX polish, music and SFX, research tree, random events, independence mechanics, and end-game triggers.</li>
          </StyledList>
        </TextContainer>
      </ContentSection>

      <GallerySection id="gallery">
        <Title>Gallery</Title>
        <GalleryGrid>
          <GalleryItem onClick={() => toggleModal(anim2)}>
            <Image src={screen1} alt="Gallery Image 1" />
          </GalleryItem>
          <GalleryItem onClick={() => toggleModal(anim2)}>
            <Image src={anim2} alt="Gallery Image 2" />
          </GalleryItem>
          <GalleryItem onClick={() => toggleModal(screen11)}>
            <Image src={screen11} alt="Gallery Image 3" />
          </GalleryItem>
          <GalleryItem onClick={() => toggleModal(screen4)}>
            <Image src={screen4} alt="Gallery Image 4" />
          </GalleryItem>
          <GalleryItem onClick={() => toggleModal(screen1)}>
            <Image src={screen1} alt="Gallery Image 5" />
          </GalleryItem>
          
          <GalleryItem onClick={() => toggleModal(anim3)}>
            <Image src={anim3} alt="Gallery Image 6" />
          </GalleryItem>

          <GalleryItem onClick={() => toggleModal(screen4)}>
            <Image src={screen4} alt="Gallery Image 7" />
          </GalleryItem>
          <GalleryItem onClick={() => toggleModal(screen5)}>
            <Image src={screen5} alt="Gallery Image 8" />
          </GalleryItem>
          <GalleryItem onClick={() => toggleModal(anim5)}>
            <Image src={anim5} alt="Gallery Image 9" />
          </GalleryItem>

          <GalleryItem onClick={() => toggleModal(anim4)}>
            <Image src={anim4} alt="Gallery Image 10" />
          </GalleryItem>

          <GalleryItem onClick={() => toggleModal(screen7)}>
            <Image src={screen7} alt="Gallery Image 11" />
          </GalleryItem>
          <GalleryItem onClick={() => toggleModal(screen10)}>
            <Image src={screen10} alt="Gallery Image 12" />
          </GalleryItem>
          <GalleryItem onClick={() => toggleModal(screen9)}>
            <Image src={screen9} alt="Gallery Image 13" />
          </GalleryItem>

        </GalleryGrid>
      </GallerySection>

      <ContentSection id="cta">
        <Section1TextBackground>
          <Section1TextContainer>
            <p>Interested in shaping the future of <b>Independent Skies</b>? Join our Discord to apply for testing, share feedback, and stay updated on development progress. We need your feedback to bring the project to life!</p>
          </Section1TextContainer>
        </Section1TextBackground>
      </ContentSection>

      {isModalOpen && <Modal src={modalImageSrc} onClose={toggleModal} />}

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
