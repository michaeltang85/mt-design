import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import tw from "twin.macro";

import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { ReactComponent as ArrowDownIcon } from "feather-icons/dist/icons/arrow-down.svg";

const Subheading = tw(SubheadingBase)`mb-4 text-center text-blue-500`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const Column = tw.div`flex flex-col items-center`;
const HeaderContent = tw.div``;

const FAQSContainer = tw.dl`mt-12 max-w-4xl relative`;
const FAQ = tw.div`cursor-pointer select-none mt-5 px-8 sm:px-10 py-5 sm:py-4 rounded-lg text-gray-800 hover:text-gray-900 bg-gray-200 hover:bg-gray-300 transition duration-300`;
const Question = tw.dt`flex justify-between items-center`;
const QuestionText = tw.span`text-lg lg:text-xl font-semibold`;
const QuestionToggleIcon = motion.custom(styled.span`
  ${tw`ml-2 transition duration-300`}
  svg {
    ${tw`w-6 h-6`}
  }
`);

const Answer = motion.custom(tw.dd`pointer-events-none text-sm sm:text-base leading-relaxed`);
// eslint-disable-next-line
export default ({
    subheading = "FAQs",
    heading = "Questions?",
    description = "We have some answers to some of them.",
    faqs = [
        {
            question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque?",
            answer: "Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis."
        },
        {
            question: "Donec a dui et dui fringilla consectetur id nec massa. Aliquam erat volutpat?",
            answer: "Sed ut dui ut lacus dictum fermentum vel tincidunt neque. Sed sed lacinia lectus.",
        },
        {
            question: "Duis nunc eros, mattis at dui ac, convallis semper risus?",
            answer: "In adipiscing ultrices tellus, in suscipit massa vehicula eu.”"
        }
    ]
}) => {
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

    const toggleQuestion = questionIndex => {
        if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
        else setActiveQuestionIndex(questionIndex)
    };

    return (
        <Container>
            <ContentWithPaddingXl>
                <Column>
                    <HeaderContent>
                        {subheading && <Subheading>{subheading}</Subheading>}
                        <Heading>{heading}</Heading>
                        {description && <Description>{description}</Description>}
                    </HeaderContent>
                    <FAQSContainer>
                        {faqs.map((faq, index) => (
                            <FAQ key={index}
                                onClick={() => {toggleQuestion(index)}}
                                className="group"
                            >
                                <Question>
                                    <QuestionText>{faq.question}</QuestionText>
                                    <QuestionToggleIcon
                                        variants={{
                                        collapsed: { rotate: 0 },
                                        open: { rotate: -180 }
                                        }}
                                        initial="collapsed"
                                        animate={activeQuestionIndex === index ? "open" : "collapsed"}
                                        transition={{ duration: 0.02, ease: [0.04, 0.62, 0.23, 0.98] }}
                                    >
                                        <ArrowDownIcon />  
                                    </QuestionToggleIcon>
                                </Question>
                                <Answer
                                    variants={{
                                    open: { opacity: 1, height: "auto", marginTop: "16px" },
                                    collapsed: { opacity: 0, height: 0, marginTop: "0px" }
                                    }}
                                    initial="collapsed"
                                    animate={activeQuestionIndex === index ? "open" : "collapsed"}
                                    transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}                                
                                >
                                    {faq.answer}
                                </Answer>
                            </FAQ>
                        ))}
                    </FAQSContainer>
                </Column>
            </ContentWithPaddingXl>
        </Container>
    );
};