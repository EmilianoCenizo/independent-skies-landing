import React from 'react';
import styled from 'styled-components';
import backgroundImage from './assets/images/screen2.png';

const Container = styled.div`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100vh;
  font-family: 'Montserrat', sans-serif;
  background-color: #1B1B1B; /* Fondo más oscuro */
  color: #F2E3D5; /* Texto color arena claro */
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

  @media (max-width: 768px) {
    width: 90vw;
    padding: 15px;
    height: 100vh;
    overflow-y: auto; /* Permite el desplazamiento interno */
  }
`;

const TitleSection = styled(Section)`
  flex-direction: column;
  background: url(${backgroundImage}) center center/cover no-repeat;
  color: #F2E3D5;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
  padding-top: 100px; /* Ajuste el padding-top para despejar el menú */

  @media (max-width: 768px) {
    padding-top: 120px; /* Mayor espacio en dispositivos móviles */
  }

  @media (max-width: 480px) {
    padding-top: 140px; /* Espacio adicional para pantallas más pequeñas */
  }

  @media (max-width: 375px) {
    padding-top: 150px; /* Máximo espacio para pantallas muy pequeñas */
  }
`;
const TextBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.5); /* Fondo negro semitransparente */
  padding: 10px;
  border-radius: 5px;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  color: #FFFFFF;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
  margin-top: 60px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-top: 50px;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
    margin-top: 40px; 
  }

  @media (max-width: 375px) {
    font-size: 1.4rem; /* Tamaño reducido para pantallas muy pequeñas */
    margin-top: 30px; /* Menor margen superior */
  }
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  color: #8B3A3A; /* Rojo oscuro */
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: 20px;
  border: 3px solid #8B3A3A;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(211, 84, 0, 0.7);

  @media (max-width: 768px) {
    max-width: 80%; /* Reduce el tamaño de la imagen en móviles */
  }
`;

const Navbar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #0A0A0A;
  padding: 8px 0;
  display: flex;
  justify-content: space-around;
  z-index: 1000;
  border-bottom: 2px solid #00A3E0;

  @media (max-width: 375px) {
    font-size: 0.7rem; /* Reducir el tamaño de fuente para pantallas más pequeñas */
    padding: 5px 0; /* Reducir el padding para pantallas más pequeñas */
  }
`;

const NavItem = styled.a`
  color: #FFFFFF;
  margin: 0 10px; /* Reduce el espacio entre los elementos */
  text-decoration: none;
  font-size: 1rem; /* Tamaño de fuente más pequeño */
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #00A3E0;
  }
`;

const ContentSection = styled(Section)`
  flex-direction: column;
  text-align: center;
  padding-top: 80px; /* Espacio adicional para el encabezado */

  @media (max-width: 768px) {
    overflow-y: auto;
    padding-top: 100px; /* Más espacio en pantallas pequeñas */
  }
`;
const Section1TextBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
  margin-right: 10px;
  margin-left: 10px;
  width: 100%; /* Asegura que el fondo ocupe el ancho completo */
  height: auto; /* Permite que la altura se ajuste al contenido */

  @media (max-width: 768px) {
    margin-right: 5px;
    margin-left: 5px;
  }
`;

const Section1TextContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: justify;
  font-size: 1.2rem;
  line-height: 1.8;
  padding-bottom: 20px; /* Añade un poco de espacio al final del texto */

  @media (max-width: 768px) {
    padding: 15px;
    font-size: 1rem;
    line-height: 1.5;
    margin: 0 10px;
  }

  p {
    color: #F2E3D5;
  }
`;

const TextContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: justify;
  font-size: 1.2rem;
  line-height: 1.8;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 15px; /* Ajusta el padding en dispositivos móviles */
    font-size: 1rem; /* Reduce ligeramente el tamaño de fuente */
    line-height: 1.5; /* Reduce el line-height */
    margin: 0 10px; /* Añade márgenes laterales */
  }
`;

const StyledList = styled.ul`
  margin: 20px 0;
  padding-left: 20px;
  list-style-type: disc;

  & > li {
    margin-bottom: 10px;
    color: #D35400;
    font-weight: bold;
    transition: color 0.3s ease;

    &:hover {
      color: #F39C12;
    }
  }

  @media (max-width: 768px) {
    padding-left: 15px; /* Reduce el padding en la lista */
    margin: 10px 0; /* Reduce el margen en dispositivos móviles */
    text-align: left; /* Alineación del texto a la izquierda */
  }
