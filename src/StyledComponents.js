// StyledComponents.js
import styled from 'styled-components';
import backgroundImage from './assets/images/screen2.png';

export const Container = styled.div`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100vh;
  font-family: 'Montserrat', sans-serif;
  background-color: #1B1B1B;
  color: #F2E3D5;
  position: relative;
`;

export const Section = styled.section`
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
    overflow-y: auto;
  }
`;

export const TitleSection = styled(Section)`
  flex-direction: column;
  background: url(${backgroundImage}) center center/cover no-repeat;
  color: #F2E3D5;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
  padding-top: 100px;

  @media (max-width: 768px) {
    padding-top: 120px;
  }

  @media (max-width: 480px) {
    padding-top: 140px;
  }

  @media (max-width: 375px) {
    padding-top: 150px;
  }
`;

export const TextBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 5px;
`;

export const Title = styled.h1`
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
    font-size: 1.4rem;
    margin-top: 30px;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 300px; /* Restrict the height */
  object-fit: contain; /* Maintains aspect ratio and centers the image */
  margin: auto; /* Centers the image horizontally and vertically */
  display: block;

  border: 3px solid #8B3A3A;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(211, 84, 0, 0.7);

  @media (max-width: 768px) {
    max-width: 80%;
  }
`;

export const Navbar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #0A0A0A; /* This background color is for desktop */
  padding: 8px 0;
  display: flex;
  justify-content: space-around;
  z-index: 1000;
  border-bottom: 2px solid #00A3E0;

  @media (max-width: 768px) {
    display: none; /* Hide the navbar on mobile */
  }
`;

export const MobileMenu = styled.div`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 999;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    display: flex;
    transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(100%)'};
  }
`;

export const HamburgerIcon = styled.div`
  width: 30px;
  height: 3px;
  background-color: #FFFFFF;
  margin: 6px 0;
  transition: 0.4s;
  cursor: pointer;

  &:nth-child(1) {
    transform: ${({ isOpen }) => isOpen ? 'rotate(-45deg) translate(-5px, 5px)' : 'rotate(0)'};
  }

  &:nth-child(2) {
    opacity: ${({ isOpen }) => isOpen ? '0' : '1'};
  }

  &:nth-child(3) {
    transform: ${({ isOpen }) => isOpen ? 'rotate(45deg) translate(-5px, -5px)' : 'rotate(0)'};
  }
`;

export const HamburgerButton = styled.div`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000; /* Black background */
  padding: 10px;
  border-radius: 5px;
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 1001;

  @media (max-width: 768px) {
    display: flex;
  }
`;


export const NavItem = styled.a`
  color: #FFFFFF;
  margin: 10px 0;
  text-decoration: none;
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #00A3E0;
  }
`;


export const MobileNavItem = styled.a`
  color: #FFFFFF;
  margin: 20px 0;
  text-decoration: none;
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #00A3E0;
  }
`;

export const ContentSection = styled(Section)`
  flex-direction: column;
  text-align: center;
  padding-top: 80px;

  @media (max-width: 768px) {
    overflow-y: auto;
    padding-top: 100px;
  }
`;

export const Section1TextBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
  margin-right: 10px;
  margin-left: 10px;
  width: 100%;
  height: auto;

  @media (max-width: 768px) {
    margin-right: 5px;
    margin-left: 5px;
  }
`;

export const Section1TextContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: justify;
  font-size: 1.2rem;
  line-height: 1.8;
  padding-bottom: 20px;

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

export const TextContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: justify;
  font-size: 1.2rem;
  line-height: 1.8;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 15px;
    font-size: 1rem;
    line-height: 1.5;
    margin: 0 10px;
  }
`;

export const StyledList = styled.ul`
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
    padding-left: 15px;
    margin: 10px 0;
    text-align: left;
  }
`;

export const Paragraph = styled.p`
  color: #F2E3D5;
  line-height: 1.8;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.5;
    margin: 5px 0;
  }
`;

export const ParagraphImage = styled.img`
  width: 150px;
  height: auto;
  border-radius: 10px;
  float: right;
  margin: 0 0 10px 10px;
  box-shadow: 0 0 10px rgba(0, 163, 224, 0.5);
`;

export const Footer = styled.footer`
  background-color: #0A0A0A;
  color: #FFFFFF;
  text-align: center;
  padding: 20px;
  border-top: 2px solid #00A3E0;
  width: 100%;
`;

export const DiscordButton = styled.a`
  display: inline-block;
  margin-top: 20px;
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

  &:hover {
    background-color: #5a6cb2;
    transform: translateY(-2px);
  }
`;

export const FloatingDiscordButton = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
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
  z-index: 1000;

  &:hover {
    background-color: #5a6cb2;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    bottom: 15px;
    right: 15px;
  }
`;
export const GallerySection = styled.section`
  padding: 60px 0; /* Add more padding to top and bottom */
  background-color: #1B1B1B; 
  color: #F2E3D5; 
  text-align: center;
  height: 100vh; /* Ensure the section is at least as tall as the viewport */
  display: flex;
  flex-direction: column;
  justify-content: center;
  scroll-snap-align: start; /* Make sure the section snaps correctly */
  overflow: hidden; /* Ensure the section behaves consistently */
`;

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 20px;
  margin-top: 20px;
  padding: 0 20px;
`;

export const GalleryItem = styled.div`
  position: relative;
  cursor: pointer;
  overflow: hidden;

  &:hover img {
    transform: scale(1.1);
    transition: transform 0.3s ease;
  }
`;
