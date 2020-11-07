import React from "react";
import Header, { NavLink, NavLinks, PrimaryLink } from "../components/headers/lightHeader.js";
import Posts from "../components/blogs/OneMainPost.js";
import Footer from "../components/footers/FiveColDark.js";

// eslint-disable-next-line
export default () => {
    const navLinks = [
        <NavLinks key={1}>
            <NavLink href="https://github.com/michaeltang85/mt-design" target="_blank">Github</NavLink>
            <NavLink href="#">About</NavLink>
            <NavLink href="/pages/BlogPage">Blog</NavLink>
            <NavLink href="/pages/PricingPage">Pricing</NavLink>
        </NavLinks>,
        <NavLinks key={2}>
            <PrimaryLink href="/#">Login/Sign Up</PrimaryLink>
        </NavLinks>
    ];

    return (
        <div>
            <Header links={navLinks} />
            <Posts />
            <Footer />
        </div>
    );
};