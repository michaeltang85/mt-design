import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import Header, { NavLink, NavLinks, PrimaryLink, LogoLink, NavToggle, DesktopNavLinks } from "../headers/lightHeader.js";
import ResponsiveVideoEmbed from "../../helpers/ResponsiveVideoEmbed.js";


// Create Styled Components 

/* 
    pt->padding, max-w->max width
*/
const StyledHeader = styled(Header)`
    ${tw`pt-10 max-w-full`}
    ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
        ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
      }
      ${NavToggle}.closed {
        ${tw`text-gray-100 hover:text-primary-500`}
      }
`;

//Container with background image
const Container = styled.div`
      ${tw`relative -mt-8 bg-center bg-cover`}
      background-image: url("https://images.unsplash.com/photo-1548780977-74a1f9089b9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80");
`;

/*
 * z->z-index, absolute->position, inset->t/r/b/l, opacity->opacity
*/
const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-primary-500 opacity-25`

/*
 * Hero container with X columns
 * lg->container, relative-> position, flex->display
 * flex-col->flex item vertically
 */
const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
const LeftColumn = tw.div`flex flex-col items-center lg:block`;
const RightColumn = tw.div`w-full sm:w-5/6  lg:w-1/2 mt-16 lg:mt-0 lg:pl-8`;

const Heading = styled.h1`
    ${tw`text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-none`}
    span {
        ${tw`inline-block mt-3`}
    }      
`;

//background for a heading text
const SlantedBackground = styled.span`
  ${tw`relative text-primary-500 px-4 -mx-4 py-3`}
  &::before {
    content: "";
    ${tw`absolute inset-0 bg-gray-100 transform -skew-x-12 -z-10`}
  }
`;

const Notification = tw.span`inline-block my-4 pl-3 py-1 text-gray-100 border-l-4 border-blue-500 font-medium text-sm`;

//button
const PrimaryAction = tw.button`px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 text-primary-500 font-bold rounded shadow transition duration-300 hocus:bg-primary-500 hocus:text-gray-100 focus:shadow-outline`;

//For the embed video
const StyledResponsiveVideoEmbed = styled(ResponsiveVideoEmbed)`
  padding-bottom: 56.25% !important;
  padding-top: 0px !important;
  ${tw`rounded`}
  iframe {
    ${tw`rounded bg-black shadow-xl`}
  }
`;

export default () => {
    const navLinks = [
        <NavLinks key={1}>
            <NavLink href="#">Github</NavLink>
            <NavLink href="#">About</NavLink>
            <NavLink href="#">Blog</NavLink>
            <NavLink href="#">Pricing</NavLink>
        </NavLinks>,
        <NavLinks key={2}>
            <PrimaryLink href="/#">Login/Sign Up</PrimaryLink>
        </NavLinks>
    ];

    return(
        <Container>
            <OpacityOverlay/>
            <HeroContainer>
                <StyledHeader links={navLinks}/>
                <TwoColumn>
                    <LeftColumn>
                        <Heading>
                            <span>Design website by</span>
                            <br />
                            <SlantedBackground>Michael Tang</SlantedBackground>
                        </Heading>
                        <PrimaryAction href="#">Github</PrimaryAction>
                    </LeftColumn>
                    <RightColumn>
                        <StyledResponsiveVideoEmbed
                            url=""
                            background="transparent"
                        />
                    </RightColumn>
                </TwoColumn>
            </HeroContainer>
        </Container>
    );
};

