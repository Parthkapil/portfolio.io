import React from "react";

import { Section, SectionDivider, SectionTitle } from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
	{ number: 38, text: "All India Rank in IEEE Extreme Hackathon" },
	{ number: 2, text: "Time Awarded Star Performer of the Quater at Travel Boutique Online" },
	{ number: "$20k+", text: "Revenue Generated from the OrderOfOneSolutions in just 5 months" },
];

const Acomplishments = () => (
	<Section>
		<SectionTitle>Personal Achievements</SectionTitle>
		<Boxes>
			{data.map((card, index) => (
				<Box key={index}>
					<BoxNum>{`${card.number}`}</BoxNum>
					<BoxText>{card.text}</BoxText>
				</Box>
			))}
		</Boxes>
		<SectionDivider />
	</Section>
);

export default Acomplishments;
