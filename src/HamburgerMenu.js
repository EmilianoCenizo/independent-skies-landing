// HamburgerMenu.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { NavItem } from './StyledComponents';

const Hamburger = styled.div`
  width: 30px;
  height: 3px;
  background-color: white;
  margin: 6px 0;
  transition: 0.4s;

  &:nth-child(1) {
    transform: ${({ open }) => open ? 'rotate(-45deg) translate(-8px, 8px)' : 'rotate(0)'};
  }
  
  &:nth-child(2) {
    opacity: ${({ open }) => open ? '0' : '1'};
  }
  
  &:nth-child(3) {
    transform: ${({ open }) => open ? 'rotate(45deg) translate(-8px, -8px)' : 'rotate(0)'};
  }
`;

const HamburgerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;

  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  display: ${({ open }) => open ? 'block' : 'none'};
  background-color: #0A0A0A;
  position: absolute;
  top: 50px;
  width: 100%;
  text-align: center;
  z-index: 1000;

  ${NavItem} {
    display: block;
    padding: 10px;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

export const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <HamburgerWrapper onClick={() => setOpen(!open)}>
        <Hamburger open={open} />
        <Hamburger open={open} />
        <Hamburger open={open} />
      </HamburgerWrapper>
      <MobileMenu open={open}>
        <NavItem href="#section1">Introduction</NavItem>
        <NavItem href="#section3">Key Features</NavItem>
        <NavItem href="#section4">Gameplay</NavItem>
        <NavItem href="#section5">Development Status</NavItem>
        <NavItem href="#section6">Join Us</NavItem>
      </MobileMenu>
    </>
  );
};
