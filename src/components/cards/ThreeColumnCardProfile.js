import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings";
import {SectionDescription} from "components/misc/Typography";
import { ReactComponent as TwitterIcon} from "images/twitter-icon.svg";
import { ReactComponent as LinkedinIcon} from "images/linkedin-icon.svg";
import { ReactComponent as GithubIcon } from "images/github-icon.svg";


const HeadingContainer = tw.div``;
const Heading = tw(SectionHeading)``;
const Subheading = tw(SubheadingBase)`text-center mb-3`;
const Description = tw(SectionDescription)`mx-auto text-center`;

const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`
const Card = tw.div`mt-24 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center`
const CardImage = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`w-64 h-64 bg-contain bg-center rounded`}
`;

const CardContent = styled.div`
  ${tw`flex flex-col items-center mt-6`}
  .position {
    ${tw`uppercase font-bold tracking-widest text-xs text-primary-500`}
  }
  .name {
    ${tw`mt-1 text-xl font-medium text-gray-900`}
  9
`;
const CardLinks = styled.div`
  ${tw`mt-6 flex`}
  .link {
    ${tw`mr-8 last:mr-0 text-gray-500 hocus:text-blue-500 transition duration-300`}
    .icon {
      ${tw`fill-current w-6 h-6`}
    }
  }
`;
// eslint-disable-next-line
export default ({
    heading = "Meet the Team.",
    subheading = "Our People",
    description = "...",
    cards = [
        {
            imageSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=3.45&w=512&h=512&q=80",
            position: "Founder",
            name: "Joe Smith",
            links: [
                {
                    url: "#",
                    icon: TwitterIcon,
                },
                {
                    url: "#",
                    icon: GithubIcon,
                },
                {
                    url: "#",
                    icon: LinkedinIcon,
                }
            ]
        },
        {
            imageSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=3.45&w=512&h=512&q=80",
            position: "CEO",
            name: "Adelle Heaton",
            links: [
                {
                    url: "#",
                    icon: TwitterIcon,
                },
                {
                    url: "#",
                    icon: GithubIcon,
                },
                {
                    url: "#",
                    icon: LinkedinIcon
                }
            ]
        },
        {
            imageSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=3.45&w=512&h=512&q=80",
            position: "HR Manager",
            name: "Clare Hawkins",
            links: [
                {
                    url: "#",
                    icon: TwitterIcon,
                },
                {
                    url: "#",
                    icon: GithubIcon,
                },
                {
                    url: "#",
                    icon: LinkedinIcon
                }
            ]
        },
        {
            imageSrc: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&facepad=3.45&w=512&h=512&q=80",
            position: "Developer",
            name: "Claude Nieves",
            links: [
                {
                    url: "#",
                    icon: TwitterIcon,
                },
                {
                    url: "#",
                    icon: GithubIcon,
                },
                {
                    url: "#",
                    icon: LinkedinIcon
                }
            ]
        },
    ]
}) => {
    return (
        <Container>
            <ContentWithPaddingXl>
                <HeadingContainer>
                    {subheading && <Subheading>{subheading}</Subheading>}
                    {heading && <Heading>{heading}</Heading> }
                    {description && <Description>{description}</Description> }
                </HeadingContainer>
                <Cards>
                    {cards.map((card, index) => (
                        <Card key={index}>
                            <CardImage imageSrc={card.imageSrc} />
                            <CardContent>
                                <span className="position">{card.position}</span>
                                <span className="name">{card.name}</span>
                            </CardContent>
                            <CardLinks>
                                {card.links.map((link, linkIndex) => (
                                    <a key={linkIndex} className="link" href={link.url}>
                                    <link.icon className="icon" />
                                    </a> 
                                    ))}
                            </CardLinks>
                        </Card>
                    ))}
                </Cards>
            </ContentWithPaddingXl>
        </Container>
    );
};



