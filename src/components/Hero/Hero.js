import React from "react";

import { Section, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

const handleClick = () => {
	const link = document.createElement("a");
	link.href = prefix + `/downloads/parth_kapil_resume.pdf`;
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
};

const Hero = props => (
	<>
		<Section row nopadding>
			<LeftSection>
				<SectionTitle main center>
					Hi there, I'm Parth! Please feel free to look around.
				</SectionTitle>
				<SectionText>Would you like to turn your ideas into reality with me?</SectionText>
				<Button
					onClick={() => {
						handleClick();
					}}
				>
					Download Resume
				</Button>
			</LeftSection>
		</Section>
	</>
);

export default Hero;
