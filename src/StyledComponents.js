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

export const Subtitle = styled.h2`
  font-size: 2rem;
  color: #8B3A3A;
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: 20px;
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
  background-color: #0A0A0A;
  padding: 8px 0;
  display: flex;
  justify-content: space-around;
  z-index: 1000;
  border-bottom: 2px solid #00A3E0;

  @media (max-width: 375px) {
    font-size: 0.7rem;
    padding: 5px 0;
  }
`;

export const NavItem = styled.a`
  color: #FFFFFF;
  margin: 0 10px;
  text-decoration: none;
  font-size: 1rem;
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