`;

const Paragraph = styled.p`
  color: #F2E3D5;
  line-height: 1.8;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 1rem; /* Reduce el tamaño de fuente en móviles */
    line-height: 1.5; /* Reduce el line-height en móviles */
    margin: 5px 0; /* Ajusta márgenes */
  }
`;

const ParagraphImage = styled.img`
  width: 150px;
  height: auto;
  border-radius: 10px;
  float: right;
  margin: 0 0 10px 10px;
  box-shadow: 0 0 10px rgba(0, 163, 224, 0.5);
`;

const Footer = styled.footer`
  background-color: #0A0A0A;
  color: #FFFFFF;
  text-align: center;
  padding: 20px;
  border-top: 2px solid #00A3E0;
  width: 100%;
`;

const DiscordButton = styled.a`
  display: inline-block;
  margin-top: 20px;
  padding: 12px 24px;
  background-color: #7289da; /* Color de Discord */
  color: #FFFFFF;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  border-radius: 5px;
  text-decoration: none;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #5a6cb2;
    transform: translateY(-2px);
  }
`;
const FloatingDiscordButton = styled.a`
  position: fixed;
  bottom: 20px; /* Ajusta la distancia desde la parte inferior */
  right: 20px; /* Ajusta la distancia desde la parte derecha */
  padding: 12px 24px;
  background-color: #7289da;
  color: #FFFFFF;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  border-radius: 5px;
  text-decoration: none;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease, transform 0.2s ease;
  z-index: 1000; /* Asegura que el botón esté por encima de otros elementos */

  &:hover {
    background-color: #5a6cb2;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 10px 20px; /* Ajusta el padding en dispositivos móviles */
    bottom: 15px; /* Ajusta la posición para pantallas pequeñas */
    right: 15px; /* Ajusta la posición para pantallas pequeñas */
  }
`;

function App() {
  return (
    <Container>
      <Navbar>
        <NavItem href="#section1">Start</NavItem>
        <NavItem href="#section3">Main Features</NavItem>
        <NavItem href="#section4">Gameplay</NavItem>
        <NavItem href="#section5">Development Status</NavItem>
        <NavItem href="#section6">Help us!</NavItem>
      </Navbar>

      <TitleSection id="section1">
      <Title>Independent Skies</Title>
        <Image src="https://via.placeholder.com/600x300" alt="Game Image Placeholder" />
  <Section1TextBackground>
    <Section1TextContainer>
<p>Join an extraordinary journey in the making! We're crafting an upcoming sci-fi city builder that challenges you to survive, develop, and ultimately gain independence from a constantly evolving Earth government.</p>

<p>Imagine venturing beyond the cradle of humanity to establish a new colony in a remote and unforgiving environment. 
You'll <b>build</b>, <b>manufacture</b>, and <b>adapt</b> to the harsh, otherworldly conditions while striving for self-sufficiency. And when the time is right, you’ll have the chance to declare your independence and shape the future under your own skies.</p>

<p><b>Independent Skies</b> is in an early, concepting stage of development, with exciting prototypes and test builds underway. This is your opportunity to be part of something truly amazing and help shape this ambitious project. Don’t miss out— join us now and be part of something truly extraordinary!</p>
    </Section1TextContainer>
  </Section1TextBackground>
</TitleSection>
      <ContentSection id="section3">
        <TextContainer>
          <ParagraphImage src="https://via.placeholder.com/150" alt="Paragraph Image Placeholder" />
          <Paragraph>Main Features</Paragraph>
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
              <Paragraph>Gameplay</Paragraph>
          <StyledList>
            <li>Use drones for doing basic industry.</li>
            <li>Explore and expand.</li>
            <li>Get more complex resources from Earth through Rockets and other transport.</li>
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
          <Paragraph>Development status</Paragraph>
          <StyledList>
            <li>Basic prototype developed, basic resource handling, basic logistics (drones + manual transports), Earth/Planet resource interchange, human behavior.</li>
            <li>Still missing: 2D/3D Art (using placeholders), UI/UX polish, Music and SFX, research tree, random events, independence mechanic and end game trigger.</li>
          </StyledList>
        </TextContainer>
      </ContentSection>

      <ContentSection id="section6">
        <Section1TextBackground>
    <Section1TextContainer>
          <p>
            Join our discord to know more: LINK
          </p>
        </Section1TextContainer>
        </Section1TextBackground>
      </ContentSection>

      <FloatingDiscordButton href="https://discord.gg/aF989Kkf64" target="_blank" rel="noopener noreferrer">
        Join our Discord to apply for testing
      </FloatingDiscordButton>

      <Footer>
        &copy; 2024 All rights reserved.
      </Footer>
    </Container>
  );
}

export default App;
