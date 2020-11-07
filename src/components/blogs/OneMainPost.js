import React, {useState} from "react";
import { Container, ContentWithPaddingXl } from "../misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import {SectionHeading} from "../misc/Headings";
import { PrimaryButton } from "../misc/Buttons";

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900`;
const Posts = tw.div`mt-6 sm:-mr-8 flex flex-wrap`;
const PostContainer = styled.div`
  ${tw`mt-10 w-full sm:w-1/2 lg:w-1/3 sm:pr-8`}
  ${props =>
    props.featured &&
    css`
      ${tw`w-full!`}
      ${Post} {
        ${tw`sm:flex-row! h-full sm:pr-4`}
      }
      ${Image} {
        ${tw`sm:h-96 sm:min-h-full sm:w-1/2 lg:w-2/3 sm:rounded-t-none sm:rounded-l-lg`}
      }
      ${Info} {
        ${tw`sm:-mr-4 sm:pl-8 sm:flex-1 sm:rounded-none sm:rounded-r-lg sm:border-t-2 sm:border-l-0`}
      }
      ${Description} {
        ${tw`text-sm mt-3 leading-loose text-gray-600 font-medium`}
      }
    `}
`;


const Post = tw.div`cursor-pointer flex flex-col bg-gray-100 rounded-lg`;
const Image = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-64 w-full bg-cover bg-center rounded-t-lg`}
`;
const Info = tw.div`p-8 border-2 border-t-0 rounded-lg rounded-t-none`;
const Category = tw.div`uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose after:content after:block after:border-b-2 after:border-primary-500 after:w-8`;
const CreationDate = tw.div`mt-4 uppercase text-gray-600 italic font-semibold text-xs`;
const Title = tw.div`mt-1 font-black text-2xl text-gray-900 group-hover:text-primary-500 transition duration-300`;
const Description = tw.div``;


const ButtonContainer = tw.div`flex justify-center`;
const LoadMoreButton = tw(PrimaryButton)`mt-16 mx-auto`;

export default ({
        headingText = "Blog Posts",
        posts = [
            {
                imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
                category: "Tech",
                date: "November 1, 2020",
                title: "New Advancement in Tech",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                url: "#",
                featured: true
            },
            createRandomPost(),
            createRandomPost(),
            createRandomPost(),
            createRandomPost(),
            createRandomPost(),
            createRandomPost(),
            {
                imageSrc: "https://images.unsplash.com/photo-1568952433726-3896e3881c65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
                category: "Tech",
                date: "April 10, 2020",
                title: "Ut aliquet tristique nisl vitae volutpat", 
                description: "Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa.",
                url: "#",
                featured: false
            },
            createRandomPost(),
            createRandomPost()
        ]
    }
) => {
        const [visible, setVisible] = useState(7);
        const onLoadMoreClick = () => {
            setVisible(v => v + 6);
        };
    return(
            <Container>
                <ContentWithPaddingXl>
                    <HeadingRow>
                        <Heading>{headingText}</Heading>
                    </HeadingRow>
                    <Posts>
                        {posts.slice(0,visible).map((post, index) => (
                            <PostContainer key={index} featured={post.featured}>
                                <Post className="group" as="a" href={post.url}>
                                    <Image imageSrc={post.imageSrc}/>
                                    <Info>
                                        <Category>{post.category}</Category>
                                        <CreationDate>{post.date}</CreationDate>
                                        <Title>{post.title}</Title>
                                        {post.featured && post.descrption && <Description>{post.description}</Description>}
                                    </Info>
                                </Post>
                            </PostContainer>
                        ))}
                    </Posts>
                    {visible < posts.length && (
                        <ButtonContainer>
                            <LoadMoreButton onClick={onLoadMoreClick}>More</LoadMoreButton>
                        </ButtonContainer>
                    )}
                </ContentWithPaddingXl>
            </Container>
    );

};

const createRandomPost = () => ({
    imageSrc: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
    category: "Other",
    date: "April 1, 2020",
    title: "Duis sit amet sodales felis.",
    description: "Sed ut dui ut lacus dictum fermentum vel tincidunt neque. Sed sed lacinia lectus. ",
    url: "#",
    featured: false
});