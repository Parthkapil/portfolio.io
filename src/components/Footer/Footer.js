import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
	CompanyContainer,
	FooterWrapper,
	LinkColumn,
	LinkItem,
	LinkList,
	LinkTitle,
	Slogan,
	SocialContainer,
	SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
	return (
		<FooterWrapper>
			<LinkList>
				<LinkColumn>
					<LinkTitle>Call</LinkTitle>
					<LinkItem href="tel:812-606-7655">(812)-606-765</LinkItem>
				</LinkColumn>
				<LinkColumn>
					<LinkTitle>Email</LinkTitle>
					<LinkItem href="mailto:parthkapil.work@gmail.com">parthkapil.work@gmail.com</LinkItem>
				</LinkColumn>
			</LinkList>
			<SocialIconsContainer>
				<CompanyContainer>
					<Slogan>Create, curate, teach. That’s the way I code</Slogan>
				</CompanyContainer>
				<SocialContainer>
					<SocialIcons href="https://github.com/Parthkapil/">
						<AiFillGithub size="48px" />
					</SocialIcons>
					<SocialIcons href="https://www.linkedin.com/in/parth-kapil/">
						<AiFillLinkedin size="48px" />
					</SocialIcons>
					<SocialIcons href="https://www.instagram.com/parth.kapil/">
						<AiFillInstagram size="48px" />
					</SocialIcons>
				</SocialContainer>
			</SocialIconsContainer>
		</FooterWrapper>
	);
};

export default Footer;
