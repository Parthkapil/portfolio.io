import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import { AiOutlineUser } from "react-icons/ai";

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from "./HeaderStyles";

const Header = () => (
	<Container>
		<Div2>
			<li>
				<Link href="#projects">
					<NavLink>Projects</NavLink>
				</Link>
			</li>
			<li>
				<Link href="#publications">
					<NavLink>Publications</NavLink>
				</Link>
			</li>
			<li>
				<Link href="#tech">
					<NavLink>Technologies</NavLink>
				</Link>
			</li>
			<li>
				<Link href="#about">
					<NavLink>About</NavLink>
				</Link>
			</li>
		</Div2>
		<Div3>
			<SocialIcons href="https://github.com/Parthkapil/">
				<AiFillGithub size="48px" />
			</SocialIcons>
			<SocialIcons href="https://www.linkedin.com/in/parth-kapil/">
				<AiFillLinkedin size="48px" />
			</SocialIcons>
			<SocialIcons href="https://www.instagram.com/parth.kapil/">
				<AiFillInstagram size="48px" />
			</SocialIcons>
		</Div3>
	</Container>
);

export default Header;
