import React from "react";

import { Section, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = props => (
	<>
		<Section row nopadding>
			<LeftSection>
				<SectionTitle main center>
					Hi there, I'm Parth! Please feel free to look around.
				</SectionTitle>
				<SectionText>Would you like to turn your ideas into reality with me?</SectionText>
				<Button onClick={props.handleClick}>Download Resume</Button>
			</LeftSection>
		</Section>
	</>
);

export default Hero;
